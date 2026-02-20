# 安装指南

## 方法 1：作为 Claude Skill 安装（推荐）

### 步骤 1：克隆到 Claude Skills 目录

```bash
# 进入 Claude Skills 目录
cd ~/.claude/skills/  # Linux/Mac
# 或
cd %USERPROFILE%\.claude\skills\  # Windows

# 克隆仓库
git clone https://github.com/SkyNotSilent/App-Prototype-Demo-Creator.git app-prototype-demo-creator
```

### 步骤 2：验证安装

重启 Claude Code 或重新加载配置，Skill 会自动加载。

### 步骤 3：使用 Skill

直接告诉 Claude：
```
使用 app-prototype-demo-creator skill 创建一个待办事项应用原型
```

---

## 方法 2：作为独立工具使用

如果您只想使用这个工具，而不安装为 Skill：

### 步骤 1：克隆仓库

```bash
git clone https://github.com/SkyNotSilent/App-Prototype-Demo-Creator.git
cd App-Prototype-Demo-Creator
```

### 步骤 2：阅读文档

查看 `SKILL.md` 了解如何使用这个工具创建原型。

---

## 项目结构说明

```
app-prototype-demo-creator/
├── SKILL.md                    # 🎯 主技能文档（必需）
├── README.md                   # 项目说明
├── LICENSE.txt                 # 许可证（可选）
│
├── examples/                   # 示例文件
│   ├── prd-example.md
│   ├── login-page.html
│   └── list-page.html
│
├── snippets/                   # 代码片段
│   ├── navbar.html
│   ├── card.html
│   └── form.html
│
├── assets/                     # 资源文件
│   ├── templates/
│   │   ├── index.html         # 概览页面模板
│   │   └── page.html          # 页面模板
│   ├── js/
│   │   └── vue.js             # Vue 2.6.14
│   └── images/
│
└── docs/                       # 文档
    ├── troubleshooting.md
    └── advanced.md
```

---

## Skills 标准说明

### 文件命名规范

✅ **正确**：
- `SKILL.md` - 主文档（必须是这个名字）
- `LICENSE.txt` - 许可证文件
- `references/` - 参考文档目录
- `scripts/` - 脚本目录

❌ **错误**：
- `SKILL-CN.md` - 不应有语言后缀
- `skill.md` - 必须大写
- `README.md` - 这不是 Skill 文档

### SKILL.md 格式规范

```markdown
---
name: skill-name-in-kebab-case
description: 简短描述（1-2句话）
license: Complete terms in LICENSE.txt（可选）
---

# Skill 标题

技能内容...
```

### 必需元素

1. **YAML Front Matter**（前三个横线包裹的部分）
   - `name`: 小写字母、连字符
   - `description`: 简短明了的描述

2. **SKILL.md 文件**
   - 必须大写
   - 位于 Skill 根目录

3. **清晰的结构**
   - 概述
   - 快速开始
   - 详细说明
   - 示例

---

## 更新 Skill

```bash
cd ~/.claude/skills/app-prototype-demo-creator
git pull origin main
```

---

## 卸载 Skill

```bash
rm -rf ~/.claude/skills/app-prototype-demo-creator
```

---

## 相关链接

- **GitHub 仓库**: https://github.com/SkyNotSilent/App-Prototype-Demo-Creator
- **问题反馈**: https://github.com/SkyNotSilent/App-Prototype-Demo-Creator/issues
- **Claude Code 文档**: https://docs.anthropic.com/claude-code

---

**Made with ❤️ for Rapid Prototyping**
