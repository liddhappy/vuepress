---
title: HTML 扩充 图片元素
date: 2019-08-10 22:32:01
categories:
- HTML
tags: 
- HTML
---

## img元素

image缩写，空元素

src属性：source

alt属性：当图片资源失效时，将使用该属性的文字替代图片

## 和a元素联用

## 和map元素

map：地图

map的子元素：area

衡量坐标时，为了避免衡量误差，需要使用专业的衡量工具：

ps、pxcook、cutpro（本人开发）

## 和figure元素

指代、定义，通常用于把图片、图片标题、描述包裹起来

子元素：figcaption


```html
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <figure>
        <a target="_blank" href="https://baike.baidu.com/item/%E5%A4%AA%E9%98%B3%E7%B3%BB/173281?fr=aladdin">
            <img usemap="#solarMap" src="./img/solar.jpg" alt="这是一张太阳系的图片">
        </a>
        <figcaption>
            <h2>太阳系</h2>
        </figcaption>
        <p>
            太阳系是以太阳为中心，和所有受到太阳的引力约束天体的集合体。包括八大行星（由离太阳从近到远的顺序：水星、金星、地球、火星、木星、土星、天王星、海王星）、以及至少173颗已知的卫星、5颗已经辨认出来的矮行星和数以亿计的太阳系小天体,和哈雷彗星。
        </p>
    </figure>


    <map name="solarMap">
        <area shape="circle" coords="360,204,48" href="https://baike.baidu.com/item/%E6%9C%A8%E6%98%9F/222105?fr=aladdin" target="_blank">
        <area shape="rect" coords="323,282,395,320" href="https://baike.baidu.com/item/%E6%9C%A8%E6%98%9F/222105?fr=aladdin" target="_blank">
        <area shape="poly" coords="601,371,645,312,678,338,645,392" href="https://baike.baidu.com/item/%E5%86%A5%E7%8E%8B%E6%98%9F/137498?fr=aladdin" target="_blank">
    </map>
</body>

</html>
```