# aneko-homepage

一个基于 [zyyo主页](https://zyyo.net/44.html)，用 Vue 3 + Vite 重构的个人主页项目。

演示网站：[www.aneko.ink](https://www.aneko.ink/)。

## 项目结构

```
www - VUE/
├── public/                    # 静态资源目录
│   └── static/               # 静态文件
│       ├── fonts/            # 字体文件
│       ├── img/              # 壁纸、头像、二维码等图片
│       └── svg/              # SVG 图标（项目图标、技能图、贪吃蛇等）
├── src/                      # 源代码目录
│   ├── components/           # Vue 组件
│   ├── composables/          # 组合式函数
│   ├── utils/                # 工具函数
│   ├── App.vue               # 根组件
│   ├── main.js               # 入口文件
│   └── style.css             # 全局样式（主题配置）
├── index.html                # HTML 模板（含资源预加载）
├── package.json              # 项目依赖配置
├── vite.config.js            # Vite 配置（含构建优化）
├── wrangler.toml             # Cloudflare Pages 部署配置
├── LICENSE                   # MIT 许可证
└── README.md                 # 项目说明文档
```

## 常用设置项位置

### 主题配置

主题颜色和样式变量在 `src/style.css` 中定义：

| 设置项 | 变量名 | 位置 |
|--------|--------|------|
| 主背景颜色 | `--main_bg_color` | 第 59 行（Light）/ 第 77 行（Dark） |
| 主文字颜色 | `--main_text_color` | 第 60 行（Light）/ 第 78 行（Dark） |
| 模块背景颜色 | `--item_bg_color` | 第 64 行（Light）/ 第 82 行（Dark） |
| 背景滤镜模糊 | `--back_filter` | 第 71 行（Light）/ 第 89 行（Dark） |
| 背景遮罩颜色 | `--back_filter_color` | 第 72 行（Light）/ 第 90 行（Dark） |

**主题变量代码示例**（`src/style.css` 第 58-93 行）：

```css
/* ====== 主题: Light (默认) ====== */
:root {
  --main_bg_color: url(/static/img/bz-light.jpg);
  --main_text_color: #ffffff;
  --gradient: linear-gradient(120deg, #bd34fe, #e0321b 30%, #41d1ff 60%);
  --purple_text_color: #747bff;
  --text_bg_color: rgba(180, 200, 230, 0.5);
  --item_bg_color: rgba(235, 240, 250, 0.25);
  --item_hover_color: rgba(225, 235, 250, 0.4);
  --item_left_title_color: #ffffff;
  --item_left_text_color: #ffffff;
  --footer_text_color: #ffffff;
  --left_tag_item: rgba(235, 240, 250, 0.35);
  --card_filter: 0px;
  --back_filter: 20px;
  --back_filter_color: rgba(0, 0, 0, 0.17);
  --fill: #ffffff;
}

/* ====== Dark 主题 ====== */
[data-theme="Dark"] {
  --main_bg_color: url(/static/img/bz-dark.jpg);
  --main_text_color: #fff;
  --gradient: linear-gradient(120deg, rgb(133, 62, 255), #f76cc6 30%, rgb(255, 255, 255) 60%);
  --purple_text_color: #747bff;
  --text_bg_color: rgba(26, 4, 48, 0.5);
  --item_bg_color: rgba(19, 20, 24, 0.35);
  --item_hover_color: rgba(19, 23, 27, 0.55);
  --item_left_title_color: #ffffff;
  --item_left_text_color: #ffffff;
  --footer_text_color: #ffffff;
  --left_tag_item: rgba(19, 20, 24, 0.35);
  --card_filter: 0px;
  --back_filter: 20px;
  --back_filter_color: rgba(0, 0, 0, 0.55);
  --fill: #ffffff;
}
```

### 壁纸设置

- **Light 主题壁纸**：`public/static/img/bz-light.jpg`
- **Dark 主题壁纸**：`public/static/img/bz-dark.jpg`

背景图片样式配置（`src/style.css` 第 95-104 行）：

```css
body {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  position: relative;
  font-family: "b", sans-serif;
  background: var(--main_bg_color) no-repeat fixed top center / cover;
  transition: color 0.1s ease;
  color: var(--main_text_color);
}
```

### 模块修改位置

| 模块 | 文件 | 可修改内容 | 位置 |
|------|------|-----------|------|
| 左侧侧边栏 | `src/components/LeftSidebar.vue` | 个人描述文字 | 第 31 行 |
| 左侧侧边栏 | `src/components/LeftSidebar.vue` | 标签列表 | 第 47-53 行 |
| 左侧侧边栏 | `src/components/LeftSidebar.vue` | 时间线数据 | 第 55-98 行 |
| 页面头部 | `src/components/PageHeader.vue` | 欢迎语 | 第 32 行 |
| 页面头部 | `src/components/PageHeader.vue` | 图标链接列表 | 第 41-64 行 |
| 页面内容 | `src/components/PageContent.vue` | 项目站点数据 | 第 65-70 行 |
| 页面底部 | `src/components/PageFooter.vue` | 版权信息 | 第 3 行 |
| 主题切换 | `src/components/ThemeToggle.vue` | 切换按钮样式 | 第 21-36 行 |
| 根组件 | `src/App.vue` | 主题切换逻辑 | 第 46-52 行 |

### 工具函数

| 文件 | 说明 |
|------|------|
| `src/utils/cookie.js` | Cookie 读写操作 |
| `src/composables/usePopup.js` | 弹窗事件管理 |

## 部署

项目支持部署到 Cloudflare Workers：

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 部署到 Cloudflare Workers
npx wrangler deploy
```

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- Vite - 下一代前端构建工具
- CSS3 - 样式和主题系统

## 主题系统

项目支持 Light 和 Dark 两种主题，通过 `data-theme` 属性切换。主题配置在 `src/style.css` 中使用 CSS 变量定义，便于统一管理和快速修改。

**主题切换逻辑**（`src/App.vue` 第 46-52 行）：

```javascript
const theme = ref('Light')

function toggleTheme() {
  theme.value = theme.value === 'Dark' ? 'Light' : 'Dark'
  setCookie('themeState', theme.value, 365)
  document.documentElement.dataset.theme = theme.value
}
```

## 文件说明

### 静态资源

- **字体文件** (`public/static/fonts/`)：存放自定义字体（Ubuntu、Pacifico）
- **图片文件** (`public/static/img/`)：存放壁纸、头像、二维码等图片
- **SVG 图标** (`public/static/svg/`)：存放项目图标、技能图、贪吃蛇动画等矢量图

### 源代码

- **组件目录** (`src/components/`)：存放所有 Vue 组件
- **组合式函数** (`src/composables/`)：存放可复用的组合式逻辑
- **工具函数** (`src/utils/`)：存放通用工具函数

## 自定义配置

### 修改壁纸

替换 `public/static/img/bz-light.jpg`（Light 主题）或 `public/static/img/bz-dark.jpg`（Dark 主题）。

### 修改主题颜色

编辑 `src/style.css` 中的 CSS 变量，找到对应的主题区块进行修改。

### 修改项目站点

编辑 `src/components/PageContent.vue` 中的 `siteProjects` 数组：

```javascript
const siteProjects = [
  { name: '博客', url: 'https://blog.atbspb.online', img: '/static/svg/blog.svg' },
  { name: '云盘', url: 'https://disk.atbspb.online', img: '/static/svg/disk.svg' },
  { name: '探针', url: 'https://tz.atbspb.online', img: '/static/svg/probe.svg' },
  { name: '相册', url: 'https://photo.atbspb.online', img: '/static/svg/album.svg' },
]
```

### 添加新组件

在 `src/components/` 目录下创建新的 `.vue` 文件，然后在 `App.vue` 中导入并使用：

```vue
<template>
  <div>
    <LeftSidebar />
    <div class="at-right">
      <PageHeader :theme="theme" @toggle-theme="toggleTheme" />
      <PageContent />
      <!-- 添加新组件 -->
      <NewComponent />
    </div>
  </div>
</template>

<script setup>
import LeftSidebar from './components/LeftSidebar.vue'
import NewComponent from './components/NewComponent.vue'
// ...
</script>
```

## 许可证

MIT License
