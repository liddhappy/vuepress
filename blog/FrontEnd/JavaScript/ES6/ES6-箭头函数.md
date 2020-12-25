---
title: ES6 箭头函数
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2019-10-27 16:45:10
---

## 基本语法

ES6 中可以使用箭头(`=>`)定义函数,不能用作构造函数,那样会报错

1. 具有一个参数的简单函数

```javascript
let single = (a) => a;
```

一个参数时()可以省略,写成`a => a`

2. 没有参数的函数,需要一个括号,参数为空

```javascript
let func = () => {
  console.log('hello');
};
```

3. 多个参数必须要括号,用逗号隔开

```javascript
let func = (a, b) => {
  return a + b;
};
```

4. 函数主体只有返回值时,return 和{}可以省略

```javascript
let func = (a, b) => a + b;
```

## 高级语法

1. 用括号包裹函数主体,返回对象字面量

```javascript
var fun = (name) => ({
  name: name,
  age: 18,
});
```

2. 支持剩余参数

```javascript
var fun = (a, b, c, d, e) => {
  console.log(a);
};
```

3. 支持默认参数

```javascript
var fun = (a = 100) => {
  console.log(a);
};
```

4. 支持参数列表的解构

```javascript
let f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;
```

## 不绑定 arguments

箭头函数不绑定 arguments,只是可以使用封闭作用域中的 arguments
使用自身的 arguments 会报错(因为不存在)

```javascript
var arguments = ['a', 'b', 'c'];
//var arr = (a) => arguments[0];
// arr(1, 2);

function demo(one, two) {
  var arr = (a) => arguments[0];
  //使用的是封闭作用域的arguments
  return arr();
}
demo(22, 33);
```

## 不绑定 this

普通函数下

```javascript
function Person() {
  this.age = 0;
  setInterval(function() {
    this.age++;
  }, 2000);
}
var p = new Person();
```

`p.age`并不会发生成长行为

使用箭头函数

```javascript
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
  }, 2000);
}
var p = new Person();
```

this 指向没有改变,所以达到了想要的成长效果

## 通过 call/apply 调用

由于箭头函数没有自己的 this 指针,调用这两个函数时,第一个参数(改变 this 指向)会被忽略

```javascript
var demo = {
  base: 100,

  add: function(a) {
    var f = (v) => v + this.base;
    return f(a);
  },

  addCall: function(a) {
    var f = (v) => v + this.base;
    var test = {
      base: 10086,
    };

    return f.call(test, a);
  },
};

console.log(demo.add(1));
console.log(demo.addCall(1));
```
