---
name: app-prototype-demo-creator
description: 快速创建移动端 Web 原型和 MVP 应用，使用 HTML、Vue 2、Tailwind CSS，无需构建步骤。包含 PRD 文档、概览页面和独立页面模板。
---

# App Prototype Demo Creator

> 快速移动应用原型创建工具

## 概述

此技能用于创建轻量级、无构建的 Web 原型。它生成一个项目结构，包含产品需求文档(PRD)、一个中央概览页面(模拟移动设备框架)以及每个屏幕的独立 HTML 页面。

**技术栈：**
- **Vue.js**: 2.6.14 (本地文件)
- **Tailwind CSS**: 3.x (CDN)
- **FontAwesome**: 6.4.0 (CDN)

**适用场景：**
- 快速产品原型验证
- MVP (最小可行产品) 演示
- 移动端优先的 Web 应用
- 用户界面流程演示

**不适用场景：**
- 生产环境应用
- 需要后端 API 的复杂应用
- 需要构建工具的大型项目

---

## 工作流程

### ⚠️ 执行顺序（严格遵守）

```
1. 分析需求 → 编写 PRD.md
2. 创建项目结构
3. ⚠️ 创建概览页面 (app/index.html) ← 必须优先完成！
4. 复制 vue.js 文件
5. 创建具体页面 (app/pages/*.html)
6. 验证和测试
```

**为什么要先创建概览页面？**
- 概览页面是项目的"总览图"和"入口"
- 可以实时预览所有页面
- 确保项目结构从一开始就是正确的
- 避免遗漏任何页面

### 1. 分析与 PRD 生成

首先，分析用户的请求并在项目根目录生成 `PRD.md` 文件。

**PRD 应包括：**
- **项目名称与标语**：简洁的产品定位
- **用户画像**：目标用户特征
- **功能模块**：核心功能划分
- **页面流程与交互**：用户操作路径
- **核心功能**：优先级排序的功能列表

**参考示例：** 见 [examples/prd-example.md](examples/prd-example.md)

### 2. 项目设置

**重要：在创建任何具体页面之前，必须先完成以下步骤！**

创建以下目录结构：

```
project-name/
├── PRD.md                    # 产品需求文档
└── app/
    ├── index.html            # ⚠️ 概览页面 (必须第一步创建)
    ├── pages/                # 各个屏幕页面
    │   ├── home.html
    │   ├── login.html
    │   └── ...
    └── assets/
        ├── js/
        │   ├── vue.js        # 本地 Vue 2 库
        │   └── data.js       # (可选) 模拟数据
        └── images/           # 占位图片
```

**执行顺序（严格遵守）：**

1. **创建项目目录结构**
2. **复制 vue.js 文件**：
   ```bash
   cp assets/js/vue.js <project-path>/app/assets/js/vue.js
   ```
3. **⚠️ 立即创建概览页面 (app/index.html)** - 这是必须的第一步！
4. 然后再创建具体页面

### 3. 创建概览页面 (app/index.html)

**⚠️ 这是项目的核心入口页面，必须最先创建！**

使用 `assets/templates/index.html` 模板。

**模板变量：**
- `{{PROJECT_NAME}}`：项目名称
- `{{PROJECT_DESCRIPTION}}`：项目描述
- `{{PAGES_GRID}}`：页面网格内容

**生成页面网格：**

对于 PRD 中定义的每个页面，创建一个网格项：

```html
<div class="flex flex-col items-center">
  <h2 class="text-xl font-bold mb-4 text-blue-300">页面名称</h2>
  <div class="device-mockup transform scale-90">
    <div class="device-notch"></div>
    <div class="device-screen">
      <iframe src="pages/page-filename.html" class="page-frame"></iframe>
    </div>
  </div>
</div>
```

**重要提示：**
- 即使具体页面还没创建，也要在概览页面中添加对应的 iframe
- 这样可以在开发过程中实时查看每个页面的进度
- 概览页面使用相对路径 `pages/xxx.html`

**⚠️ 必须遵守概览页面设计规范（见下方"概览页面设计规范"章节）**

### 4. 创建独立页面 (app/pages/*.html)

为 PRD 中定义的每个屏幕在 `app/pages/` 中创建 HTML 文件。
使用 `assets/templates/page.html` 模板。

**技术指南：**
- **Vue 2**：使用本地脚本 `<script src="../assets/js/vue.js"></script>`
- **Tailwind**：使用 CDN `<script src="https://cdn.tailwindcss.com"></script>`
- **FontAwesome**：使用 CDN 链接
- **移动优先**：设计尺寸 375x667 (iPhone SE)
- **无构建**：不使用 `.vue` 文件或 `import` 语句

**每个页面的实现步骤：**
1. 设置 `{{PAGE_TITLE}}`
2. 在 `#app` 内实现 UI 结构
3. 在 `new Vue({...})` 中实现 Vue 逻辑
4. 使用 `data` 管理状态，`methods` 处理交互
5. 使用 `v-cloak` 防止 FOUC (Flash of Unstyled Content)

**页面示例：**
- [登录页示例](examples/login-page.html)
- [列表页示例](examples/list-page.html)

### 5. 组件代码片段

为了快速开发，提供以下可复用组件代码片段：

- [导航栏组件](snippets/navbar.html)
- [卡片组件](snippets/card.html)
- [表单组件](snippets/form.html)

### 6. 最终验证

完成后执行自检清单：

**核心验证（必须完成）：**
- [ ] PRD 包含所有功能模块
- [ ] **概览页面 (app/index.html) 已创建且可访问**
- [ ] 所有页面已在概览页面中列出
- [ ] `vue.js` 文件已复制到正确位置

**功能验证：**
- [ ] 所有页面可正常访问
- [ ] 页面间导航正常
- [ ] 移动端适配正确
- [ ] 无浏览器控制台错误
- [ ] 所有资源路径正确（相对路径）
- [ ] Tailwind CSS 正常加载
- [ ] FontAwesome 图标正常显示

**验证方法：**
1. 打开 `app/index.html` 概览页面
2. 检查所有页面的 iframe 是否正常加载
3. 点击进入每个页面测试功能
4. 检查页面间的跳转是否正常

---

## 概览页面设计规范

### 设计原则

**简洁优雅**：概览页面是项目的第一印象，应该清晰、专业、美观。避免过度设计。

### 推荐设计方案

#### 1. 背景配色

**推荐：渐变背景（默认）**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**备选：深色背景**
```css
background: #111827;
```

#### 2. 设备框架尺寸

**推荐尺寸：320×640px**
- 宽度：320px（更窄更精致）
- 高度：640px（2:1 黄金比例）
- 圆角：40px

**不推荐：375×812px**
- 尺寸过大，显得笨重
- 长宽比不协调，在缩放后显得细长

#### 3. 刘海设计

**推荐：底部圆角刘海**
```css
.device-notch {
  background: #1a1a1a;
  border-radius: 0 0 15px 15px;  /* 只有底部圆角 */
}
```

**不推荐：双角圆角刘海**
```css
/* 不推荐 */
.device-notch {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
```

#### 4. 屏幕背景

**推荐：白色背景**
```css
.device-screen {
  background: white;
}
```

**理由：**
- 白色与渐变背景形成舒适对比
- 页面内容更清晰可读
- 不像纯黑那样刺眼

### 可选增强

**项目信息卡片（推荐添加）**

在页面底部添加一个信息卡片，展示：
- 核心功能列表
- 目标用户
- 技术栈信息

示例：
```html
<div class="project-info-card">
  <h3>📋 项目说明</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h4 class="font-semibold mb-3">🎯 核心功能</h4>
      <ul>
        <li>• 功能1</li>
        <li>• 功能2</li>
      </ul>
    </div>
    <div>
      <h4 class="font-semibold mb-3">👥 目标用户</h4>
      <ul>
        <li>• 用户群体1</li>
      </ul>
    </div>
  </div>
</div>
```

**卡片样式：**
```css
.project-info-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 32px;
  margin-top: 60px;
}
```

### 设计禁忌

❌ **不要添加以下元素：**

1. **每个设备都加卡片包装** - 增加视觉复杂度，画蛇添足
2. **深色背景 + 黑屏** - 对比度太强，显得压抑
3. **过大的设备尺寸** - 375×812 在缩放后不协调
4. **复杂的 hover 效果** - 在网格布局下会导致抖动
5. **过多的装饰元素** - 保持简洁，聚焦内容

### 设计参考

**最佳实践案例：**
- [healthy-eating-2.0](../healthy-eating-2.0/app/index.html) - 完美的概览页面设计

---

## 页面内容设计规范

### 颜色方案

```javascript
// Tailwind 配置中的推荐颜色
colors: {
  primary: '#3B82F6',      // 主色 - 蓝色
  secondary: '#10B981',    // 辅助色 - 绿色
  accent: '#F59E0B',       // 强调色 - 橙色
  danger: '#EF4444',       // 危险 - 红色
  dark: '#1C1C1E',         // 深色背景
  light: '#F3F4F6'         // 浅色背景
}
```

### 字体规范

```javascript
fontFamily: {
  sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',
         'Roboto', 'Helvetica', 'Arial', 'sans-serif']
}

// 字体大小
text-xs: 12px   // 辅助文字
text-sm: 14px   // 次要内容
text-base: 16px // 正文
text-lg: 18px   // 小标题
text-xl: 20px   // 标题
text-2xl: 24px  // 大标题
```

### 图标使用

使用 FontAwesome 6.x 图标库：
```html
<i class="fas fa-home"></i>              <!-- 实心图标 -->
<i class="far fa-heart"></i>             <!-- 线性图标 -->
<i class="fab fa-github"></i>            <!-- 品牌图标 -->
```

---

## 常见问题

详见 [docs/troubleshooting.md](docs/troubleshooting.md)

**包含内容：**
- Vue.js 文件加载失败
- CDN 资源加载慢或失败
- 页面样式不生效
- 页面间通信问题
- 移动端适配问题

---

## 进阶功能

详见 [docs/advanced.md](docs/advanced.md)

**包含内容：**
- 页面路由方案（hash 路由）
- 数据持久化（localStorage）
- 暗黑模式支持
- 动画与过渡效果
- 表单验证
- 图片懒加载
- 下拉刷新
- 无限滚动
- 模拟 API 请求

---

## 示例参考

- [PRD 示例](examples/prd-example.md)
- [登录页示例](examples/login-page.html)
- [列表页示例](examples/list-page.html)

---

## 反馈与支持

**相关资源：**
- [Vue 2 官方文档](https://v2.cn.vuejs.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [FontAwesome 图标库](https://fontawesome.com/)
