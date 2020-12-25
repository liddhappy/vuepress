---
title: HTML 扩充 iframe元素
date: 2019-08-10 22:32:04
categories:
- HTML
tags: 
- HTML
---

框架页  

通常用于在网页中嵌入另一个页面  

iframe为可替换元素  

1. 通常行盒
2. 通常显示的内容取决于元素的属性
3. CSS不能完全控制其中的样式
4. 具有行快盒的特点

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        iframe{
            width: 1000px;
            height: 600px;
        }
    </style>
</head>
<body>
        <iframe src="https://player.bilibili.com/player.html?aid=52736078&cid=92261718&page=1" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"> 
        </iframe>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        iframe{
            width: 100%;
            height: 500px;
        }
    </style>
</head>
<body>
    <a href="https://www.baidu.com" target="myframe">百度</a>
    <a href="https://douyu.com" target="myframe">斗鱼</a>
    <a href="https://www.taobao.com" target="myframe">淘宝</a>

    <iframe name="myframe" src="https://www.baidu.com"></iframe>
</body>
</html>
```