---
title: 第1章 Bootstrap介绍
date: 2020-11-28
categories:
  - FrontEnd
tags:
  - Bootstrap
---

## 一.概念：一个前端开发的框架

框架：一个半成品软件，开发人员可以在框架基础上，在进行开发，简化编码。

响应式页面：

同一套页面可以兼容不同分辨率的设备。

实现：依赖于栅格系统：将一行平均分成 12 个格子，可以指定元素占几个格字。

步骤：

1. 定义容器

容器分类：

1. container：两边留白

2. containner-fluid:每一种设备都是 100%宽度

3. 定义行 样式：row

4. 定义元素 指定该元素在不同的设备上，所占的格子数目 样式 col-设备代号-格子数目

设备代号

1. xs：**超小屏幕** 手机 (<768px): col-xs-12

2. sm:**小屏幕** 平板 (≥768px)

3. md:**中等屏幕** 桌面显示器 (≥992px)

4. lg:**大屏幕** 大桌面显示器 (≥1200px)

**注意：**

1. **一行如果格子数目大于 12 个格子，则超出部分自动换行。**
2. **栅格类属性可以向上兼容**
3. **如果设备宽度小于了设置栅格类属性的设备代码的最小值，会一个元素沾满一整行。**

一.全局 CSS 样式

1. 按钮

```html
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input" />
<input class="btn btn-default" type="submit" value="Submit" />
```
