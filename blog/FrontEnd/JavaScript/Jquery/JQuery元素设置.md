---
title: JQuery元素设置
categories:
  - FrontEnd
tags:
  - jQuery
  - JavaScript
date: 2019-12-05 21:26:00
---

## 元素设置

### 样式设置

```javascript
/*1.设置一个样式*/
//两个参数  设置的样式属性,具体样式
$('li').css('color', 'red');
//传入对象（设置的样式属性:具体样式）
$('li').css({ color: 'red' });
/*2.设置多个样式*/
$('li').css({
  color: 'green',
  'font-size': '20px',
});
```

### 类名设置

```javascript
/*1.添加一个类*/
$('li').addClass('now');
/*2.删除一个类*/
$('li').removeClass('now');
/*3.切换一个类  有就删除没有就添加*/
$('li').toggleClass('now');
/*4.匹配一个类  判断是否包含某个类  如果包含返回true否知返回false*/
$('li').hasClass('now');
```

对应案例：`案例-《tab切换》`

### 属性设置

```javascript
/*1.获取属性*/
$('li').attr('name');
/*2.设置属性*/
$('li').attr('name', 'tom');
/*3.设置多个属性*/
$('li').attr({
  name: 'tom',
  age: '18',
});
/*4.删除属性*/
$('li').removeAttr('name');
```

对应案例：`案例-《美女相册》`

### prop 方法

```javascript
/*对于布尔类型的属性，不要attr方法，应该用prop方法 prop用法跟attr方法一样。*/
$('#checkbox').prop('checked');
$('#checkbox').prop('checked', true);
$('#checkbox').prop('checked', false);
$('#checkbox').removeProp('checked');
```

对应案例：`案例-《表格全选》`

## 动画

### 基本动画

```javascript
/*注意：动画的本质是改变容器的大小和透明度*/
/*注意：如果不传参数是看不到动画*/
/*注意：可传入特殊的字符  fast normal slow*/
/*注意：可传入数字 单位毫秒*/
/*1.展示动画*/
$('li').show();
/*2.隐藏动画*/
$('li').hide();
/*3.切换展示和隐藏*/
$('li').toggle();
```

### 滑入滑出

```javascript
/*注意：动画的本质是改变容器的高度*/
/*1.滑入动画*/
$('li').slideDown();
/*2.滑出动画*/
$('li').slideUp();
/*3.切换滑入滑出*/
$('li').slideToggle();
```

对应案例：`案例-《下拉菜单》`

### 淡入淡出

```javascript
/*注意：动画的本质是改变容器的透明度*/
/*1.淡入动画*/
$('li').fadeIn();
/*2.淡出动画*/
$('li').fadeOut();
/*3.切换淡入淡出*/
$('li').fadeToggle();
$('li').fadeTo('speed', 'opacity');
```

对应案例：`案例-《轮播图》`

### 自定义动画

```javascript
/*
 * 自定义动画
 * 参数1：需要做动画的属性
 * 参数2：需要执行动画的总时长
 * 参数3：执行动画的时候的速度
 * 参数4：执行动画完成之后的回调函数
 * */
$('#box1').animate({ left: 800 }, 5000);
$('#box2').animate({ left: 800 }, 5000, 'linear');
$('#box3').animate({ left: 800 }, 5000, 'swing', function() {
  console.log('动画执行完成');
});
```

对应案例：`案例-《手风琴菜单》`

### 动画队列

```javascript
/*
    jQuery中有个动画队列的机制。
    当我们对一个对象添加多次动画效果时后添加的动作就会被放入这个动画队列中，  
    等前面的动画完成后再开始执行。
    可是用户的操作往往都比动画快，  
    如果用户对一个对象频繁操作时不处理动画队列就会造成队列堆积，
    影响到效果。
    */
```

### stop 使用

```javascript
/*1.停止当前动画  如果动画队列当中还有动画立即执行*/
//$('div').stop();
/*2.和stop()效果一致  说明这是默认设置*/
//$('div').stop(false,false);
/*3.停止当前动画  清除动画队列*/
//$('div').stop(true,false);
/*4.停止当前动画并且到结束位置  清除了动画队列*/
//$('div').stop(true,true);
/*5.停止当前动画并且到结束位置  如果动画队列当中还有动画立即执行*/
$('div').stop(false, true);
```

对应案例：`案例-《音乐导航》`
对应案例：`案例-《工具栏》`
