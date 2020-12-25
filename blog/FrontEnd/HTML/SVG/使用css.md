---
title: SVG使用css
date: 2019-08-10 22:32:04
categories:
  - FrontEnd
tags:
  - HTML
---

## 行间样式

```xml
<rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

## style 标签

`<defs>`表示定义，这里面可以定义一些不会在 SVG 图形中出现、但是可以被其他元素使用的元素。

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style type="text/css"><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

如上把样式放到一块你可以更轻松地调整一大组元素的样式，同样你也可以使用**hover**这样的伪类来创建翻转之类的效果:

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

一些可以在 html 里使用的 css，在 svg 里可能无法正常工作，比如`before`和`after`伪类。

## 外部样式

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

```css
#MyRect {
  fill: red;
  stroke: black;
}
```
