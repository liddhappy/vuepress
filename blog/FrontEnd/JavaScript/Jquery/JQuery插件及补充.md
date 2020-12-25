---
title: JQuery插件及补充
categories:
  - FrontEnd
tags:
  - jQuery
  - JavaScript
date: 2019-12-05 21:26:56
---

## jQuery 补充知识点

### 链式编程

> 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery 对象。

```javascript
end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。
```

【案例：五角星评分案例.html】

### each 方法

> jQuery 的隐式迭代会对所有的 DOM 对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历 jQuery 对象集合，为每个匹配的元素执行一个函数

```javascript
// 参数一表示当前元素在所有匹配元素中的索引号
// 参数二表示当前元素（DOM对象）
$(selector).each(function(index, element) {});
```

【案例：不同的透明度.html】

### 多库共存

> jQuery 使用$作为标示符，但是如果与其他框架中的$冲突时，jQuery 可以释放\$符的控制权.

```javascript
var c = $.noConflict(); //释放$的控制权,并且把$的能力给了c
```

## 插件

### 常用插件

> 插件：jquery 不可能包含所有的功能，我们可以通过插件扩展 jquery 的功能。
>
> jQuery 有着丰富的插件，使用这些插件能给 jQuery 提供一些额外的功能。

1. jquery.color.js

> animate 不支持颜色的渐变，但是使用了 jquery.color.js 后，就可以支持颜色的渐变了。

使用插件的步骤

```javascript
//1. 引入jQuery文件
//2. 引入插件（如果有用到css的话，需要引入css）
//3. 使用插件
```

2. jquery.lazyload.js

懒加载插件

### jquery.ui.js 插件

jQueryUI 专指由 jQuery 官方维护的 UI 方向的插件。

官方 API：[http://api.jqueryui.com/category/all/](http://api.jqueryui.com/category/all/)

其他教程：[jQueryUI 教程](http://www.runoob.com/jqueryui/jqueryui-tutorial.html)

基本使用:

```javascript
//1.	引入jQueryUI的样式文件
//2.	引入jQuery
//3.	引入jQueryUI的js文件
//4.	使用jQueryUI功能
```

使用 jquery.ui.js 手风琴菜单

## 制作 jquery 插件

> 原理：jquery 插件其实说白了就是给 jquery 对象增加一个新的方法，让 jquery 对象拥有某一个功能。

```javascript
//通过给$.fn添加方法就能够扩展jquery对象
$.fn.pluginName = function() {};
```
