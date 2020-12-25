---
title: ES6 Symbol数据类型的理解和使用
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2020-01-15 11:01:52
---

## 介绍

Symbol 是 ES 的第七种数据类型(原始类型)  
Symbol()函数会返回 symbol 类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："`new Symbol()`"。

每个从 Symbol()返回的 symbol 值都是唯一的。一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的。

## 语法

```javascript
Symbol([description]);
```

- `description`(可选): 用于对 Symbol 进行描述,可以是任何值,但是非`String`值会调用`toString()`然后传入`Symbol()`

读取描述可以使用`Symbol.prototype.description`

## 描述

```javascript
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

Symbol('foo') === Symbol('foo'); // false

var sym = new Symbol(); // TypeError
```

### 全局共享的 Symbol

要想使用(创建)全局作用域的 Symbol 可以使用下面两个方法:

**`Symbol.for(key)`**

根据给定的键 `key` (字符串)在全局注册表中寻找,找到则返回,没有则新建并返回

```javascript
Symbol.for('bar') === Symbol.for('bar'); //true
```

**`Symbol.keyFor(sym);`**

获取 `symbol` 注册表中与某个 `symbol` 关联的键。找到该`symbol`则返回其 key,否则返货`undefined`

```javascript
var globalSym = Symbol.for('foo');
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol('foo');
Symbol.keyFor(localSym); //undefined
```

### 在对象中查找 Symbol 属性

[Object.getOwnPropertySymbols()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)方法返回一个给定对象自身的所有 Symbol 属性的数组。注意,初始对象没有 symbol 属性,如果你没有自己给,那返回的可能就是一个空数组.

### 熟悉又陌生的 Symbol

一些被广泛使用的内置方法或语法其实是 Symbol,只是我们不知道

例如:

`Symbol.iterator` 在迭代协议中有提到,`for...of`就依靠它

`Symbol.split` => `String.prototype.split()`

`Symbol.match` => `String.prototype.match()`

还有很多,就不一一举例(其实是我也不知还有多少)

## Symbol 类型转换

- 不能转 number
- `Object(sym) == sym`
- 不能用来做计算,比如加个字符串
- 不能`new String(sym)`

## Symbols 与 for...in 迭代 (伪私有属性)

`Symbols` 在 `for...in` 迭代中不可枚举。另外，[Object.getOwnPropertyNames()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) 不会返回 symbol 对象的属性，但是你能使用 [Object.getOwnPropertySymbols()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) 得到它们。

```javascript
var obj = {
  [Symbol('a')]: 'a',
  b: 'b',
  ['c']: 'c',
  [Symbol.for('d')]: 'd',
};

for (let i in obj) {
  console.log(i);
}
//log b
//log c

var sym = Object.getOwnPropertySymbols(obj);
//Array [ Symbol(a), Symbol(d) ]
```

由于`for...in`无法遍历出 symbol 就可以用 symbol 做函数的私有属性(伪,因为`Object.getOwnPropertySymbols()`能访问)

## Symbols 与 JSON.stringify()

```javascript
JSON.stringify({ [Symbol('foo')]: 'foo' });
// "{}"
JSON.stringify({ foo: Symbol('foo') });
// "{}"
```

详情见[JSON.stringify()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
