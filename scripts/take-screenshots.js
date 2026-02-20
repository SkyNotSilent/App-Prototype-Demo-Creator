/**
 * 自动截图脚本
 * 使用 Puppeteer 自动截取所有页面
 *
 * 使用方法：
 * 1. npm install puppeteer
 * 2. node scripts/take-screenshots.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// 配置
const config = {
  baseUrl: 'file:///' + path.resolve(__dirname, '../healthy-eating-3.0/app/pages'),
  outputDir: path.resolve(__dirname, '../healthy-eating-3.0/screenshots'),
  viewport: {
    width: 375,
    height: 812,
    deviceScaleFactor: 2
  },
  pages: [
    { name: 'home', title: '游戏化首页' },
    { name: 'camera', title: '拍照识别' },
    { name: 'recipes', title: '菜谱库' },
    { name: 'recipe-detail', title: '菜谱详情' },
    { name: 'nutrition', title: '营养记录' },
    { name: 'profile', title: '个人中心' },
    { name: 'health-metrics', title: '养生值详情' }
  ]
};

async function takeScreenshots() {
  console.log('📸 开始截图...\n');

  // 创建输出目录
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new'
  });

  for (const page of config.pages) {
    console.log(`📷 正在截取: ${page.title}...`);

    const tab = await browser.newPage();

    // 设置视口
    await tab.setViewport(config.viewport);

    // 打开页面
    const url = `${config.baseUrl}/${page.name}.html`;
    await tab.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 10000
    });

    // 等待页面加载完成
    await tab.waitForTimeout(2000);

    // 截图
    const outputPath = path.join(config.outputDir, `${page.name}.png`);
    await tab.screenshot({
      path: outputPath,
      fullPage: false
    });

    console.log(`✅ 已保存: ${outputPath}\n`);

    await tab.close();
  }

  await browser.close();

  console.log('🎉 截图完成！');
  console.log(`\n截图保存在: ${config.outputDir}`);
}

// 运行
takeScreenshots().catch(error => {
  console.error('❌ 截图失败:', error);
  process.exit(1);
});
