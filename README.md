# At-Home-Page-VUE

一个基于 [zyyo主页](https://zyyo.net/44.html)，用 Vue 3 + Vite 重构的个人主页项目。

演示网站：[At-Home-Page](https://www.atbspb.online/)，本网站由Netlify支持。

## 项目结构

```
www - VUE/
├── public/                    # 静态资源目录
│   └── static/               # 静态文件
│       ├── fonts/            # 字体文件
│       ├── img/              # 图片文件
│       └── svg/              # SVG 图标
├── src/                      # 源代码目录
│   ├── components/           # Vue 组件
│   ├── composables/          # 组合式函数
│   ├── utils/                # 工具函数
│   ├── App.vue               # 根组件
│   ├── main.js               # 入口文件
│   └── style.css             # 全局样式（主题配置）
├── index.html                # HTML 模板
├── package.json              # 项目依赖配置
├── vite.config.js            # Vite 配置
└── README.md                 # 项目说明文档
```

## 常用设置项位置

### 主题配置

主题颜色和样式变量在 `src/style.css` 中定义：

| 设置项 | 变量名 | 位置 |
|--------|--------|------|
| 主背景颜色 | `--main_bg_color` | 第 59 行（Light）/ 第 78 行（Dark） |
| 主文字颜色 | `--main_text_color` | 第 60 行（Light）/ 第 79 行（Dark） |
| 模块背景颜色 | `--item_bg_color` | 第 64 行（Light）/ 第 83 行（Dark） |
| 背景滤镜模糊 | `--back_filter` | 第 71 行（Light）/ 第 90 行（Dark） |
| 背景遮罩颜色 | `--back_filter_color` | 第 72 行（Light）/ 第 91 行（Dark） |

**主题变量代码示例**（`src/style.css` 第 57-93 行）：

```css
/* ====== 主题: Light (默认) ====== */
:root {
  --main_bg_color: url(/static/img/bz-light.jpg);
  --main_text_color: #ffffff;
  --gradient: linear-gradient(120deg, #bd34fe, #e0321b 30%, #41d1ff 60%);
  --purple_text_color: #747bff;
  --text_bg_color: rgba(180, 200, 230, 0.5);
  --item_bg_color: rgba(235, 240, 250, 0.25);
  --back_filter: 20px;
  --back_filter_color: rgba(0, 0, 0, 0.17);
}

/* ====== Dark 主题 ====== */
[data-theme="Dark"] {
  --main_bg_color: url(/static/img/bz-dark.jpg);
  --main_text_color: #fff;
  --item_bg_color: rgba(19, 20, 24, 0.35);
  --back_filter_color: rgba(0, 0, 0, 0.55);
}
```

### 壁纸设置

- **Light 主题壁纸**：`public/static/img/bz-light.jpg`
- **Dark 主题壁纸**：`public/static/img/bz-dark.jpg`

背景图片样式配置（`src/style.css` 第 101-105 行）：

```css
body {
  background: var(--main_bg_color);
  background-repeat: no-repeat;
  background-size: auto;
  background-position: top center;
  background-attachment: fixed;
}
```

### 组件位置

| 组件 | 位置 | 说明 |
|------|------|------|
| 左侧侧边栏 | `src/components/LeftSidebar.vue` | 个人信息和导航 |
| 页面头部 | `src/components/PageHeader.vue` | 标题和主题切换 |
| 页面内容 | `src/components/PageContent.vue` | 主要内容区域 |
| 页面底部 | `src/components/PageFooter.vue` | 版权信息 |
| 主题切换 | `src/components/ThemeToggle.vue` | 明暗主题切换按钮 |
| 弹窗组件 | `src/components/PopupModal.vue` | 通用弹窗 |
| 加载动画 | `src/components/LoadingScreen.vue` | 页面加载动画 |

### 工具函数

- Cookie 操作：`src/utils/cookie.js`
- 弹窗管理：`src/composables/usePopup.js`

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```


### 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- Vite - 下一代前端构建工具
- CSS3 - 样式和主题系统

## 主题系统

项目支持 Light 和 Dark 两种主题，通过 `data-theme` 属性切换。主题配置在 `src/style.css` 中使用 CSS 变量定义，便于统一管理和快速修改。

**主题切换逻辑**（`src/App.vue` 第 29-38 行）：

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

- **字体文件** (`public/static/fonts/`)：存放自定义字体
- **图片文件** (`public/static/img/`)：存放壁纸、头像、图标等图片
- **SVG 图标** (`public/static/svg/`)：存放可缩放矢量图标

### 源代码

- **组件目录** (`src/components/`)：存放所有 Vue 组件
- **组合式函数** (`src/composables/`)：存放可复用的组合式逻辑
- **工具函数** (`src/utils/`)：存放通用工具函数

## 自定义配置

### 修改壁纸

替换 `public/static/img/bz-light.jpg`（Light 主题）或 `public/static/img/bz-dark.jpg`（Dark 主题）。

### 修改主题颜色

编辑 `src/style.css` 中的 CSS 变量，找到对应的主题区块进行修改。

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
