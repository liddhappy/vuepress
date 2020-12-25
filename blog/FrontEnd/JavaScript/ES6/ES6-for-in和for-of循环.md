---
title: ES6 for...in和for...of循环
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2019-12-18 17:34:00
---

## for...in

`for...in`语句以任意顺序遍历一个对象的除 Symbol 以外的可枚举属性,通常只是用来遍历键值对的'键'。

### 为什么用 for...in

`for ... in`是为遍历对象属性而构建的，不建议与数组一起使用，数组可以用`Array.prototype.forEach()`和`for ... of`，那么`for ... in`的到底有什么用呢？  
它最常用的地方应该是用于调试，可以更方便的去检查对象属性（通过输出到控制台或其他方式）。尽管对于处理存储数据，数组更实用些，但是你在处理有`key-value`数据（比如属性用作“键”），需要检查其中的任何键是否为某值的情况时，还是推荐用`for ... in`。

### 语法

```javascript
for (variable in object) statement;
```

- variable
  在每次迭代时，variable 会被赋值为不同的属性名。

- object
  非 Symbol 类型的可枚举属性被迭代的对象。

### 实例

```javascript
function Obj(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const obj = new Obj('xiaoyu', '99', '男');

Obj1.prototype.a = 123;

for (let i in obj) {
  console.log(`obj.${i} = ${obj[i]}`);
}

/*
obj.name = xiaoyu
obj.age = 99
obj.sex = 男
obj.a = 123  //这个是继承来的
*/
```

去掉继承的可以用`hasOwnProperty()`

```javascript
function Obj(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const obj = new Obj('xiaoyu', '99', '男');

Obj.prototype.a = 123;

for (let i in obj) {
  if (obj.hasOwnProperty(i)) console.log(`obj.${i} = ${obj[i]}`);
}
/*
obj.name = xiaoyu
obj.age = 99
obj.sex = 男
*/
```

## for...of

**for...of**语句在可迭代对象（包括 `Array`，`Map`，`Set`，`String`，`TypedArray`，`arguments` 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

### 语法

```javascript
for (variable of iterable) {
  //statements
}
```

- variable
  在每次迭代中，将不同属性的值分配给变量。
- iterable
  被迭代枚举其属性的对象。

## 结语

in 是用来取出 key 的,而 of 用于取出 value

[MDN for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)

[MDN for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
