---
title: CSS 第八节 元素分类(自带css属性修改)
date: 2019-07-25 18:31:20
categories:
- CSS
tags: 
- CSS
---
以下介绍三种其他后期也需要.

## 行级元素

1. 内容决定元素所占位置  
2. 不可以通过css改变宽高  

`span string em a del`  

自带`display:inline;`  

## 块级元素

1. 独占一行  
2. 可以通过css改变宽高  

`html body div p ul li ol form address h1`  

自带`display:block;`

## 行级块元素

1. 内容决定元素所占位置
2. 可以修改宽高

`img`   

自带`display:inline-block;`

<font color=#00BFFF >凡是拥有`inline`的都具有文字的属性</font>    

## 几个小demo

### a标签

```css
    a{
      text-decoration: none;
      color: #424242;
}
```

### ul li 标签

```css
ul {
    list-style: none;
}
ul ,
li {
    display: inline;
}
```

### em 标签(搜索中的红色字)

大概与此类似  

```css
em{
    list-style: none;
    padding: 0;
    margin: 0;
    font-style: normal;
    color: #c00;
}
```

### 通配符

初始化所有标签

```css
*{
    padding:0;
    margin:0;
    text-decoration:none;
    list-style:none;
}

```