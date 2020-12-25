---
title: JS基础 事件对象,事件补充
tags:
- JavaScript
- 事件对象
- 事件
categories:
- FrontEnd
date: 2019-11-07 22:42:27
---

## 介绍

事件对象Event

```javascript
  div.onclick = function(e){
    console.log(e);
  }
```

这里的参数`e`就是事件对象,是系统自动传入的
通常把它自定义为`e`,`evt`或者`event`,毕竟一看就是

## 兼容性

在ie上event参数是直接给`window.event`的

所以兼容就是
```javascript
  div.onclick = function (e){
    var evt = e || window.event;
  }
```

## 取消冒泡

- event.stopPropagation();

不支持ie9以下版本

- event.cancelBubble = true;

ie方法

```javascript
  function stopBubble(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }else{
      event.cancelBubble = true;
    }
  }
```

## 取消默认事件

1. `return false`句柄的方法实现的
下面的例子取消掉了右键菜单
```javascript
  document.oncontextmenu = function(){
    return false;
  }
```

2. `event.preventDefault()`
ie9以下不兼容
```javascript
    document.oncontextmenu = function(e){
      e.preventDefault();
  }
```

3. `event.returnValue = false`
ie用

### 封装和应用

```javascript
  function cancelHandler(e){
    if (e.preventDefault) {
      e.preventDefault();
    }else {
      e.returnValue = false;
    }
  }
```

- 取消a标签默认事件
或者直接这样取消
```html
  <a href="javascript:void(false)">点我也没用</a>
```

## 事件源对象

1. event.target
火狐用
2. event.srcElement
ie用

chrome都有

## 事件委托/事件代理

利用事件冒泡和事件源对象进行处理

优点:
1. 性能: 不需要循环所有元素进行事件绑定
2. 灵活: 当出现新的子元素时不需要重新绑定