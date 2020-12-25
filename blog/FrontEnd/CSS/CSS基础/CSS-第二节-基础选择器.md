---
title: CSS 第二节 基础选择器
date: 2019-07-24 17:56:49
categories:
- CSS
tags: 
- CSS
---
## id 选择器

<font color=#00BFFF >特点：一个元素只能有一个 id 值，一个 id 只对应一个元素-----类似于身份证</font>  

```html
<div id = "only">123</div>
```

```css
#only {
 background-color: red;
}
```

## class (类) 选择器

<font color=#00BFFF >特点：一个 class 可以对应多个元素,一个元素也能有多个class-----衣服</font>  

```html
<div class = "demo1 demo2">黄色背景蓝色字</div>
<span class="demo1">蓝色</span>
```

```css
    .demo1{
        color: #00f;
    }
    .demo2{
        background: #ff0;
    }
```

使用多个class的方法就是`class = "demo1 demo2 demo3"`  

类为为demo的p标签  

## 标签选择器

```html
    <div>这是什么颜色的</div>
```

```css
    div{
        color: #00f;
    }
```

所有的div都会受到影响,即使是嵌套着的.  

## 通配符选择器

```css
    *{
        color: red;
    }
```

所有的标签包括`html`都会受影响.

## 属性选择器

`[att]`  
表示具有att属性的元素，无论该属性的值如何。  

`[att=val]`
表示具有att属性,值正好为"val"的元素。  

[更多关于属性选择器](http://www.w3school.com.cn/css/css_syntax_attribute_selector.asp)