---
title: ES基础 call/apply
tags:
  - JavaScript
categories:
  - FrontEnd
date: 2019-10-24 17:44:33
---

## Function.prototype.call()

> call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

简单的说`call`就是用来改变`this`的指向

### 语法

```javascript
  fun.call(thisArg, arg1, arg2, ...)
```

#### thisArg

在 fun 函数运行时指定的 this 值。

```javascript
if(thisArg == undefined|null) this = window，
if(thisArg == number|boolean|string) this == new Number()|new Boolean()| new String()
```

#### arg1, arg2, ...

指定的参数列表。

### 返回值

使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。

## Function.prototype.apply()

> call()方法的作用和 apply() 方法类似，区别就是 call()方法接受的是参数列表，而 apply()方法接受的是一个参数数组。

### 语法

一个是传入对象+参数列表,一个是传入对象+数组,这就是两者主要的区别.

```javascript
func.apply(thisArg, [argsArray]);
```

## 链接

[MDN call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[MDN apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
