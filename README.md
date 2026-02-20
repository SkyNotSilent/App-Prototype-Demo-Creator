# App Prototype Demo Creator

<div align="center">

🚀 **快速创建移动端 Web 原型的神器**

让创意快速落地，无需构建步骤，几分钟生成可交互的移动应用原型

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.txt)
[![Vue](https://img.shields.io/badge/Vue-2.6.14-brightgreen.svg)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC.svg)](https://tailwindcss.com/)

[快速开始](#快速开始) • [功能特性](#功能特性) • [示例项目](#示例项目) • [完整文档](#完整文档)

</div>

---

## 📖 它能帮你做什么？

### 使用场景

✅ **快速原型验证** - 有了想法，10分钟内做出可点击的原型
✅ **MVP 演示** - 向客户或投资人展示产品概念
✅ **移动端优先** - 专门为移动应用设计的模板和组件
✅ **无技术门槛** - 只需会写 HTML 和基础 JavaScript

### 核心价值

- ⚡ **零构建步骤** - 不需要 webpack、vite、npm，直接打开 HTML 即可
- 🎨 **开箱即用** - 提供完整的模板、组件、示例代码
- 📱 **真实设备模拟** - iPhone 模拟器框架，所见即所得
- 🎯 **最佳实践** - 内置 Vue 2 + Tailwind CSS + FontAwesome 标准配置

---

## ✨ 功能特性

### 🛠️ 完整的工具链

| 功能 | 描述 |
|------|------|
| **PRD 模板** | 标准化的产品需求文档模板 |
| **概览页面** | iPhone 设备模拟器，一屏预览所有页面 |
| **页面模板** | 移动端优化的 HTML 页面模板 |
| **组件库** | 导航栏、卡片、表单等 20+ 组件 |
| **示例代码** | 登录页、列表页、详情页完整示例 |

### 📦 技术栈

- **Vue.js 2.6.14** - 本地文件，无需安装
- **Tailwind CSS 3.x** - CDN 引入，即时可用
- **FontAwesome 6.4.0** - 丰富图标库
- **localStorage** - 数据持久化，无需后端

### 🎨 设计规范

- 移动端优先（375x667px - iPhone SE）
- 响应式布局
- 毛玻璃效果、渐变背景
- 流畅动画（60fps）

---

## 🚀 快速开始

### 方法 1：作为 Claude Skill 使用（推荐）

**最简单的方式：让 Claude 帮你创建原型！**

1. **安装 Skill**
   ```bash
   cd ~/.claude/skills/
   git clone https://github.com/SkyNotSilent/App-Prototype-Demo-Creator.git app-prototype-demo-creator
   ```

2. **重启 Claude Code**

3. **开始使用**
   ```
   使用 app-prototype-demo-creator 创建一个待办事项应用原型
   ```

### 方法 2：手动使用模板

1. **克隆仓库**
   ```bash
   git clone https://github.com/SkyNotSilent/App-Prototype-Demo-Creator.git
   cd App-Prototype-Demo-Creator
   ```

2. **阅读文档**
   - 查看 [SKILL.md](SKILL.md) 了解完整工作流程
   - 查看 [examples/](examples/) 目录学习示例

3. **复制模板开始开发**
   ```bash
   # 复制 Vue.js
   cp assets/js/vue.js your-project/app/assets/js/

   # 复制模板
   cp assets/templates/index.html your-project/app/index.html
   cp assets/templates/page.html your-project/app/pages/home.html
   ```

---

## 📚 完整文档

### 核心文档

| 文档 | 描述 |
|------|------|
| **[SKILL.md](SKILL.md)** | 🎯 完整使用指南（必读） |
| **[examples/prd-example.md](examples/prd-example.md)** | PRD 文档示例 |
| **[examples/login-page.html](examples/login-page.html)** | 登录页完整示例 |
| **[examples/list-page.html](examples/list-page.html)** | 列表页完整示例 |

### 组件代码片段

| 组件 | 描述 |
|------|------|
| **[snippets/navbar.html](snippets/navbar.html)** | 7 种导航栏样式 |
| **[snippets/card.html](snippets/card.html)** | 9 种卡片类型 |
| **[snippets/form.html](snippets/form.html)** | 完整表单组件集合 |

### 进阶文档

| 文档 | 描述 |
|------|------|
| **[docs/troubleshooting.md](docs/troubleshooting.md)** | 19 个常见问题解决方案 |
| **[docs/advanced.md](docs/advanced.md)** | 10 大进阶技术详解 |

---

## 🎯 示例项目

### 养生吃饭 3.0 - 游戏化养生应用

**项目亮点**：
- 📱 7 个完整页面，功能完备
- 🎮 游戏化机制（签到、任务、奖励）
- 🎨 毛玻璃设计 + CSS 动画
- 💾 localStorage 数据持久化

**技术栈**：Vue 2 + Tailwind CSS + localStorage

**在线预览**：克隆仓库后打开 `healthy-eating-3.0/app/index.html`

#### 核心页面

| 页面 | 功能 | 特色 |
|------|------|------|
| 🧘 **游戏化首页** | 打坐小人养成 | 五行能量球、每日任务、签到奖励 |
| 📸 **拍照识别** | AI 食物识别 | 相机拍照、营养分析、养生值加成 |
| 📚 **菜谱库** | 菜谱浏览 | 分类筛选、功效标签、收藏功能 |
| 🍽️ **菜谱详情** | 详细信息 | 营养成分、中医功效、制作步骤 |
| 📊 **营养记录** | 数据统计 | 今日摄入、历史记录、进度展示 |
| 👤 **个人中心** | 用户信息 | 等级展示、养生值卡片 |
| 💜 **养生值详情** | 健康指标 | 五行能量、体质分析、时令养生 |

#### 页面预览

> 💡 **提示**：以下为页面预览，实际效果请打开 HTML 文件查看动画和交互

**游戏化首页** - 核心养成页面
- 打坐小人呼吸浮动动画
- 五行能量球动态展示
- 每日签到和任务系统
- 今日宜忌和推荐菜谱

**拍照识别** - AI 智能识别
- 真实相机拍照功能
- 模拟 AI 识别动画
- 营养信息自动提取
- 养生值实时更新

**菜谱库** - 分类浏览
- 多维度筛选（餐次、功效、时令）
- 彩色功效标签
- 收藏和搜索功能
- 多种排序方式

**查看完整项目**：[healthy-eating-3.0](../healthy-eating-3.0/)

---

## 💡 工作流程

### 标准流程（遵循此顺序）

```
1. 📝 分析需求
   ↓
2. 📋 编写 PRD.md
   ↓
3. 🏗️ 创建项目结构
   ↓
4. ⚠️ 创建概览页面 (app/index.html) ← 必须优先！
   ↓
5. 📄 创建具体页面 (app/pages/*.html)
   ↓
6. ✅ 验证测试
```

### 为什么要先创建概览页面？

- 概览页面是项目的"总览图"
- 可以实时预览所有页面
- 确保项目结构正确
- 方便后续开发调试

---

## 🎨 设计理念

### 为什么选择这个技术栈？

| 技术 | 选择原因 |
|------|---------|
| **Vue 2 (本地)** | 无需构建，兼容性好，学习曲线平缓 |
| **Tailwind (CDN)** | 快速样式开发，无需写 CSS 文件 |
| **FontAwesome (CDN)** | 丰富的图标库，提升视觉体验 |
| **localStorage** | 无需后端，数据即可持久化 |

### 为什么不用现代框架？

❌ React/Vue 3 + Vite:
- 需要构建步骤
- 依赖 npm/node_modules
- 配置复杂，不够轻量

✅ **我们的方案**:
- 打开 HTML 即可运行
- 零配置，零依赖
- 专注于原型快速验证

---

## 🔧 目录结构

```
app-prototype-demo-creator/
├── SKILL.md                    # 📖 完整使用指南
├── README.md                   # 📄 本文件
│
├── examples/                   # 📚 示例文件
│   ├── prd-example.md         # PRD 示例
│   ├── login-page.html        # 登录页示例
│   └── list-page.html         # 列表页示例
│
├── snippets/                   # 🧩 组件片段
│   ├── navbar.html            # 导航栏组件
│   ├── card.html              # 卡片组件
│   └── form.html              # 表单组件
│
├── assets/                     # 📦 资源文件
│   ├── templates/
│   │   ├── index.html         # 概览页面模板
│   │   └── page.html          # 页面模板
│   ├── js/
│   │   └── vue.js             # Vue 2.6.14
│   └── images/                # 图片资源
│
└── docs/                       # 📖 进阶文档
    ├── troubleshooting.md     # 故障排查
    └── advanced.md            # 进阶功能
```

---

## 🤝 贡献

欢迎贡献代码、提出问题或建议！

### 贡献方式

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

---

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE.txt](LICENSE.txt) 文件了解详情

---

## 🙏 致谢

- Vue.js 团队 - 优秀的渐进式框架
- Tailwind CSS 团队 - 实用优先的 CSS 框架
- FontAwesome - 丰富的图标库
- 所有贡献者和用户

---

## 📮 联系方式

- **GitHub Issues**: [提交问题](https://github.com/SkyNotSilent/App-Prototype-Demo-Creator/issues)
- **GitHub Discussions**: [参与讨论](https://github.com/SkyNotSilent/App-Prototype-Demo-Creator/discussions)

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐ Star！**

Made with ❤️ by [SkyNotSilent](https://github.com/SkyNotSilent)

</div>
