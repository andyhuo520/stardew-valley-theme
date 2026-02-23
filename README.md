# 🌾 星露谷物语主题皮肤

<p align="center">
    <img src="https://img.shields.io/badge/星露谷物语-Stardew%20Valley-ff6b6b?style=for-the-badge& alt="Stardew Valley" src="https://img.shields.io/badge/版本-1.0.0-4ecdc4?style=for-the-badge" alt="Version 1.0.0" src="https://img.shields.io/badge/许可证-MIT-blue.svg" alt="MIT License" src="https://img.shields.io/badge/大小-200 MB" src="https://img.shields.io/badge/繁体中文-中文" alt="简体中文" />
</p>

一个 **受《星露谷物语》游戏启发的像素艺术风格 CSS 主题皮肤。

## 功能特点

- **四季主题系统** - 春/夏/秋/冬四种主题配色
- **像素光标系统** - 锄头、斧头、 水壶、 种子袋等游戏工具光标
- **像素字体** - 方舟像素字体，支持中英文混合显示
- **实时季节切换** - 根据当前月份自动切换主题

## 快速开始

### 1. 直接引入

```html
<!-- 主主题文件 -->
<link rel="stylesheet" href="css/stardew-theme.css">

<!-- 或者单独引入季节主题 -->
<link rel="stylesheet" href="css/themes/stardew-spring.css">
<link rel="stylesheet" href="css/themes/stardew-summer.css">
<link rel="stylesheet" href="css/themes/stardew-autumn.css">
<link rel="stylesheet" href="css/themes/stardew-winter.css">

<!-- 可选：自动季节切换 -->
<script src="js/stardew-realtime.js"></script>

### 2. 手动切换主题

```html
<button onclick="setTheme('stardew-spring')">🌸 春季</button>
<button onclick="setTheme('stardew-summer')">☀️ 夏季</button>
<button onclick="setTheme('starew-valley-autumn')">🍂 秋季</button>
<button onclick="setTheme('stardew-winter')">❄️ 冬季</button>

### 3. 韥看演示页面

打开 `demo/index.html` 查看完整效果。

## 文件结构

```
stardew-valley-theme/
├── css/
│   ├── stardew-theme.css      # 主入口文件
│   ├── themes/
│   │   ├── stardew-common.css   # 通用样式（核心) |
│   │   ├── stardew-spring.css   # 春季主题 -->
│   │   ├── stardew-summer.css   # 夏季主题 |
│   │   ├── stardew-autumn.css   # 秋季主题 |
│   │   ├── stardew-winter.css   # 冬季主题 |
│   │   ├── stardew-cursors.css   # 像素光标系统 |
│   │   └── stardew-selector.css # 主题选择器样式
│   └── fonts/
│       ├── ark-pixel.css      # 字体定义
│       ├── ark-pixel-12px-monospaced-latin.otf.woff2
│       ├── ark-pixel-12px-monospaced-zh_cn.otf.woff2
│       ├── ark-pixel-12px-monospaced-zh_tw.otf.woff2
│       └── OFL.txt              # 字体许可证
├── js/
│   └── stardew-realtime.js   # 实时季节切换
├── assets/
│   └── sprites/             # 像素精灵图素材
├── demo/
│   └── index.html           # 演示页面
├── README.md                 # 本文件
└── LICENSE                    # MIT 许可证
```

## 主题预览

| 主题 | 强调色 | 背景色 | 氛围 |
|------|------|--------|------|
| 🌸 春季 | 樱花粉 `#ff9ecd` | 草地绿 `#3a5a3a` | 生机勃勃 |
| ☀️ 夏季 | 阳光金 `#ffd54f` | 海水蓝 `#1e4a6a` | 海滩度假 |
| 🍂 秋季 | 南瓜橙 `#f5a623` | 枫叶棕 `#5c4a3a` | 丰收田园 |
| ❄️ 冬季 | 壁炉橙 `#ff8a65` | 冰霜蓝 `#3a4a62` | 雪夜温馨 |

## 使用方法

### 巻加主题

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="stardew-spring">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的星露谷主题</title>
    <link rel="stylesheet" href="css/stardew-theme.css">
</head>
<body>
    <h1>你好，星露谷！</h1>
    <p>这是一个像素风格的主题。</p>
</body>
</html>
```

### 自动切换季节

```javascript
// 根据当前月份自动切换
window.autoSeason();
```

## 依赖项

### 字体
- **Ark Pixel Font** - [方舟像素字体](https://github.com/TakWolf/ark-pixel-font)
- **VT323** - Google Fonts 揌 **Press Start 2P** - Google Fonts

### 图片素材
- **Kenney Pixel** - [kenney.nl](https://kenney.nl)
- **LPC Farm** - Liberated Pixel Cup

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

## 许可证

- 代码：MIT License
- 字体：SIL Open Font License 1.1 (见 fonts/OFL.txt)

## 致谢

- **Stardew Valley** - 灵感来源 (ConcernedApe)
- **Ark Pixel Font** - 优秀的开源像素字体
- **Kenney** - 像素素材

---

## 支持

如果喜欢这个主题，请查看 `demo/index.html` 演示页面
或者给个 Star ⭐
