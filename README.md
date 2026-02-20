# App Prototype Demo Creator

<div align="center">

🚀 **从"两天出一个Demo"到"两分钟出一个App"的降维打击**

让创意快速落地，无需构建步骤，拒绝复杂依赖，一把梭！

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.txt)
[![Vue](https://img.shields.io/badge/Vue-2.6.14-brightgreen.svg)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC.svg)](https://tailwindcss.com/)

[快速开始](#快速开始) • [实战案例](#实战案例) • [为什么你需要它](#为什么你需要它)

</div>

---

## 💥 它能帮你做什么？

### 你是否经历过这样的场景？

> "这个需求很简单，你先出个 Demo 看看效果，下班前能给我吗？"

曾经，听到这句话我的血压就会飙升。但现在，我只会微微一笑，打开 IDE，敲下一行命令，然后起身去倒杯咖啡。

**等我端着咖啡回来，一个完整的、可交互的 App 原型已经跑在浏览器里了。**

这不是魔法，这是 **App Prototype Demo Creator** ——一个给 AI 装上的"外挂"。

### 核心能力

✅ **自动生成 PRD** - 你只说"我要个喝水 App"，它自动补全用户画像、功能模块、页面流程
✅ **自动搭建项目** - 文件夹、HTML、JS 目录全部建好
✅ **手机外壳预览** - 生成一个主页，放满 iPhone 样式的 iframe，像看真机一样预览所有页面
✅ **自动写代码** - Vue 2 + Tailwind CSS + FontAwesome，无需构建，直接运行

**以前**：`npm create vite` → `npm install` → 配置路由 → 写组件 → 调样式 → **3小时过去了**

**现在**：告诉 AI "帮我做一个冥想 App 原型" → **3分钟搞定**

---

## 🎯 为什么你需要它？

### 痛点：我们用"生产级的工具"解决"原型级的问题"

作为前端，我们经常陷入一个怪圈：

1. 产品经理想要一个"简单的 Demo"来验证想法
2. 我们觉得既然是 Demo，就随便写写吧
3. PM 看了说："这里能不能点？那里能不能动？样式能不能再好看点？"
4. 于是我们被迫引入框架、配置 Webpack/Vite、找组件库、调样式……
5. 最后，**"简单的 Demo"变成了"两天的工作量"**

**解决方案：拒绝构建，拒绝复杂依赖，一把梭！**

我需要的不是一个完美的工程，而是一个**"能跑、能看、能改"的 HTML 文件集合**。

---

## ✨ 核心特性

### 🛠️ 零构建开发

| 特性 | 说明 |
|------|------|
| **无构建步骤** | 不需要 webpack、vite、npm，直接打开 HTML 即可 |
| **Vue 2 (本地)** | 无需编译，直接在 HTML 里写逻辑 |
| **Tailwind CSS (CDN)** | 无需手写 CSS，样式类名一把梭 |
| **FontAwesome (CDN)** | 图标随便用 |
| **localStorage** | 数据持久化，无需后端 |

### 📱 真实设备模拟

- **iPhone 模拟器框架** - 所见即所得
- **一屏预览所有页面** - 7个页面同时可见
- **悬停放大效果** - 细节清晰可见
- **移动端优先** - 375x667px (iPhone SE)

### 🎨 设计规范

- 毛玻璃效果、渐变背景
- 流畅动画（60fps）
- 响应式布局
- 最佳实践内置

---

## 🚀 快速开始

### 方法 1：作为 Claude Skill 使用（推荐）

**最简单的方式：让 Claude 帮你创建原型！**

```bash
# 1. 安装 Skill
cd ~/.claude/skills/
git clone https://github.com/SkyNotSilent/App-Prototype-Demo-Creator.git app-prototype-demo-creator

# 2. 重启 Claude Code

# 3. 开始使用
# 告诉 Claude："使用 app-prototype-demo-creator 创建一个待办事项应用原型"
```

### 方法 2：手动使用模板

```bash
# 克隆仓库
git clone https://github.com/SkyNotSilent/App-Prototype-Demo-Creator.git
cd App-Prototype-Demo-Creator

# 阅读文档
cat SKILL.md

# 复制模板开始开发
cp assets/js/vue.js your-project/app/assets/js/
cp assets/templates/index.html your-project/app/index.html
```

---

## 🎬 实战案例

### 案例 1：养生吃饭 3.0 - 游戏化养生应用

**背景**：PM 提了一个"让养生变成游戏"的想法，我转头就唤醒了这个 Skill。

**3分钟后，浏览器里跑起来了：**

- **游戏化首页** - 打坐小人呼吸浮动动画，五行能量球动态展示
- **拍照识别** - 真实相机拍照，模拟 AI 识别，营养信息自动提取
- **菜谱库** - 多维度筛选，彩色功效标签，收藏和搜索功能
- **营养记录** - 今日摄入统计，历史记录，进度展示
- **个人中心** - 等级展示，养生值卡片
- **养生值详情** - 五行能量，体质分析，时令养生

**关键数据**：
- 📱 **7 个完整页面**，功能完备
- 🎮 **游戏化机制**（签到、任务、奖励）
- 🎨 **毛玻璃设计 + CSS 动画**
- 💾 **localStorage 数据持久化**

![概览页面 - 一屏预览所有 7 个页面](https://github.com/user-attachments/assets/ed3a8086-2454-4044-b375-79fa31647686)

> 💡 **概览页面特色**：使用 iPhone 设备模拟器框架，可以一次性预览所有 7 个页面，鼠标悬停可放大查看

---

## 💡 这种"降维打击"意味着什么？

**AI 时代的"生产力"不仅仅是写代码变快了，更是"交付标准"的改变。**

以前，我们交付的是"代码"；现在，我们可以交付"能力"。

通过 Custom Skill，我把自己的**"方法论"**（比如：原型就该用无构建的 Vue + Tailwind）封装成了 AI 的**"本能"**。

- ❌ 不再需要重复教 AI "不要用 React，太重了"
- ❌ 不再需要说"用 Tailwind，别写 CSS 文件"
- ✅ 这些规则已经变成了它身体的一部分

---

## 📚 完整文档

| 文档 | 描述 |
|------|------|
| **[SKILL.md](SKILL.md)** | 🎯 完整使用指南（必读） |
| **[examples/](examples/)** | PRD、登录页、列表页示例 |
| **[snippets/](snippets/)** | 20+ 可复用组件代码片段 |
| **[docs/troubleshooting.md](docs/troubleshooting.md)** | 19 个常见问题解决方案 |
| **[docs/advanced.md](docs/advanced.md)** | 10 大进阶技术详解 |

---

## 🎨 工作流程

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

**为什么要先创建概览页面？**
- 概览页面是项目的"总览图"
- 可以实时预览所有页面
- 确保项目结构正确
- 方便后续开发调试

---

## 🤝 贡献

欢迎贡献代码、提出问题或建议！

```bash
# 1. Fork 本仓库
# 2. 创建特性分支
git checkout -b feature/AmazingFeature

# 3. 提交更改
git commit -m 'Add some AmazingFeature'

# 4. 推送到分支
git push origin feature/AmazingFeature

# 5. 提交 Pull Request
```

---

## 🎯 结语

**不要被 AI 取代，而是成为那个"定义 AI 行为"的人。**

如果你也厌倦了重复的配置和无休止的"微调"，不妨试试给你的 AI 装上这个 Skill。

你会发现，当你把重复的劳动交给规则，剩下的才是编程真正的乐趣——**创造**。

毕竟，**谁不想在 PM 还在整理需求文档的时候，就已经把 App 甩在他脸上呢？** 😎

---

## 📮 联系方式

- **GitHub Issues**: [提交问题](https://github.com/SkyNotSilent/App-Prototype-Demo-Creator/issues)
- **GitHub Discussions**: [参与讨论](https://github.com/SkyNotSilent/App-Prototype-Demo-Creator/discussions)

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐ Star！**

Made with ❤️ by [SkyNotSilent](https://github.com/SkyNotSilent)

</div>
