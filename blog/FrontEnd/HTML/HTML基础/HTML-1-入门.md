---
title: HTML 第一节 入门
date: 2019-07-20 22:32:01
categories:
- HTML
tags: 
- HTML
---
超文本标记语言 -- HyperText Markup Language

## 什么是HTML

HTML 是用来描述网页的一种语言。  

> HTML 指的是超文本标记语言: HyperText Markup Language  
HTML 不是一种编程语言，而是一种标记语言  
HTML 使用标记标签来描述网页  
HTML 文档包含了HTML 标签及文本内容  
HTML 文档也叫做 web 页面  

## HTML 标签

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。  

> HTML 标签是由尖括号包围的关键词，比如 `<html>`  
> HTML 标签通常是成对出现的，比如 `<b>` 和 `</b>`  
> 标签对中的第一个标签是开始标签，第二个标签是结束标签  
> 开始和结束标签也被称为开放标签和闭合标签  
>
> > <标签>内容</标签>  

## HTML 元素

> HTML 元素以开始标签起始  
> HTML 元素以结束标签终止  
> 元素的内容是开始标签与结束标签之间的内容  
> 某些 HTML 元素具有空内容（empty content）  
> 空元素在开始标签中进行关闭（以开始标签的结束而结束）  
> 大多数 HTML 元素可拥有属性  

按照元素的定义,有个小建议  
即使 `<br>` 在所有浏览器中都是有效的，但使用 `<br />` 其实是更长远的保障。

## HTML 属性

> HTML 元素可以设置属性
属性可以在元素中添加附加信息
属性一般描述于开始标签
属性总是以名称/值对的形式出现，比如：`name="value"`。

```html
    <meta charset="UTF-8">
```

## HTML 注释

```html
    <!-- 这是一段注释 -->

    <p>这是一个段落。</p>

    <!-- 记得在此处添加信息 -->
```

注释对于 HTML 纠错也大有帮助，因为您可以一次注释一行 HTML 代码，以搜索错误：  

```html
    <!-- 此刻不显示图片：
    <img border="0" src="/i/tulip_ballade.jpg" alt="Tulip">
    -->
```

您也许会在 HTML 中偶尔发现条件注释：  

```html
    <!--[if IE 8]>
    .... some HTML here ....
    <![endif]-->
```

条件注释定义只有 Internet Explorer 执行的 HTML 标签。  

## 主流浏览器及其内核

主流浏览器和内核(这里的内核通常指渲染引擎)，主流浏览器是有一定市场份额，并且有自己独立研发的内核浏览器分 shell+内核  

| 主流浏览器（必须有独立内核）市场份额大于 3% | 内核         |
| :-----------------------------------------: | ------------ |
|                     IE                      | trident      |
|                   Friefox                   | Gecko        |
|                Google Chrome                | Webkit/blink |
|                   Safari                    | Webkit       |
|                    Opera                    | presto/blink |

![alt](./HTML-1-入门/b.png)  

Presto是一个由Opera Software开发的浏览器排版引擎（非开源），供Opera 7.0~10.00版使用。
2013年2月14日 Opera将采用webkit  
4月,放弃webkit使用blink  
16年,曾经与IE、Firefox并称的三大浏览器之一因市场占有率不及2%,后被昆仑万维收购  