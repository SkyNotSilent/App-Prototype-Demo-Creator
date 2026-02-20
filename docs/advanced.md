# 进阶功能指南

本文档包含原型开发中的进阶技术和最佳实践。

---

## 目录

1. [页面路由方案](#页面路由方案)
2. [数据持久化](#数据持久化)
3. [暗黑模式](#暗黑模式)
4. [动画与过渡](#动画与过渡)
5. [表单验证](#表单验证)
6. [图片懒加载](#图片懒加载)
7. [下拉刷新](#下拉刷新)
8. [无限滚动](#无限滚动)
9. [模拟 API 请求](#模拟-api-请求)
10. [组件化开发](#组件化开发)

---

## 页面路由方案

由于原型是纯静态 HTML，没有真正的路由系统。以下是几种实现页面导航的方法：

### 方法 1: Hash 路由（推荐）

使用 URL hash 实现单页应用效果。

**HTML 结构:**
```html
<div id="app">
    <!-- 根据 hash 显示不同内容 -->
    <div v-if="currentRoute === 'home'">
        <home-page></home-page>
    </div>
    <div v-else-if="currentRoute === 'list'">
        <list-page></list-page>
    </div>
    <div v-else-if="currentRoute === 'detail'">
        <detail-page :id="routeParams.id"></detail-page>
    </div>
</div>
```

**JavaScript 实现:**
```javascript
new Vue({
    el: '#app',
    data: {
        currentRoute: 'home',
        routeParams: {}
    },
    methods: {
        // 导航到指定页面
        navigateTo(route, params = {}) {
            this.currentRoute = route;
            this.routeParams = params;

            // 更新 URL hash
            const queryString = new URLSearchParams(params).toString();
            window.location.hash = `#/${route}${queryString ? '?' + queryString : ''}`;
        },

        // 解析 URL hash
        parseHash() {
            const hash = window.location.hash.slice(2); // 移除 #/
            if (!hash) {
                this.currentRoute = 'home';
                return;
            }

            const [route, queryString] = hash.split('?');
            this.currentRoute = route || 'home';

            // 解析查询参数
            if (queryString) {
                const params = {};
                new URLSearchParams(queryString).forEach((value, key) => {
                    params[key] = value;
                });
                this.routeParams = params;
            }
        },

        // 返回上一页
        goBack() {
            window.history.back();
        }
    },
    mounted() {
        // 监听 hash 变化
        window.addEventListener('hashchange', this.parseHash);

        // 初始化时解析 hash
        this.parseHash();
    },
    beforeDestroy() {
        window.removeEventListener('hashchange', this.parseHash);
    }
});
```

**使用示例:**
```html
<!-- 导航按钮 -->
<button @click="navigateTo('home')">首页</button>
<button @click="navigateTo('list')">列表</button>
<button @click="navigateTo('detail', { id: 123 })">详情</button>

<!-- 返回按钮 -->
<button @click="goBack()">返回</button>
```

### 方法 2: 使用组件切换

通过组件名动态切换显示内容。

```javascript
new Vue({
    el: '#app',
    data: {
        currentPage: 'home',
        pageHistory: []
    },
    methods: {
        switchPage(pageName) {
            this.pageHistory.push(this.currentPage);
            this.currentPage = pageName;
        },

        goBack() {
            if (this.pageHistory.length > 0) {
                this.currentPage = this.pageHistory.pop();
            }
        }
    }
});
```

---

## 数据持久化

### localStorage 完整封装

```javascript
// 数据存储工具类
const Storage = {
    // 保存数据
    set(key, value, expireDays = 0) {
        const data = {
            value: value,
            timestamp: Date.now(),
            expire: expireDays > 0 ? Date.now() + expireDays * 24 * 60 * 60 * 1000 : 0
        };
        localStorage.setItem(key, JSON.stringify(data));
    },

    // 读取数据
    get(key, defaultValue = null) {
        const item = localStorage.getItem(key);
        if (!item) return defaultValue;

        try {
            const data = JSON.parse(item);

            // 检查是否过期
            if (data.expire && Date.now() > data.expire) {
                localStorage.removeItem(key);
                return defaultValue;
            }

            return data.value;
        } catch (e) {
            return defaultValue;
        }
    },

    // 删除数据
    remove(key) {
        localStorage.removeItem(key);
    },

    // 清空所有数据
    clear() {
        localStorage.clear();
    },

    // 获取存储大小
    getSize() {
        let total = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                total += localStorage[key].length + key.length;
            }
        }
        return (total / 1024).toFixed(2) + ' KB';
    }
};

// 使用示例
Storage.set('user', { name: '张三', age: 25 }, 7); // 保存7天
const user = Storage.get('user', {}); // 读取数据，默认值为空对象
```

### Vue 数据自动持久化

```javascript
new Vue({
    el: '#app',
    data: {
        tasks: []
    },
    watch: {
        // 监听数据变化，自动保存
        tasks: {
            handler(newVal) {
                Storage.set('tasks', newVal);
            },
            deep: true // 深度监听
        }
    },
    mounted() {
        // 初始化时加载数据
        this.tasks = Storage.get('tasks', []);
    }
});
```

---

## 暗黑模式

### 实现暗黑模式切换

**CSS 变量定义:**
```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f3f4f6;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
}

[data-theme="dark"] {
    --bg-primary: #1c1c1e;
    --bg-secondary: #2c2c2e;
    --text-primary: #ffffff;
    --text-secondary: #9ca3af;
    --border-color: #3a3a3c;
}

body {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    transition: background-color 0.3s, color 0.3s;
}

.card {
    background-color: var(--bg-primary);
    border-color: var(--border-color);
}
```

**Vue 实现:**
```javascript
new Vue({
    el: '#app',
    data: {
        isDark: false
    },
    methods: {
        toggleTheme() {
            this.isDark = !this.isDark;
            document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
            Storage.set('theme', this.isDark ? 'dark' : 'light');
        },

        loadTheme() {
            const savedTheme = Storage.get('theme', 'light');
            this.isDark = savedTheme === 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    },
    mounted() {
        this.loadTheme();
    }
});
```

**切换按钮:**
```html
<button
    @click="toggleTheme"
    class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
>
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
</button>
```

---

## 动画与过渡

### Vue 过渡动画

```html
<!-- 淡入淡出 -->
<transition name="fade">
    <div v-if="show">内容</div>
</transition>

<!-- 滑动 -->
<transition name="slide">
    <div v-if="show">内容</div>
</transition>

<!-- 缩放 -->
<transition name="scale">
    <div v-if="show">内容</div>
</transition>
```

**CSS 动画:**
```css
/* 淡入淡出 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

/* 滑动 */
.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s;
}
.slide-enter {
    transform: translateX(100%);
}
.slide-leave-to {
    transform: translateX(-100%);
}

/* 缩放 */
.scale-enter-active, .scale-leave-active {
    transition: transform 0.3s;
}
.scale-enter, .scale-leave-to {
    transform: scale(0);
}
```

### 列表动画

```html
<transition-group name="list" tag="div">
    <div
        v-for="item in items"
        :key="item.id"
        class="list-item"
    >
        {{ item.title }}
    </div>
</transition-group>
```

```css
.list-enter-active, .list-leave-active {
    transition: all 0.3s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.list-move {
    transition: transform 0.3s;
}
```

---

## 表单验证

### 完整的表单验证系统

```javascript
new Vue({
    el: '#app',
    data: {
        form: {
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },
        errors: {},
        rules: {
            username: [
                { required: true, message: '请输入用户名' },
                { min: 3, max: 20, message: '用户名长度3-20个字符' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字、下划线' }
            ],
            email: [
                { required: true, message: '请输入邮箱' },
                { type: 'email', message: '邮箱格式不正确' }
            ],
            phone: [
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
            ],
            password: [
                { required: true, message: '请输入密码' },
                { min: 6, message: '密码至少6位' },
                { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, message: '密码必须包含大小写字母和数字' }
            ],
            confirmPassword: [
                { required: true, message: '请确认密码' },
                { validator: (value) => value === this.form.password, message: '两次密码不一致' }
            ]
        }
    },
    methods: {
        // 验证单个字段
        validateField(field) {
            const value = this.form[field];
            const rules = this.rules[field];

            if (!rules) return true;

            for (let rule of rules) {
                // 必填验证
                if (rule.required && !value) {
                    this.$set(this.errors, field, rule.message);
                    return false;
                }

                // 最小长度
                if (rule.min && value.length < rule.min) {
                    this.$set(this.errors, field, rule.message);
                    return false;
                }

                // 最大长度
                if (rule.max && value.length > rule.max) {
                    this.$set(this.errors, field, rule.message);
                    return false;
                }

                // 正则验证
                if (rule.pattern && !rule.pattern.test(value)) {
                    this.$set(this.errors, field, rule.message);
                    return false;
                }

                // 邮箱验证
                if (rule.type === 'email' && !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
                    this.$set(this.errors, field, rule.message);
                    return false;
                }

                // 自定义验证器
                if (rule.validator && !rule.validator(value)) {
                    this.$set(this.errors, field, rule.message);
                    return false;
                }
            }

            // 清除错误
            this.$set(this.errors, field, '');
            return true;
        },

        // 验证所有字段
        validateAll() {
            let isValid = true;
            for (let field in this.form) {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            }
            return isValid;
        },

        // 提交表单
        submitForm() {
            if (!this.validateAll()) {
                alert('请检查表单填写是否正确');
                return;
            }

            // 提交逻辑
            console.log('表单提交:', this.form);
        }
    }
});
```

---

## 图片懒加载

### 使用 Intersection Observer

```javascript
new Vue({
    el: '#app',
    data: {
        images: [
            { id: 1, src: 'image1.jpg', loaded: false },
            { id: 2, src: 'image2.jpg', loaded: false },
            { id: 3, src: 'image3.jpg', loaded: false }
        ]
    },
    mounted() {
        this.setupLazyLoad();
    },
    methods: {
        setupLazyLoad() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;
                        if (src) {
                            img.src = src;
                            img.classList.add('loaded');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px' // 提前50px开始加载
            });

            // 观察所有图片
            this.$nextTick(() => {
                document.querySelectorAll('img[data-src]').forEach(img => {
                    observer.observe(img);
                });
            });
        }
    }
});
```

**HTML:**
```html
<img
    v-for="image in images"
    :key="image.id"
    :data-src="image.src"
    src="placeholder.jpg"
    alt="懒加载图片"
    class="lazy-image"
>
```

**CSS:**
```css
.lazy-image {
    opacity: 0;
    transition: opacity 0.3s;
}

.lazy-image.loaded {
    opacity: 1;
}
```

---

## 下拉刷新

### 触摸下拉刷新

```javascript
new Vue({
    el: '#app',
    data: {
        isRefreshing: false,
        startY: 0,
        pullDistance: 0,
        threshold: 80 // 下拉阈值
    },
    methods: {
        handleTouchStart(e) {
            this.startY = e.touches[0].pageY;
        },

        handleTouchMove(e) {
            if (this.isRefreshing) return;

            const currentY = e.touches[0].pageY;
            this.pullDistance = currentY - this.startY;

            // 防止负值
            if (this.pullDistance < 0) {
                this.pullDistance = 0;
            }
        },

        handleTouchEnd() {
            if (this.pullDistance >= this.threshold) {
                this.refresh();
            } else {
                this.pullDistance = 0;
            }
        },

        async refresh() {
            this.isRefreshing = true;

            // 模拟刷新
            await new Promise(resolve => setTimeout(resolve, 1500));

            // 刷新完成
            this.isRefreshing = false;
            this.pullDistance = 0;

            // 重新加载数据
            this.loadData();
        },

        loadData() {
            // 加载数据逻辑
            console.log('重新加载数据');
        }
    }
});
```

**HTML:**
```html
<div
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    :style="{ transform: `translateY(${pullDistance}px)` }"
>
    <!-- 下拉提示 -->
    <div v-if="pullDistance > 0" class="refresh-indicator">
        <i :class="isRefreshing ? 'fas fa-spinner fa-spin' : 'fas fa-arrow-down'"></i>
        <span>{{ isRefreshing ? '刷新中...' : pullDistance >= threshold ? '松开刷新' : '下拉刷新' }}</span>
    </div>

    <!-- 内容 -->
    <div class="content">
        <!-- ... -->
    </div>
</div>
```

---

## 无限滚动

### 滚动加载更多

```javascript
new Vue({
    el: '#app',
    data: {
        items: [],
        page: 1,
        pageSize: 10,
        hasMore: true,
        isLoading: false
    },
    mounted() {
        this.loadItems();
        this.setupScrollListener();
    },
    methods: {
        setupScrollListener() {
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;

                // 距离底部100px时加载
                if (scrollTop + windowHeight >= documentHeight - 100) {
                    if (!this.isLoading && this.hasMore) {
                        this.loadMore();
                    }
                }
            });
        },

        async loadItems() {
            this.isLoading = true;

            // 模拟API请求
            await new Promise(resolve => setTimeout(resolve, 500));

            // 生成模拟数据
            const newItems = Array.from({ length: this.pageSize }, (_, i) => ({
                id: (this.page - 1) * this.pageSize + i + 1,
                title: `项目 ${(this.page - 1) * this.pageSize + i + 1}`
            }));

            this.items = [...this.items, ...newItems];
            this.page++;
            this.isLoading = false;

            // 模拟数据加载完毕
            if (this.page > 5) {
                this.hasMore = false;
            }
        },

        loadMore() {
            if (this.hasMore) {
                this.loadItems();
            }
        }
    }
});
```

**HTML:**
```html
<div>
    <!-- 项目列表 -->
    <div v-for="item in items" :key="item.id" class="item">
        {{ item.title }}
    </div>

    <!-- 加载提示 -->
    <div v-if="isLoading" class="loading">
        <i class="fas fa-spinner fa-spin"></i>
        <span>加载中...</span>
    </div>

    <!-- 没有更多数据 -->
    <div v-if="!hasMore" class="no-more">
        没有更多数据了
    </div>
</div>
```

---

## 模拟 API 请求

### 封装模拟 API

```javascript
// 模拟 API 类
class MockAPI {
    constructor() {
        this.delay = 500; // 模拟网络延迟
    }

    // 模拟请求
    request(data, success = true) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (success) {
                    resolve({
                        code: 200,
                        message: '成功',
                        data: data
                    });
                } else {
                    reject({
                        code: 500,
                        message: '服务器错误',
                        data: null
                    });
                }
            }, this.delay);
        });
    }

    // 获取任务列表
    async getTasks() {
        const tasks = Storage.get('tasks', []);
        return this.request(tasks);
    }

    // 添加任务
    async addTask(task) {
        const tasks = Storage.get('tasks', []);
        task.id = Date.now();
        task.createdAt = new Date().toISOString();
        tasks.push(task);
        Storage.set('tasks', tasks);
        return this.request(task);
    }

    // 更新任务
    async updateTask(id, updates) {
        const tasks = Storage.get('tasks', []);
        const index = tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...updates };
            Storage.set('tasks', tasks);
            return this.request(tasks[index]);
        }
        return this.request(null, false);
    }

    // 删除任务
    async deleteTask(id) {
        let tasks = Storage.get('tasks', []);
        tasks = tasks.filter(t => t.id !== id);
        Storage.set('tasks', tasks);
        return this.request({ id });
    }
}

const api = new MockAPI();

// 使用示例
new Vue({
    el: '#app',
    data: {
        tasks: [],
        isLoading: false
    },
    async mounted() {
        await this.loadTasks();
    },
    methods: {
        async loadTasks() {
            this.isLoading = true;
            try {
                const res = await api.getTasks();
                this.tasks = res.data;
            } catch (error) {
                console.error('加载失败:', error);
            } finally {
                this.isLoading = false;
            }
        },

        async addTask(task) {
            try {
                await api.addTask(task);
                await this.loadTasks();
            } catch (error) {
                console.error('添加失败:', error);
            }
        }
    }
});
```

---

## 组件化开发

### 使用 Vue 组件（单文件方式）

虽然原型不使用 `.vue` 文件，但可以在 HTML 中定义组件：

```javascript
// 定义任务卡片组件
Vue.component('task-card', {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    template: `
        <div class="task-card bg-white rounded-lg shadow p-4 mb-3" @click="$emit('click', task)">
            <h3 class="font-semibold text-gray-800 mb-2">{{ task.title }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ task.description }}</p>
            <div class="flex items-center justify-between text-xs text-gray-500">
                <span>{{ task.dueDate }}</span>
                <span :class="priorityClass">{{ priorityText }}</span>
            </div>
        </div>
    `,
    computed: {
        priorityClass() {
            const classes = {
                high: 'text-red-600',
                medium: 'text-yellow-600',
                low: 'text-gray-600'
            };
            return classes[this.task.priority];
        },
        priorityText() {
            const texts = {
                high: '高优先级',
                medium: '中优先级',
                low: '低优先级'
            };
            return texts[this.task.priority];
        }
    }
});

// 使用组件
new Vue({
    el: '#app',
    data: {
        tasks: [
            { id: 1, title: '任务一', description: '描述', priority: 'high', dueDate: '2026-02-20' },
            { id: 2, title: '任务二', description: '描述', priority: 'medium', dueDate: '2026-02-21' }
        ]
    }
});
```

**HTML 使用:**
```html
<div id="app">
    <task-card
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @click="handleTaskClick"
    ></task-card>
</div>
```

---

## 最佳实践总结

1. **保持代码简洁**: 原型代码应该清晰易懂，避免过度优化
2. **适当使用注释**: 为复杂逻辑添加注释
3. **模块化组织**: 将相关功能组织在一起
4. **错误处理**: 添加必要的错误处理和用户提示
5. **性能考虑**: 避免不必要的计算和渲染
6. **用户体验**: 添加加载状态、过渡动画等细节

---

## 更新日志

- 2026-02-19: 创建进阶功能文档
