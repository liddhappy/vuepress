---
title: JS基础 获取dom尺寸
tags:
  - JavaScript
categories:
  - FrontEnd
date: 2019-11-03 15:55:22
---

## 查看元素尺寸

### Element.getBoundingClientRect()

方法返回元素的大小及其相对于视口的位置。(不是实时的)

### HTMLElement.offsetWidth/offsetHeight

一个只读属性，返回一个元素的布局宽度/高度。(视觉上的尺寸)

offsetWidth/offsetHight 是测量包含元素的边框(border)、内边距(padding)、滚动条(scrollbar)（如果存在的话）、以及 CSS 设置的宽高的值。(但可能浏览器间有点小差别)

## 查看元素位置

### HTMLElement.offsetLeft

是一个只读属性，返回当前元素左上角相对于 HTMLElement.offsetParent 节点的左边界偏移的像素值。

> 对块级元素来说，offsetTop、offsetLeft、offsetWidth 及 offsetHeight 描述了元素相对于 offsetParent 的边界框。

### HTMLElement.offsetTop

为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部内边距的距离。

## HTMLElement.offsetParent

只读属性，返回一个指向最近的（closest，指包含层级上的最近）包含该元素的定位元素。如果没有定位的元素，则 `offsetParent` 为最近的 `table`, `td`, `th`或`body`元素。当元素的 `style.display` 设置为 `"none"` 时，`offsetParent` 返回 `null`。`offsetParent` 很有用，因为 `offsetTop` 和 `offsetLeft` 都是相对于其内边距边界的。
