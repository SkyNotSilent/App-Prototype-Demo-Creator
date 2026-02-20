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

### 作为产品经理，你是否经历过这样的场景？

> "这个想法很简单，你先出个 Demo 让我看看效果，明天能给我吗？"

曾经，当我向开发提出这个要求时，得到的回复往往是：
- "Demo？好的，我先搭个框架……"（然后就没有然后了）
- "这个要配置环境，找组件库，调样式……估计要两天"
- "要不你先用 Axure/Sketch 画个图？"

**但现在，情况完全不同了。**

我只需要打开 AI，说一句"帮我做一个冥想 App 原型"，然后起身去倒杯咖啡。等我回来，**一个完整的、可交互的 App 原型已经跑在浏览器里了。**

这不是魔法，这是 **App Prototype Demo Creator** ——产品经理的"降维打击"神器。

### 核心能力

| 能力 | 说明 |
|------|------|
| 📝 **自动生成 PRD** | 我只说"我要个喝水 App"，AI 自动补全用户画像、功能模块、页面流程 |
| 🏗️ **自动搭建项目** | 文件夹、HTML、JS 目录全部建好 |
| 📱 **手机外壳预览** | 生成一个主页，放满 iPhone 样式的 iframe，像看真机一样预览所有页面 |
| 💻 **自动写代码** | Vue 2 + Tailwind CSS + FontAwesome，无需构建，直接运行 |

**以前**：提需求 → 等开发搭建环境 → 等开发写代码 → 等开发调样式 → **2天过去了**

**现在**：告诉 AI "帮我做一个冥想 App 原型" → **3分钟搞定**

---

## 🎯 为什么你需要它？

### 产品经理的困境：想法很美好，落地太漫长

作为产品经理，我们经常陷入一个怪圈：

1. 💡 我有一个想法，想快速验证一下
2. 🤔 找开发要 Demo，被告知"要搭框架，找组件库，至少两天"
3. 😓 被迫用 Axure/Sketch 画静态原型，但"这里不能点，那里不能动"
4. 🤦‍♂️ 开发看了说："这个效果实现不了，那个样式太复杂"
5. 😤 反复沟通、修改、扯皮……**最后，"简单的想法"变成了"两周的拉锯战"**

**问题的本质：我们用"生产级的流程"去验证"原型级的想法"，这本身就是一种浪费。**

### 解决方案：产品经理也能"自己动手，丰衣足食"

我不需要完美的工程，我需要的是：
- ✅ **能跑** - 点击按钮有反馈，输入表单有响应
- ✅ **能看** - UI 足够真实，像真正的 App
- ✅ **能改** - 想改哪里改哪里，不用等开发排期

**这个 Skill 让产品经理拥有了"快速原型能力"。**

---

## ✨ 核心特性

### 🛠️ 零技术门槛

| 特性 | 说明 |
|------|------|
| **无需开发介入** | 直接告诉 AI 需求，3分钟出原型 |
| **真实可交互** | 点击、滑动、表单提交，全部可用 |
| **iPhone 模拟器** | 手机外壳预览，所见即所得 |
| **一键修改** | 想改哪里说一声，立即生效 |
| **即开即用** | HTML 文件，双击就能跑 |

### 📱 真实设备模拟

- **iPhone 模拟器框架** - 所见即所得
- **一屏预览所有页面** - 多个页面同时可见
- **移动端优先** - 375x667px (iPhone SE)

### 🎨 设计规范

- 渐变背景、圆角卡片
- 响应式布局
- 统一配色方案（primary/secondary/dark）
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

**AI 时代，产品经理的"核心竞争力"不仅仅是提需求，更是"快速验证想法"。**

以前，我们验证一个想法的流程是：
- 写 PRD → 等开发评审 → 等排期 → 等开发 → 看效果 → 不满意 → 再改 → **2周过去了**

现在，这个流程变成了：
- 告诉 AI → 3分钟看效果 → 不满意 → 说一声 → 立即改 → **1小时搞定**

**关键改变：从"等别人实现"到"自己快速验证"。**

通过这个 Skill，我把**"快速原型方法论"**封装成了 AI 的**"本能"**：
- ✅ 不再依赖开发排期
- ✅ 不再用静态原型凑合
- ✅ 不再反复沟通扯皮

**想法立即落地，验证立即开始。**

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

**产品经理的终极武器：让想法不再停留在 PPT 里。**

如果你也厌倦了：
- 提需求 → 等开发 → 不满意 → 再等的循环
- 用 Axure/Sketch 画静态原型的无力感
- 反复沟通、扯皮、修改的疲惫

不妨试试给你的 AI 装上这个 Skill。

你会发现，当你拥有了"快速原型能力"，**产品经理不再是"需求传递者"，而是"产品创造者"**。

毕竟，**谁不想在开会时，直接用真实的 Demo 说服所有人呢？** 😎

---

## 📮 联系方式

- **GitHub Issues**: [提交问题](https://github.com/SkyNotSilent/App-Prototype-Demo-Creator/issues)
- **GitHub Discussions**: [参与讨论](https://github.com/SkyNotSilent/App-Prototype-Demo-Creator/discussions)

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐ Star！**

Made with ❤️ by [SkyNotSilent](https://github.com/SkyNotSilent)

</div>
