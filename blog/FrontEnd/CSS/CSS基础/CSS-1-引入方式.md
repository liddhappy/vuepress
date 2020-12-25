---
title: CSS 第一节 入门 引入方式
date: 2019-07-24 16:14:06
categories:
- CSS
tags: 
- CSS
---
开始之前介绍下  
CSS 指层叠样式表 (Cascading Style Sheets)  
CSS 注释方式仅有  `/* 被注释的内容 */`

<font color=#00BFFF >CSS的引入方式有三种</font>  

## 行间样式

在标签里使用`style=""`叫做行间样式

```html
    <div style="color: blue">这是什么颜色的</div>
```

## 内部样式

css写在`<head></head>`里面的`<style></style>`标签中

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
    div{
        color: aqua;
    }
    </style>
</head>
<body>
    <div>这是什么颜色的</div>
</body>
</html>
```

## 外部样式

外部引用是用`<link>`单标签链接

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="Untitled-1.css">
</head>
<body>
    <div>这是什么颜色的</div>
</body>
</html>
```

```css
div{
    color: red;
}
```