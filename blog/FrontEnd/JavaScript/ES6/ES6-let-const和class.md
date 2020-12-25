---
title: ES6 let和const
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2019-10-30 20:42:02
---

## let 语法

语法和`var`是一样的
`let`在编译时初始化

## 作用域规则

`var`作用域是整个函数域,或者全局
`let`作用域块级,语句,变量或者表达式

```javascript
var x = 10;
let y = 100;
```

`'x' in window`为 true
`'y' in window`为 false

`var`可以是 window 的属性
`let`不能成为 window 的属性

```javascript
function varTest() {
  var x = 1;
  {
    var x = 2;
    console.log(x); //2
  }
  console.log(x); //2
}

function letTest() {
  let x = 1;
  {
    let x = 2;
    console.log(x); //1
  }
  console.log(x); //2
}
```

## 重复声明

同一块区域,不能重复声明(包括函数声明)

```javascript
let demo = 1;
let demo = 2; //SyntaxError
```

注:`switch`中的`case`语句是同一个块,也会产生重定义,解决办法是将 case 下的语句用{}包裹就行

## 暂存死区

`var`声明会被提升并赋值为`undefined`
通过 `let` 声明的变量直到它们的定义被执行时才初始化。
从块顶到初始化的区域是变量的暂存死区

```javascript
function name() {
  console.log(demo);
  console.log(test);
  var demo = 100; //不会执行到这里,所以demo是undefined
  let foo = 123; //ReferenceError
}
```

## 不允许重复声明

```javascript
let demo = 100;
let demo = 1;
//SyntaxError

var demo = 100; //var的位置前后并不是关键,因为它会提升
let demo = 100;
//SyntaxError

let demo = 100;
{
  let demo = 100;
  //ES6中在父子块中let是允许重复定义的
}
```

## 暂存死区作用域的相关例子

`(foo + 23)`中的`foo`并不能识别成`200`;

```javascript
function test() {
  var foo = 200;
  {
    let foo = foo + 23; //ReferenceError
  }
}
```

## 模仿私有成员

## const 语法

`const`与`let`相似,常量的值不能通过重新赋值来改变，并且不能重新声明。

1. 常量必须在声明时赋值
2. 不能重新赋值
3. 不能用`let`,`var`,`const`以及函数等等进行重新声明
4. 和`let`一样是块作用域
5. 用`const`声明的对象不能重写,然而`let`是可以的,对象的属性不是常量,所以可以修改
6. 同上一条声明的数组也不能重写,但是可以对值进行修改(如 push 或者 pop),`let`没有这个限制

## class

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### 声明提升

类就是类似构造函数,与构造函数函数不同的是.函数会进行声明提升,而类声明不会

```javascript
let p = new Rectangle();
// ReferenceError

class Rectangle {}
```

### 类表达式

和函数一样,类也可以有表达式(同样不会提升)

```javascript
/* 匿名类 */

let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/* 命名的类 */

let Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

### 链接

类是在严格模式下的执行的,关于类具体的属性和方法,详见 MDN
[MDN class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
