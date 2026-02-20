# 故障排查指南

本文档包含原型开发过程中常见问题的解决方案。

---

## 目录

1. [资源加载问题](#资源加载问题)
2. [样式问题](#样式问题)
3. [Vue 相关问题](#vue-相关问题)
4. [移动端适配问题](#移动端适配问题)
5. [页面交互问题](#页面交互问题)
6. [数据持久化问题](#数据持久化问题)
7. [浏览器兼容性](#浏览器兼容性)
8. [性能优化](#性能优化)

---

## 资源加载问题

### 问题 1: Vue.js 文件加载失败

**症状:**
- 控制台报错: `Vue is not defined`
- 页面无响应，Vue 实例未初始化

**原因:**
- `vue.js` 文件路径错误
- 文件未正确复制到项目目录

**解决方案:**

1. 检查文件是否存在:
```bash
# 确认文件存在
ls app/assets/js/vue.js
```

2. 检查引用路径:
```html
<!-- 正确路径 -->
<script src="../assets/js/vue.js"></script>

<!-- 错误路径示例 -->
<script src="/assets/js/vue.js"></script>
<script src="assets/js/vue.js"></script>
```

3. 如果文件不存在，从 skill 资源目录复制:
```bash
cp skills/prototype-demo/assets/js/vue.js app/assets/js/vue.js
```

### 问题 2: CDN 资源加载慢或失败

**症状:**
- Tailwind CSS 或 FontAwesome 加载超时
- 页面样式丢失

**解决方案:**

1. 使用备选 CDN 源:
```html
<!-- Tailwind CSS 备选源 -->
<script src="https://cdn.jsdelivr.net/npm/tailwindcss@3"></script>
<!-- 或 -->
<script src="https://unpkg.com/tailwindcss@3"></script>

<!-- FontAwesome 备选源 -->
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
```

2. 添加资源预加载:
```html
<head>
    <link rel="preconnect" href="https://cdn.tailwindcss.com">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="dns-prefetch" href="https://cdn.tailwindcss.com">
</head>
```

3. 添加离线提示:
```html
<noscript>
    <div style="padding: 20px; text-align: center; background: #fee;">
        <p>您的网络连接似乎有问题，部分资源无法加载。</p>
        <p>请检查网络连接后刷新页面。</p>
    </div>
</noscript>
```

### 问题 3: 图片无法显示

**症状:**
- 图片显示为破损图标
- 控制台 404 错误

**解决方案:**

1. 检查图片路径是否正确:
```html
<!-- 相对路径 -->
<img src="../assets/images/logo.png">

<!-- 绝对路径（不推荐） -->
<img src="/assets/images/logo.png">
```

2. 使用占位图片服务:
```html
<!-- 使用 placeholder.com -->
<img src="https://via.placeholder.com/300x200" alt="占位图">

<!-- 使用 picsum.photos -->
<img src="https://picsum.photos/300/200" alt="随机图片">
```

3. 添加图片加载失败处理:
```html
<img
    src="../assets/images/logo.png"
    onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'"
    alt="Logo"
>
```

---

## 样式问题

### 问题 4: Tailwind CSS 类名不生效

**症状:**
- 添加的 Tailwind 类名没有效果
- 样式显示异常

**原因:**
- Tailwind CSS 未正确加载
- 自定义配置错误

**解决方案:**

1. 检查 Tailwind CDN 是否加载:
```html
<!-- 确保在 head 中引入 -->
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
```

2. 检查 Tailwind 配置:
```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: '#3B82F6',
                    secondary: '#10B981'
                }
            }
        }
    }
</script>
```

3. 清除浏览器缓存并刷新 (Ctrl+Shift+R 或 Cmd+Shift+R)

### 问题 5: 移动端样式错乱

**症状:**
- 移动设备上布局异常
- 字体过大或过小

**解决方案:**

1. 确保添加 viewport meta 标签:
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
```

2. 使用响应式类名:
```html
<div class="text-sm md:text-base lg:text-lg">
    响应式文字大小
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    响应式网格布局
</div>
```

### 问题 6: v-cloak 闪烁问题

**症状:**
- 页面加载时显示 `{{ variable }}`
- Vue 未编译的模板短暂显示

**解决方案:**

1. 添加 CSS 样式:
```css
[v-cloak] {
    display: none;
}
```

2. 在根元素添加 v-cloak:
```html
<div id="app" v-cloak>
    <!-- 内容 -->
</div>
```

---

## Vue 相关问题

### 问题 7: Vue 数据更新但视图未更新

**症状:**
- 修改数据后页面未变化
- 数组/对象更新无效

**原因:**
- Vue 2 响应式限制
- 直接修改数组索引或对象属性

**解决方案:**

1. 数组更新:
```javascript
// ❌ 错误方式
this.items[0] = newValue;
this.items.length = 0;

// ✅ 正确方式
this.$set(this.items, 0, newValue);
this.items.splice(0); // 清空数组
this.items.push(newItem);
```

2. 对象更新:
```javascript
// ❌ 错误方式
this.obj.newProperty = 'value';

// ✅ 正确方式
this.$set(this.obj, 'newProperty', 'value');
// 或
this.obj = { ...this.obj, newProperty: 'value' };
```

### 问题 8: Vue 生命周期钩子不执行

**症状:**
- `mounted` 或其他钩子未触发
- 初始化代码未运行

**解决方案:**

1. 检查钩子名称拼写:
```javascript
new Vue({
    el: '#app',
    mounted() {  // ✅ 正确
        console.log('组件已挂载');
    },
    // mount() {  // ❌ 错误
    //     console.log('组件已挂载');
    // }
});
```

2. 确保 el 元素存在:
```javascript
// ❌ 错误：元素不存在
new Vue({
    el: '#non-exist'
});

// ✅ 正确：元素存在
new Vue({
    el: '#app'  // 确保HTML中有 <div id="app"></div>
});
```

### 问题 9: 事件修饰符不工作

**症状:**
- `@click.prevent` 等修饰符无效
- 表单提交页面刷新

**解决方案:**

1. 检查修饰符语法:
```html
<!-- ✅ 正确 -->
<form @submit.prevent="handleSubmit">
    <button type="submit">提交</button>
</form>

<!-- ❌ 错误 -->
<form onsubmit="handleSubmit()">
    <button type="submit">提交</button>
</form>
```

---

## 移动端适配问题

### 问题 10: 移动端触摸事件问题

**症状:**
- 点击延迟 300ms
- 触摸事件不响应

**解决方案:**

1. 禁用双击缩放:
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
```

2. 使用 touch-action CSS:
```css
.button {
    touch-action: manipulation;
}
```

3. 添加触摸反馈:
```css
.button:active {
    transform: scale(0.95);
    opacity: 0.8;
}
```

### 问题 11: iOS Safari 样式问题

**症状:**
- 输入框聚焦时放大
- 顶部安全区域遮挡

**解决方案:**

1. 防止输入框聚焦放大:
```css
input, textarea, select {
    font-size: 16px; /* 至少 16px 防止自动放大 */
}
```

2. 添加安全区域适配:
```css
.header {
    padding-top: env(safe-area-inset-top);
}

.footer {
    padding-bottom: env(safe-area-inset-bottom);
}
```

---

## 页面交互问题

### 问题 12: 页面间通信失败

**症状:**
- 页面跳转后数据丢失
- iframe 通信失败

**解决方案:**

1. 使用 URL 参数传递数据:
```javascript
// 发送页面
const taskId = 123;
window.location.href = `task-detail.html?id=${taskId}`;

// 接收页面
const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get('id');
```

2. 使用 localStorage 共享数据:
```javascript
// 保存数据
localStorage.setItem('taskId', 123);

// 读取数据
const taskId = localStorage.getItem('taskId');

// 删除数据
localStorage.removeItem('taskId');
```

3. iframe 通信:
```javascript
// 父页面
iframe.contentWindow.postMessage({ type: 'update', data: data }, '*');

// 子页面
window.addEventListener('message', (event) => {
    if (event.data.type === 'update') {
        console.log('收到数据:', event.data.data);
    }
});
```

### 问题 13: 滚动问题

**症状:**
- 弹出键盘后页面错位
- 滚动穿透

**解决方案:**

1. 固定滚动容器:
```css
body {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
}

.main-content {
    overflow-y: auto;
    height: calc(100vh - 60px); /* 减去头部高度 */
}
```

2. 禁用滚动穿透:
```javascript
// 打开弹窗时
document.body.style.overflow = 'hidden';

// 关闭弹窗时
document.body.style.overflow = '';
```

---

## 数据持久化问题

### 问题 14: localStorage 存储限制

**症状:**
- 数据保存失败
- 存储空间不足

**解决方案:**

1. 检查存储大小:
```javascript
function getLocalStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            total += localStorage[key].length + key.length;
        }
    }
    return total / 1024; // KB
}

console.log('已使用:', getLocalStorageSize(), 'KB');
```

2. 数据压缩:
```javascript
// 存储前压缩
const data = JSON.stringify(largeObject);
localStorage.setItem('data', data);

// 使用时解析
const parsed = JSON.parse(localStorage.getItem('data'));
```

3. 清理旧数据:
```javascript
// 清理过期的缓存数据
function cleanExpiredData() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        if (key.startsWith('cache_')) {
            const item = JSON.parse(localStorage.getItem(key));
            if (Date.now() - item.timestamp > 7 * 24 * 60 * 60 * 1000) { // 7天
                localStorage.removeItem(key);
            }
        }
    });
}
```

### 问题 15: 数据丢失

**症状:**
- 刷新页面后数据消失
- localStorage 数据被清除

**解决方案:**

1. 添加数据备份:
```javascript
// 保存时添加时间戳
function saveData(key, data) {
    const item = {
        data: data,
        timestamp: Date.now(),
        version: '1.0'
    };
    localStorage.setItem(key, JSON.stringify(item));
}

// 读取时验证
function loadData(key) {
    const item = JSON.parse(localStorage.getItem(key));
    if (!item) return null;

    // 验证版本
    if (item.version !== '1.0') {
        console.warn('数据版本不匹配');
        return null;
    }

    return item.data;
}
```

2. 使用 sessionStorage 作为临时备份:
```javascript
// 临时数据存到 sessionStorage
sessionStorage.setItem('tempData', JSON.stringify(data));

// 永久数据存到 localStorage
localStorage.setItem('permData', JSON.stringify(data));
```

---

## 浏览器兼容性

### 问题 16: IE 浏览器不支持

**症状:**
- IE 下页面空白
- JavaScript 报错

**解决方案:**

1. 添加兼容性提示:
```html
<!--[if IE]>
<div style="padding: 20px; text-align: center; background: #fee;">
    <h2>浏览器不兼容</h2>
    <p>您的浏览器版本过旧，请使用 Chrome、Firefox 或 Edge 浏览器访问。</p>
</div>
<![endif]-->
```

2. 本项目主要支持现代浏览器:
   - Chrome 90+
   - Safari 14+
   - Firefox 88+
   - Edge 90+

### 问题 17: ES6 语法不兼容

**症状:**
- 箭头函数报错
- let/const 报错

**解决方案:**

1. 使用 ES5 语法:
```javascript
// ❌ ES6 箭头函数
methods: {
    handleClick: () => {
        console.log(this); // this 指向不正确
    }
}

// ✅ ES5 函数
methods: {
    handleClick: function() {
        console.log(this); // this 指向正确
    }
}
```

---

## 性能优化

### 问题 18: 页面加载慢

**症状:**
- 白屏时间长
- 资源加载慢

**解决方案:**

1. 添加加载状态:
```html
<div id="app">
    <div v-if="loading" class="loading">
        <i class="fas fa-spinner fa-spin"></i>
        <p>加载中...</p>
    </div>
    <div v-else>
        <!-- 内容 -->
    </div>
</div>
```

2. 延迟加载非关键资源:
```html
<!-- 延迟加载图片 -->
<img loading="lazy" src="image.jpg" alt="延迟加载的图片">

<!-- 延迟执行脚本 -->
<script defer src="script.js"></script>
```

### 问题 19: 内存泄漏

**症状:**
- 页面越来越慢
- 浏览器崩溃

**解决方案:**

1. 清理定时器:
```javascript
new Vue({
    data: {
        timer: null
    },
    mounted() {
        this.timer = setInterval(() => {
            // 定时任务
        }, 1000);
    },
    beforeDestroy() {
        // 清理定时器
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
});
```

2. 移除事件监听:
```javascript
mounted() {
    window.addEventListener('resize', this.handleResize);
},
beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
}
```

---

## 调试技巧

### 使用浏览器开发者工具

1. **Chrome DevTools**
   - 按 F12 打开
   - Console: 查看日志和错误
   - Network: 检查资源加载
   - Application: 查看 localStorage

2. **Vue DevTools** (可选)
   - 安装 Vue DevTools 浏览器扩展
   - 查看 Vue 组件树和状态

3. **移动端调试**
   - Chrome: `chrome://inspect`
   - Safari: 开发菜单 → 模拟器

### 常用调试代码

```javascript
// 打印 Vue 实例数据
console.log('Vue Data:', this.$data);

// 打印 localStorage
console.log('LocalStorage:', localStorage);

// 性能测试
console.time('操作耗时');
// ... 你的代码
console.timeEnd('操作耗时');

// 检查变量类型
console.log('类型:', typeof myVar);
```

---

## 获取帮助

如果以上方案都无法解决你的问题：

1. **检查文档**: 重新阅读 [SKILL-CN.md](../SKILL-CN.md)
2. **查看示例**: 参考 [examples](../examples/) 目录中的示例代码
3. **使用代码片段**: 从 [snippets](../snippets/) 中复制可用代码
4. **搜索问题**: 在 Google 或 Stack Overflow 搜索错误信息
5. **提出 Issue**: 在项目中反馈问题

---

## 更新日志

- 2026-02-19: 创建故障排查文档
