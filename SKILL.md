---
name: app-prototype-demo-creator
description: 快速创建移动端 Web 原型和 MVP 应用，使用 HTML、Vue 2、Tailwind CSS，无需构建步骤。包含 PRD 文档、概览页面和独立页面模板。
---

# App Prototype Demo Creator

> 🚀 快速移动应用原型创建工具

## 概述

此技能用于创建轻量级、无构建的 Web 原型。它生成一个项目结构,包含产品需求文档(PRD)、一个中央概览页面(模拟移动设备框架)以及每个屏幕的独立 HTML 页面。

**适用场景:**
- 快速产品原型验证
- MVP (最小可行产品) 演示
- 移动端优先的 Web 应用
- 概念验证 (PoC)
- 用户界面流程演示

**不适用场景:**
- 生产环境应用
- 需要后端 API 的复杂应用
- 需要构建工具的大型项目
- 需要 TypeScript 的项目

---

## 技术栈版本

- **Vue.js**: 2.6.14 (本地文件)
- **Tailwind CSS**: 3.x (CDN)
- **FontAwesome**: 6.4.0 (CDN)
- **浏览器支持**: Chrome 90+, Safari 14+, Firefox 88+, Edge 90+

### CDN 备选源

如果默认 CDN 加载失败，可使用以下备选源：

```html
<!-- Tailwind CSS 备选 -->
<script src="https://cdn.jsdelivr.net/npm/tailwindcss@3"></script>
<script src="https://unpkg.com/tailwindcss@3"></script>

<!-- FontAwesome 备选 -->
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
```

---

## 快速开始示例

**用户输入:** "帮我创建一个待办事项应用原型"

**执行步骤:**
1. 分析需求，生成 PRD.md
2. 创建项目结构
3. 创建概览页面 (index.html)
4. 创建页面: 首页、添加任务、任务详情
5. 实现交互逻辑
6. 验证完成

**预期输出:**
```
todo-app/
├── PRD.md
└── app/
    ├── index.html
    ├── assets/
    │   ├── js/
    │   │   └── vue.js
    │   └── images/
    └── pages/
        ├── home.html
        ├── add-task.html
        └── task-detail.html
```

---

## 工作流程

### ⚠️ 重要提示 - 执行顺序

**在开始创建项目之前，必须严格遵守以下顺序：**

```
1. 分析需求 → 编写 PRD.md
2. 创建项目结构
3. ⚠️ 创建概览页面 (app/index.html) ← 必须优先完成！
4. 复制 vue.js 文件
5. 创建具体页面 (app/pages/*.html)
6. 验证和测试
```

**为什么概览页面必须优先？**
- 概览页面是项目的"总览图"和"入口"
- 可以实时预览所有页面
- 确保项目结构从一开始就是正确的
- 避免遗漏任何页面

### 1. 分析与 PRD 生成

首先,分析用户的请求并在项目根目录生成 `PRD.md` 文件。

**PRD 应包括:**
- **项目名称与标语**: 简洁的产品定位
- **用户画像**: 目标用户特征
- **功能模块**: 核心功能划分
- **页面流程与交互**: 用户操作路径
- **核心功能**: 优先级排序的功能列表

**参考示例:** 见 [examples/prd-example.md](examples/prd-example.md)

**⚠️ 重要规则 - PRD 同步更新：**
- **每当用户提出功能更新或修改时，必须同步更新 PRD.md 文档**
- 新增功能模块：需要在"功能模块"章节添加说明
- 修改页面流程：需要更新"页面流程与交互"章节
- 增加数据模型：需要在"数据结构"章节补充
- 优化技术方案：需要更新相关技术说明
- **PRD 是产品的唯一真实来源，必须保持最新状态**

**⚠️ 重大需求变更处理流程：**

当用户提出的需求与原有 PRD 有**重大差异**时（如产品定位转变、核心功能重构、技术栈变更等），必须遵循以下流程：

**1. 识别重大变更的信号：**
- 产品定位完全改变（如从"实用工具"转向"游戏化娱乐"）
- 核心功能模块被替换或重构
- 用户群体发生根本性变化
- 技术架构需要重大调整

**2. 立即暂停执行，向用户确认：**

使用以下格式询问用户：

```
🚨 **检测到重大需求变更**

您的需求与原有产品定位有较大差异，这将导致：
- 需要重构核心功能模块
- 需要大幅修改 PRD 文档
- 可能需要调整已有页面

**请选择处理方案：**

**方案 A：创建全新项目（推荐）**
- 创建新文件夹（如 `project-name-v2.0` 或 `project-name-new`）
- 从零开始设计和实现
- 保留原版本作为参考
- 优点：文档清晰，历史完整
- 缺点：需要重新实现已有功能

**方案 B：在当前项目基础上修改**
- 直接修改当前项目
- 更新 PRD.md 文档
- 修改或重构已有页面
- 优点：复用已有工作
- 缺点：可能导致文档混乱

**请告诉我您的选择（A 或 B）？**
```

**3. 根据用户选择执行：**

**如果选择方案 A（创建新项目）：**
1. 创建新项目文件夹
2. 复制必要的资源文件（如 vue.js）
3. 编写全新的 PRD.md
4. 从零开始实现新功能
5. 在新项目的 PRD.md 中注明：`基于 [原项目名] 演进而来，但定位完全不同`

**如果选择方案 B（修改现有项目）：**
1. 保留并更新 PRD.md（不要创建多个"升级说明"文档）
2. 在项目根目录创建 `CHANGELOG.md` 记录变更历史
3. 或者创建 `app/pages/update-history.html` 页面展示版本历史
4. **避免创建**：功能升级说明.md、游戏化升级说明.md 等零散文档
5. **文档组织原则**：
   - PRD.md：始终反映当前版本的完整需求
   - CHANGELOG.md：记录所有版本的变更历史
   - 保持文档简洁，避免冗余

**4. 后续维护：**
- 如果是新项目：清晰维护该项目的独立 PRD
- 如果是修改现有项目：每次更新都要同步 PRD 和 CHANGELOG

### 2. 项目设置与概览页面（⚠️ 必须第一步完成）

**重要：在创建任何具体页面之前，必须先完成以下步骤！**

创建以下目录结构:

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

**为什么要先创建概览页面？**
- 概览页面是项目的"总览图"
- 可以实时预览所有页面
- 确保项目结构正确
- 方便后续开发和调试

### 3. 创建概览页面 (app/index.html)

**⚠️ 这是项目的核心入口页面，必须最先创建！**

使用 `assets/templates/index.html` 模板。

**模板变量:**
- `{{PROJECT_NAME}}`: 项目名称
- `{{PROJECT_DESCRIPTION}}`: 项目描述
- `{{PAGES_GRID}}`: 页面网格内容

**生成页面网格:**

对于 PRD 中定义的每个页面,创建一个网格项:

```html
<div class="flex flex-col items-center">
  <h2 class="text-xl font-bold mb-4 text-blue-400">页面标题</h2>
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

### 4. 创建独立页面 (app/pages/*.html)

为 PRD 中定义的每个屏幕在 `app/pages/` 中创建 HTML 文件。
使用 `assets/templates/page.html` 模板。

**技术指南:**
- **Vue 2**: 使用本地脚本 `<script src="../assets/js/vue.js"></script>`
- **Tailwind**: 使用 CDN `<script src="https://cdn.tailwindcss.com"></script>`
- **FontAwesome**: 使用 CDN 链接
- **移动优先**: 设计尺寸 375x667 (iPhone SE)
- **无构建**: 不使用 `.vue` 文件或 `import` 语句

**每个页面的实现步骤:**
1. 设置 `{{PAGE_TITLE}}`
2. 在 `#app` 内实现 UI 结构
3. 在 `new Vue({...})` 中实现 Vue 逻辑
4. 使用 `data` 管理状态, `methods` 处理交互
5. 使用 `v-cloak` 防止 FOUC (Flash of Unstyled Content)

**页面示例:**
- [登录页示例](examples/login-page.html)
- [列表页示例](examples/list-page.html)

### 5. 组件代码片段

为了快速开发，提供以下可复用组件代码片段：

- [导航栏组件](snippets/navbar.html)
- [卡片组件](snippets/card.html)
- [表单组件](snippets/form.html)

### 6. 最终验证

完成后执行自检清单：

**⚠️ 核心验证（必须完成）：**
- [ ] PRD 包含所有功能模块
- [ ] **概览页面 (app/index.html) 已创建且可访问** ← 最重要！
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

## 进阶功能

详见 [docs/advanced.md](docs/advanced.md)

**包含内容:**
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

## 故障排查

详见 [docs/troubleshooting.md](docs/troubleshooting.md)

**常见问题:**
- Vue.js 文件加载失败
- CDN 资源加载慢或失败
- 页面样式不生效
- 页面间通信问题
- 移动端适配问题
- 浏览器兼容性问题

---

## 设计规范

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

### 间距规范

```css
/* 推荐使用 Tailwind 默认间距 */
p-4: 16px   // 常用内边距
p-6: 24px   // 大内边距
mb-4: 16px  // 常用下边距
space-y-4   // 垂直间距
gap-4       // 网格间距
```

### 图标使用

使用 FontAwesome 6.x 图标库:
```html
<i class="fas fa-home"></i>              <!-- 实心图标 -->
<i class="far fa-heart"></i>             <!-- 线性图标 -->
<i class="fab fa-github"></i>            <!-- 品牌图标 -->
```

---

## 性能优化建议

1. **图片优化**
   - 使用 WebP 格式
   - 图片压缩 (TinyPNG)
   - 使用 placeholder 图片

2. **CDN 资源预加载**
   ```html
   <link rel="preconnect" href="https://cdn.tailwindcss.com">
   <link rel="preconnect" href="https://cdnjs.cloudflare.com">
   ```

3. **首屏渲染优化**
   - 内联关键 CSS
   - 延迟加载非关键资源
   - 使用 `v-cloak` 防止闪烁

4. **Vue 优化**
   - 避免在模板中使用复杂表达式
   - 合理使用 `v-if` 和 `v-show`
   - 列表使用 `:key` 属性

---

## 开发工具推荐

### VSCode 插件
- **Live Server**: 本地开发服务器
- **Tailwind CSS IntelliSense**: Tailwind 类名提示
- **Auto Rename Tag**: 自动重命名标签
- **HTML CSS Support**: CSS 类名提示

### 浏览器工具
- Chrome DevTools 移动端调试模式
- Responsive Design Mode
- Vue DevTools (可选)

### 本地服务器

如果需要本地服务器运行原型:

**Python 方案:**
```bash
cd app
python -m http.server 8000
# 访问 http://localhost:8000
```

**Node.js 方案:**
```bash
npx serve app
# 或
npx live-server app
```

---

## 何时使用此 Skill

**触发关键词:**
- "创建原型"
- "做一个 demo"
- "快速验证想法"
- "MVP 应用"
- "移动端演示"
- "产品原型"

**典型对话示例:**

✅ **适用:**
- "帮我创建一个电商应用的原型"
- "做一个类似微信的聊天界面 demo"
- "快速验证一个社交产品的想法"
- "创建一个移动端待办事项应用"

❌ **不适用:**
- "开发一个完整的电商平台" (需要后端)
- "创建一个企业级应用" (需要构建工具)
- "用 React/Vue 3 开发应用" (技术栈不同)

---

## 输出质量标准

确保生成的原型满足以下标准:

1. **功能完整性**
   - PRD 中所有功能都有对应页面
   - 核心交互可正常使用
   - 页面流程逻辑清晰

2. **代码质量**
   - HTML 语义化
   - Vue 代码结构清晰
   - 适当的注释
   - 遵循代码规范

3. **视觉效果**
   - 布局整齐美观
   - 颜色搭配协调
   - 字体大小合适
   - 移动端适配良好

4. **用户体验**
   - 操作流程顺畅
   - 反馈及时
   - 错误处理友好
   - 加载状态清晰

---

## 更新日志

**v2.0** (2026-02-19)
- 添加完整的示例文件
- 增加组件代码片段库
- 完善故障排查文档
- 新增进阶功能指引
- 优化设计规范说明
- 添加性能优化建议
- 增加强制验证清单

**v1.0** (初始版本)
- 基础原型生成功能
- PRD 文档生成
- 页面模板支持

---

## 反馈与支持

如有问题或建议，请在项目中提出 Issue。

**相关资源:**
- [Vue 2 官方文档](https://v2.cn.vuejs.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [FontAwesome 图标库](https://fontawesome.com/)
