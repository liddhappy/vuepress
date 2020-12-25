---
title: JS 第二节 基本语法
date: 2019-07-28 21:41:31
tags:
  - JavaScript
categories:
  - FrontEnd
---

## 语句

javascript 语句以`;`分号结尾,表示一行代码,即使你写成多行,但系统只会看分号识别行数.

## 变量声明

1. <font color=#00BFFF >声明、赋值分解</font>
   `var a;` 这个叫变量声明。我们向系统中申请了一个空间，命名叫 a  
   给 a 赋值 100，写作 `a = 100;`，这里不是等号是赋值号  
   `var a；a =100；`可以简化写成 `var a = 100；`

2. <font color=#00BFFF >单一 var 声明法</font>
   `var a,b,c,d;`————单一 var 模式  
   同样可以同时赋值  
   `var a = 1, b = 2, c = 3, d = 4;`  
   为可读性通常写法是

```javascript
var a = 1,
  b = 2,
  c = 3,
  d = 4;
```

赋值可以多次赋值.

```javascript
var a = 123;
a = 234;
```

后面的值覆盖前面的值,所以是 234;

## 变量命名

1. 变量名必须以英文字母、\_(下划线)、\$ 开头
2. 变量名可以包括英文字母、\_、\$、数字
3. 不可以用系统的关键字、保留字作为变量名

## 数据类型

一共 7 种,如下

### 原始值( primitive values )

除 Object 以外的所有类型都是不可变的（值本身无法被改变）。例如，与 C 语言不同，JavaScript 中字符串是不可变的（译注：如，JavaScript 中对字符串的操作一定返回了一个新字符串，原始字符串并没有被改变）。我们称这些类型的值为“原始值”。

> 6 种原始类型:  
> Boolean  
> Null  
> Undefined  
> Number  
> String  
> Symbol (ECMAScript 6 新定义)

### 对象 object

### 堆栈

原始值 stack 栈(放值)  
引用值 heap 堆(放地址)

例子

```javascript
var arr = [1, 2];
var arr1 = arr;
arr.push(3);
document.write(arr);
document.write('<br>');
document.write(arr1);
```

改变 arr 的值,arr1 也改变,因为 arr 和 arr1 的地址指向的一个数值(因为堆里只放地址,arr 赋值给 arr1,就是形成 arr1 的地址然后指向 arr 的值).原始值不会这样.

## 注释

类似于 CSS，JavaScript 中可以添加注释。

```javascript
/*
这里的所有内容
都是注释。
*/
```

如果注释只有一行，可以更简单地放在两个斜杠之后，就像这样：

```javascript
// 这是一条注释。
```

## 错误

错误分为两种

1. 低级错误(语法解析错误)该代码块不执行
2. 逻辑错误(标准错误,情有可原) 该代码块在错误处停止运行,不影响其他
