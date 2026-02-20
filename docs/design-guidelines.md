# 概览页面设计指南

## 设计原则

**简洁优雅**：少即是多，聚焦内容本身。

概览页面是项目的第一印象，应该清晰、专业、美观。避免过度设计，让用户的注意力集中在原型内容上。

---

## 最佳实践

### 推荐方案

#### 1. 背景

**推荐：渐变背景**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**优点：**
- 温暖友好的视觉效果
- 与白色设备形成舒适对比
- 专业感强

**备选：深色背景**
```css
background: #111827;
```

**适用于：** 深色主题的应用原型

---

#### 2. 设备尺寸

**推荐：320×640px**
```css
.device-mockup {
  width: 320px;
  height: 640px;
  border-radius: 40px;
  padding: 12px;
}
```

**优点：**
- 2:1 的黄金比例，视觉协调
- 更窄更精致，不占用过多空间
- 配合 `scale-90` 缩小后尺寸完美

**不推荐：375×812px**
- 尺寸过大，显得笨重
- 长宽比不协调，在缩放后显得细长
- 在网格布局下占用过多空间

---

#### 3. 刘海设计

**推荐：底部圆角刘海**
```css
.device-notch {
  background: #1a1a1a;
  border-radius: 0 0 15px 15px;  /* 只有底部圆角 */
  width: 120px;
  height: 25px;
  top: 0;
}
```

**优点：**
- 更接近真实 iPhone 刘海的设计
- 与设备边框自然融合
- 视觉上更真实

**不推荐：双角圆角刘海**
```css
/* 不推荐 */
.device-notch {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 30px;
}
```

**问题：**
- 看起来像一个悬挂的方块
- 不够自然
- 高度过高，显得突兀

---

#### 4. 屏幕背景

**推荐：白色背景**
```css
.device-screen {
  background: white;
  border-radius: 30px;
}
```

**优点：**
- 与渐变背景形成舒适对比
- 页面内容更清晰可读
- 不像纯黑那样刺眼

**不推荐：纯黑背景**
```css
/* 不推荐 */
.device-screen {
  background: #000;
}
```

**问题：**
- 在深色背景下对比度太强
- 显得生硬压抑
- 页面内容不够清晰

---

### 可选增强

#### 项目信息卡片

**推荐在页面底部添加项目信息卡片**

```html
<div class="project-info-card">
  <h3>📋 项目说明</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h4 class="font-semibold mb-3">🎯 核心功能</h4>
      <ul>
        <li>• AI 拍照识别食物</li>
        <li>• 智能营养分析</li>
        <li>• 今日菜谱推荐</li>
      </ul>
    </div>
    <div>
      <h4 class="font-semibold mb-3">👥 目标用户</h4>
      <ul>
        <li>• 上班族：快速找到健康菜谱</li>
        <li>• 健身爱好者：精确营养管理</li>
        <li>• 养生族：科学饮食指导</li>
      </ul>
    </div>
  </div>
</div>
```

**卡片样式：**
```css
.project-info-card {
  margin-top: 60px;
  max-width: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 32px;
}
```

**优点：**
- 补充项目上下文信息
- 让原型展示更专业
- 玻璃态效果增加高级感

---

## 常见错误

### ❌ 错误 1：每个设备都加卡片包装

```html
<!-- 不推荐 -->
<div class="page-card">
  <div class="page-title">页面名称</div>
  <div class="device-mockup">...</div>
</div>
```

**问题：**
- 增加视觉复杂度，画蛇添足
- 分散用户注意力
- 在网格布局下显得杂乱

**正确做法：**
```html
<!-- 推荐 -->
<div class="flex flex-col items-center">
  <h2 class="text-xl font-bold mb-4 text-blue-300">页面名称</h2>
  <div class="device-mockup">...</div>
</div>
```

---

### ❌ 错误 2：深色背景 + 黑屏

```css
/* 不推荐 */
body {
  background: #111827;
}
.device-screen {
  background: #000;
}
```

**问题：**
- 对比度太强，显得压抑
- 页面内容不清晰
- 整体感觉沉重

**正确做法：**
```css
/* 推荐 */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.device-screen {
  background: white;
}
```

---

### ❌ 错误 3：过大的设备尺寸

```css
/* 不推荐 */
.device-mockup {
  width: 375px;
  height: 812px;  /* iPhone X 尺寸 */
}
```

**问题：**
- 在缩放后显得又高又窄
- 占用过多空间
- 视觉不协调

**正确做法：**
```css
/* 推荐 */
.device-mockup {
  width: 320px;
  height: 640px;
}
```

---

### ❌ 错误 4：复杂的 hover 效果

```css
/* 不推荐 */
.device-mockup:hover {
  transform: scale(1.1);  /* 放大 10% */
}
```

**问题：**
- 在网格布局下会导致页面抖动
- 与 `scale-90` 初始缩放叠加，效果不稳定
- 分散用户注意力

**正确做法：**
```css
/* 推荐 */
.device-mockup:hover {
  transform: scale(1.05);  /* 轻微放大 5% */
}
```

---

### ❌ 错误 5：过多的装饰元素

```html
<!-- 不推荐 -->
<div class="page-card">
  <div class="page-icon">📸</div>
  <div class="page-title">拍照识别</div>
  <div class="page-description">AI识别食物、营养分析</div>
  <div class="device-mockup">...</div>
</div>
```

**问题：**
- 过度装饰，分散注意力
- 信息层级过多
- 失去简洁美感

**正确做法：**
```html
<!-- 推荐 -->
<div class="flex flex-col items-center">
  <h2 class="text-xl font-bold mb-4 text-blue-300">📸 拍照识别</h2>
  <div class="device-mockup">...</div>
</div>
```

---

## 参考案例

### 最佳实践

**[healthy-eating-2.0](../../healthy-eating-2.0/app/index.html)**

**优点：**
- ✅ 渐变背景，温暖友好
- ✅ 320×640 设备尺寸，比例协调
- ✅ 底部圆角刘海，真实自然
- ✅ 白色屏幕背景，清晰可读
- ✅ 底部项目信息卡片，专业完整

**效果预览：**
- 整体感觉：温暖、专业、清晰
- 视觉层级：背景 → 设备 → 内容，层次分明
- 用户注意力：聚焦在原型内容上

---

## 设计清单

在创建概览页面时，使用此清单确保设计质量：

### ✅ 必须项

- [ ] 使用渐变背景 `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- [ ] 设备尺寸为 320×640px
- [ ] 刘海使用底部圆角设计
- [ ] 屏幕背景为白色
- [ ] 页面标题使用 `text-blue-300`

### ✅ 推荐项

- [ ] 底部添加项目信息卡片
- [ ] hover 效果为 `scale(1.05)`（轻微）
- [ ] 所有设备使用统一的样式
- [ ] 页面布局使用 `flex-wrap` 和 `gap-8`

### ❌ 避免项

- [ ] 不要每个设备都加卡片包装
- [ ] 不要使用深色背景 + 黑屏
- [ ] 不要使用过大的设备尺寸（375×812）
- [ ] 不要使用复杂的 hover 效果
- [ ] 不要添加过多的装饰元素

---

## 总结

**核心原则：简洁优雅，聚焦内容**

好的概览页面应该：
1. **视觉舒适** - 使用渐变背景和白色设备
2. **比例协调** - 使用 320×640 的黄金比例
3. **细节真实** - 使用底部圆角刘海
4. **信息完整** - 底部添加项目信息卡片
5. **避免过度设计** - 不添加不必要的装饰

记住：**Less is More - 简洁的设计往往是最有效的。**
