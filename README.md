# Aneko Homepage Astro + Vue
Aneko-homepage , 是 zyyo个人主页[https://zyyo.cc] 的 Astro + Vue 重构版本。

演示地址[https://www/aneko.ink]

## 技术栈

- Astro 7：页面入口、静态构建与资源输出
- Vue 3：主题切换、弹窗、内容模块、时间、天气、GitHub 数据等交互区域
- pnpm：包管理与脚本运行
- 原生 CSS：全站样式集中在 `src/style.css`

## 功能概览

- 个人主页布局：左侧信息栏、顶部导航、模块内容区、页脚
- 明暗主题切换：主题状态写入 `themeState` Cookie，首屏内联脚本会提前同步主题和壁纸预加载
- 内容模块切换：支持全部、站点功能、外部链接等标签视图，并带键盘方向键导航
- 实时组件：时间组件、天气组件、GitHub 资料/仓库/动态/贡献图组件
- 静态资源兼容：图片、字体、SVG 保持 `/static/...` 访问路径

## 目录结构

```text
.
├── astro.config.mjs        # Astro 配置，启用 Vue 集成并输出静态站点
├── package.json            # 项目脚本与依赖
├── public/static/          # 原站静态资源，构建后保持 /static/... 路径
└── src/
    ├── pages/index.astro   # 页面入口与静态文档外壳
    ├── style.css           # 全站样式
    ├── components/         # Astro 页面中使用的 Vue 组件
    ├── composables/        # 天气、弹窗、GitHub 数据逻辑
    └── utils/              # 通用工具
```


## 架构说明

`src/pages/index.astro` 是唯一页面入口。Astro 会静态渲染 HTML 文档、左侧栏和基础布局；需要浏览器状态或网络请求的部分通过 Vue island 挂载：

- `HeaderIsland.vue`：组合页头、主题切换和弹窗，并在页面加载完成后隐藏 loading
- `PageContent.vue`：模块切换、站点链接、技能图、时间、天气和 GitHub 区块
- `PageFooter.vue`：根据滚动位置显示页脚

外部数据逻辑拆在 composables 中：

- `useWeather.js` 请求天气 API，并规范化当前天气、预报、空气质量、生活指数等数据
- `useGitHub.js` 请求 GitHub 用户、仓库、动态和贡献数据，并用 `localStorage` 做短时缓存
- `usePopup.js` 管理弹窗显示状态

## 静态资源

所有原站资源放在 `public/static` 下，代码中以绝对路径引用，例如：

```html
<img src="/static/img/logo.jpg" />
<img src="/static/svg/blog.svg" />
```

新增图片、字体或 SVG 时，优先继续放入 `public/static`，避免破坏原有 URL 结构。

## License

This project is released under the MIT License. See `LICENSE` for details.
