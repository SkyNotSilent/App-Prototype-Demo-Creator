# App Prototype Demo Creator

> 🚀 快速移动应用原型创建工具 - 让创意快速落地

---

## 📌 项目简介

**App Prototype Demo Creator** 是一个快速创建移动端 Web 原型的工具集。使用 HTML、Vue 2、Tailwind CSS 和 FontAwesome，无需构建步骤，即可快速搭建可交互的移动应用原型。

**GitHub 仓库**: [https://github.com/SkyNotSilent/App-Prototype-Demo-Creator](https://github.com/SkyNotSilent/App-Prototype-Demo-Creator)

### ✨ 2.0 版本新增内容

#### 1. 完整的示例库
- **PRD 示例**: 详细的待办事项应用 PRD ([examples/prd-example.md](examples/prd-example.md))
- **登录页示例**: 功能完整的登录界面 ([examples/login-page.html](examples/login-page.html))
- **列表页示例**: 任务列表页面实现 ([examples/list-page.html](examples/list-page.html))

#### 2. 组件代码片段库
- **导航栏组件**: 7 种导航栏样式 ([snippets/navbar.html](snippets/navbar.html))
- **卡片组件**: 9 种卡片类型 ([snippets/card.html](snippets/card.html))
- **表单组件**: 完整的表单元素集合 ([snippets/form.html](snippets/form.html))

#### 3. 完善的文档体系
- **故障排查指南**: 19 个常见问题解决方案 ([docs/troubleshooting.md](docs/troubleshooting.md))
- **进阶功能文档**: 10 大进阶技术详解 ([docs/advanced.md](docs/advanced.md))

#### 4. 优化的主文档
- 快速开始示例
- 技术栈版本说明
- CDN 备选源
- 设计规范
- 性能优化建议
- 开发工具推荐
- 完整的验证清单

---

## 📂 目录结构

```
App-Prototype-Demo-Creator/
├── SKILL-CN.md                    # 主技能文档（中文版）
├── README.md                      # 本说明文件
│
├── examples/                      # 示例文件
│   ├── prd-example.md            # PRD 文档示例
│   ├── login-page.html           # 登录页示例
│   └── list-page.html            # 列表页示例
│
├── snippets/                      # 代码片段
│   ├── navbar.html               # 导航栏组件
│   ├── card.html                 # 卡片组件
│   └── form.html                 # 表单组件
│
├── docs/                          # 文档
│   ├── troubleshooting.md        # 故障排查
│   └── advanced.md               # 进阶功能
│
└── assets/                        # 资源文件
    ├── js/
    │   └── vue.js                # Vue 2 本地文件
    ├── templates/
    │   ├── index.html            # 概览页模板
    │   └── page.html             # 页面模板
    └── images/                   # 图片资源
```

---

## 🚀 快速开始

### 使用此 Skill

1. **触发关键词**:
   - "创建原型"
   - "做一个 demo"
   - "MVP 应用"
   - "移动端演示"

2. **示例对话**:
```
用户: 帮我创建一个待办事项应用原型

AI 将执行:
1. 分析需求，生成 PRD
2. 创建项目结构
3. 生成页面文件
4. 实现交互逻辑
```

### 手动使用资源

#### 复制代码片段
```bash
# 导航栏组件
cp snippets/navbar.html your-project/

# 卡片组件
cp snippets/card.html your-project/

# 表单组件
cp snippets/form.html your-project/
```

#### 参考示例
```bash
# 查看 PRD 示例
cat examples/prd-example.md

# 查看登录页示例
open examples/login-page.html

# 查看列表页示例
open examples/list-page.html
```

---

## 💡 核心特性

### 1. 零构建开发
- 无需 npm、webpack 等构建工具
- 直接在浏览器中运行
- 快速迭代和测试

### 2. 技术栈
- **Vue.js 2.x**: 本地文件，无需下载
- **Tailwind CSS**: CDN 引入
- **FontAwesome**: 图标库

### 3. 移动优先
- 响应式设计
- 移动端适配
- 触摸交互支持

### 4. 数据持久化
- localStorage 存储
- 简单状态管理
- 离线可用

---

## 📖 文档导航

### 新手入门
1. 阅读 [SKILL-CN.md](SKILL-CN.md) 了解基本工作流程
2. 查看 [examples/prd-example.md](examples/prd-example.md) 了解 PRD 格式
3. 参考 [examples/login-page.html](examples/login-page.html) 学习页面实现

### 开发参考
1. 从 [snippets/](snippets/) 复制需要的组件代码
2. 参考 [docs/advanced.md](docs/advanced.md) 实现复杂功能
3. 遇到问题查看 [docs/troubleshooting.md](docs/troubleshooting.md)

### 最佳实践
1. PRD 先行：先完善需求文档
2. 模块化：复用组件代码片段
3. 渐进增强：从简单功能开始
4. 持续验证：使用验证清单检查

---

## 🎯 适用场景

### ✅ 适合
- 快速原型验证
- MVP 产品演示
- 概念验证 (PoC)
- 移动端界面演示
- 简单的 Web 应用

### ❌ 不适合
- 生产环境应用
- 需要后端 API 的复杂应用
- 需要构建工具的大型项目
- 需要 TypeScript 的项目

---

## 🔧 开发工具

### 推荐编辑器
- **VSCode**: 配合插件使用效果最佳
  - Live Server: 本地服务器
  - Tailwind CSS IntelliSense: 类名提示
  - Auto Rename Tag: 标签自动重命名

### 本地服务器
```bash
# Python
python -m http.server 8000

# Node.js
npx serve app
# 或
npx live-server app
```

### 浏览器工具
- Chrome DevTools
- Vue DevTools (可选)
- Responsive Design Mode

---

## 📝 更新日志

### v2.0 (2026-02-19)
**新增:**
- ✨ 完整的示例文件库
- ✨ 可复用的组件代码片段
- ✨ 详细的故障排查文档
- ✨ 进阶功能实现指南
- ✨ 设计规范说明
- ✨ 性能优化建议

**优化:**
- 📝 重写 SKILL-CN.md 主文档
- 📝 添加快速开始示例
- 📝 完善工作流程说明
- 📝 增强验证清单

**改进:**
- 🎨 更清晰的文档结构
- 🎨 更详细的代码注释
- 🎨 更丰富的示例代码

### v1.0 (初始版本)
- 基础原型生成功能
- PRD 文档生成
- 页面模板支持

---

## 🤝 贡献

欢迎提出建议和改进！

---

## 📄 许可

MIT License

---

## 📞 获取帮助

- 查看主文档: [SKILL-CN.md](SKILL-CN.md)
- 故障排查: [docs/troubleshooting.md](docs/troubleshooting.md)
- 进阶功能: [docs/advanced.md](docs/advanced.md)
- 示例代码: [examples/](examples/)
- 代码片段: [snippets/](snippets/)

---

**Made with ❤️ for rapid prototyping**
