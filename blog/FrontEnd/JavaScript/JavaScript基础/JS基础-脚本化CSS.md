---
title: JS基础 脚本化CSS
tags:
  - JavaScript
  - DOM
categories:
  - FrontEnd
date: 2019-11-03 15:55:44
---

## HTMLElement.style

返回一个 CSSStyleDeclaration 对象，表示元素的 **内联 style** 属性（attribute），但**忽略任何样式表应用的属性**。

HTMLElement.style 是不可以写的,使用时是修改他的属性,例如`document.body.style.color = "red"`

由于 js 命名中没有`-`,所以改用小驼峰命名法,例如`background-color`写成`backgroundColor`
`cssFloat`和`float`是一样的,因为保留字,所以加了个 css 前缀
`HTMLElement.style.cssText`直接写 css 代码,例如

```JavaScript
elt.style.cssText = "color: blue; border: 1px solid black";
//或者
elt.setAttribute("style", "color:red; border: 1px solid blue;");
```

## Window.getComputedStyle()

方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本**计算后**报告元素的所有 CSS 属性的值。 私有的 CSS 属性值可以通过对象提供的 API 或通过简单地使用 CSS 属性名称进行索引来访问。

属性值全部是绝对值,不会有相对值

注: px 在这里是绝对值,web 中的宽度都是用像素计算的

### 语法

```javascript
let style = window.getComputedStyle(element, [pseudoElt]);
```

element
用于获取计算样式的 Element。

pseudoElt (可选)
指定一个要匹配的伪元素的字符串。必须对普通元素省略（或 null）。

### 兼容性

不支持 ie8 以下

ie8 以下使用`Element.currentStyle`(返回值不是计算值)

### 封装一个 getStyle()

```javascript
function getStyle(elem, prop) {
  return window.getComputedStyle
    ? window.getComputedStyle(elem, null)[prop]
    : elem.currentStyle[prop];
}
```
