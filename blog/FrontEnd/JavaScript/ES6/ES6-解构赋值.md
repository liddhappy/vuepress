---
title: ES6 解构赋值
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2019-11-01 18:36:05
---

## 描述

解构采用了数组字面量以及对象字面量相同的语法,不同的是,解构是从等式左边写出要从元便令中获取哪些变量

```javascript
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

## 解构数组

### 变量声明并赋值时的解构

```javascript
var foo = ['one', 'two', 'three'];
var [one, two, three] = foo;
console.log(one);
console.log(two);
console.log(three);
```

### 变量先声明后赋值时的解构

通过解构分离变量的声明,可以为一个变量赋值

```javascript
var a, b;
[a, b] = [1, 2];
```

### 默认值

为了防止给变量赋值一个`undefined`,可以给表达式左边设置默认值

```javascript
var a, b;
[a = 8, b = 4] = [1];
//a = 1 , b = 4
```

### 交换变量

用解构表达式交换两个变量

```javascript
var a = 1;
var b = 3;

[a, b] = [b, a];
```

### 解析一个从函数返回的数组

下面例子直接把函数返回的数组直接赋值给了变量 a,b

```javascript
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
```

### 忽略某些返回值

```javascript
var f = () => [1, 2, 3];
var [a, , b] = f();
//a = 1 ,b = 3

var [, , ,] = f(); //甚至忽略全部
```

### 将剩余值赋值给一个变量

```javascript
var [a, ...b] = [1, 2, 3];
//b = [2,3]
```

剩余元素应该是最后一个一元素,所以在剩余元素后面不应该拥有符号特别是注意逗号

```javascript
  var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### 可以用来处理正则表达式

用正则表达式的 exec() 方法匹配字符串会返回一个数组，该数组第一个值是完全匹配正则表达式的字符串，然后的值是匹配正则表达式括号内内容部分。解构赋值允许你轻易地提取出需要的部分，忽略完全匹配的字符串——如果不需要的话。

## 解构对象

### 基本赋值

```javascript
var o = { p: 42, q: true };
var { p, q } = o;
//p = 42, q = true
```

### 无声明赋值

一个变量可以独立于其声明进行赋值

```javascript
var a, b;
({ a, b } = { a: 1, b: 2 });
```

赋值语句中的`()`是必须的,不然`{}`会被识成代码块
当然写成`var {a,b} = {a: 1,b: 2};`也是有效的
如果使用`()`需要注意的前面需要有`;`不然可能把`()`当成之前的函数执行

### 给新变量名赋值

下面的例子同时演示对象名需要对应

```javascript
var o = { p: 42, q: 'haha' };
var { q: name, p: age } = o;
//console.log(age); // 42
```

### 对象中的索引名是需要一致的

```javascript
var o = { p: 42, q: 'haha' };
var { p1: p1, q1: q1 } = o;
//console.log(q1); // undefined
```

### 默认值

```javascript
var { a = 100, b = 99 } = { a: 3 };
//a = 3, b = 99
```

### 给新的变量重命名并提供默认值

```javascript
var { a: aa = 100, b: bb = 5 } = { a: 3 };
//aa = 3 ,bb = 5;
```

### 函数参数的默认值

### 无效的 JS 标识符作为属性名称

通过提供有效的替代标识符，解构可以与不是有效的 JavaScript 标识符的属性名称一起使用。

```javascript
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"
```
