# CSS Unit Converter

一个简单易用的 CSS 单位转换工具网站，帮助开发者在不同的 CSS 单位之间进行转换。

## 功能特点

- 支持多种 CSS 单位之间的相互转换
- 直观的卡片式布局
- 实时转换结果
- 响应式设计，支持移动端访问

## 支持的单位转换

- 像素 (px)
- 厘米 (cm)
- 毫米 (mm)
- 英寸 (in)
- 点 (pt)
- 派卡 (pc)
- rem
- em
- 视窗宽度 (vw)
- 视窗高度 (vh)

## 技术栈

- HTML5
- CSS3
- JavaScript (vanilla) 

## 项目结构
```
project-root/
├── index.html              # 主页
├── styles.css              # 全局样式
├── converters/
│   ├── converter.css       # 转换器通用样式
│   ├── pixel/             # 像素相关转换
│   │   ├── index.html     # 像素转换器首页
│   │   ├── to-inch.html   # 像素转英寸
│   │   ├── to-pt.html     # 像素转点
│   │   ├── to-pc.html     # 像素转派卡
│   │   ├── to-vw.html     # 像素转视窗宽度
│   │   ├── to-vh.html     # 像素转视窗高度
│   │   ├── to-ft.html     # 像素转英尺
│   │   └── to-percent.html # 像素转百分比
│   └── inch/              # 英寸相关转换（待实现）
└── README.md 