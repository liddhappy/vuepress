---
title: CSS 第三节 选择器进阶
date: 2019-07-24 17:58:02
categories:
- CSS
tags: 
- CSS
---
## 后代选择器

```html
<div>
    <ul>
        <li>123</li>
    </ul>
</div>
```

```css
    div li {}
    ul li {}
    div ul li {}
```

上面三种都可行.  
第一种意在证明不直接的嵌套也可行.

## 子元素选择器

```html
    <ul>
        <li>123</li>
    </ul>
```

```css
    ul > li {}
```

必须是ul下面一层的li.  

以上两种选择器不是必须要标签选择器,可以是基础选择器的任意组合,例如这样  

```css
    .demo div{}
```

## 兄弟选择器

```css
div+p{
  background-color:yellow;
}
```

div后面的p(中间不能有间隔)

## 伪类

格式如下:

> a:link {color: #FF0000}  /* 未访问的链接 */  
a:visited {color: #00FF00}  /* 已访问的链接 */  
a:hover {color: #FF00FF}  /* 鼠标移动到链接上 */  
a:active {color: #0000FF}  /* 选定的链接 */  

[更多关于伪类](http://www.w3school.com.cn/css/css_pseudo_classes.asp)

## 伪元素

```css
h1:before {
    content:url(logo.gif);
}
```

一、  ::first-letter 第一个字

二、 ::first-line 第一行（以浏览器为准的第一行）

三、 ::selection 被选中的字行（鼠标选中的字段）只能向 ::selection 选择器应用少量 CSS 属性：color、background、cursor 以及 outline。

四、 ::before 和 ::after

[更多关于伪元素](http://www.w3school.com.cn/css/css_pseudo_elements.asp)

## 分组 和 嵌套 选择器

### 结合元素选择器(嵌套)

类为demo的p标签  

```css
    p.demo {color:red;}
```

id为a,class为b的标签(不要说id是唯一的干嘛还加class,举例嘛)  

```css
    #a.b{color:blue;}
```

### 分组选择器

```css
    div,
    .demo,
    div ul li,
    p {
        color: red;
    }
```

几个属于并列关系(任意选择器),用 `,` 隔开