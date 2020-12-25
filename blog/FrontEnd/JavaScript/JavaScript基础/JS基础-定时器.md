---
title: JS基础 定时器
tags:
  - JavaScript
  - 定时器
categories:
  - FrontEnd
date: 2019-11-02 21:41:57
---

## setInterval()

一个时间非常不精准的定时器

### 语法

```javascript
  var intervalID = scope.setInterval(func, delay, [arg1, arg2, ...]);
  var intervalID = scope.setInterval(code, delay);
```

- func 回调函数
- delay 间隔时间
- code 字符串代码(不建议用的方法)
- arg 向回调函数传递的参数

在新的用法中,常和剪头函数联用

```javascript
setInterval(() => {}, delay, [arg]);
```

### 清除

setInterval 返回一个唯一标识(第几个计时器)

```javascript
let demo = setInterval((a, b) => console.log(a, b), 2000, 122, 123);

let demo1 = setInterval((a, b) => console.log(a, b), 2000, 122, 123);

clearInterval(1); //清除第一个计时器
clearInterval(demo1); //清除第二个计时器
```

## setTimeout()

该定时器在定时器到期后执行一个函数或指定的一段代码。

### 语法

```javascript
var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
var timeoutID = scope.setTimeout(function[, delay]);
var timeoutID = scope.setTimeout(code[, delay]);
```

delay 不写的时候取默认值 0.

### 清除

```javascript
clearTimeout();
```

需要注意的是`setTimeout()`和`setInterval()`共用一个编号池，技术上，`clearTimeout()`和 `clearInterval()` 可以互换。但是，为了避免混淆，不要混用取消定时函数。

在同一个对象上（一个 window 或者 worker），`setTimeout()`或者`setInterval()`在后续的调用不会重用同一个定时器编号。但是不同的对象使用独立的编号池。
