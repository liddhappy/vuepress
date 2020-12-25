---
title: ES基础 类数组
tags:
  - JavaScript
categories:
  - FrontEnd
date: 2019-10-27 16:44:53
---

## 结构

- 属性为索引
- 必须要 length 属性
- 最好加上 push
- 有了 splice 看着就长得像数组了

```javascript
var obj = {
  '0': 1,
  '1': 2,
  '2': 3,
  '3': 4,
  length: 4,
  //"push" : Array.prototype.push,
  //"splice" : Array.prototype.splice
};
```

## 小 demo

**提示:push 的操作**

```javascript
Array.prototype.push = function(terget) {
  this[this.length] = terget;
  this.length++;
};
```

```javascript
var obj = {
  '2': 'a',
  '3': 'b',
  length: 2,
  push: Array.prototype.push,
};
obj.push('c');
obj.push('d');
```

结果:

```javascript
obj = {
  '2': 'c',
  '3': '4',
  length: 4,
  push: Array.prototype.push,
};
```

## Array.from()

Array.from() 方法从一个**类似数组或可迭代对象**创建一个新的，浅拷贝的数组实例。

```javascript
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]
```

### 语法

```javascript
Array.from(arrayLike[, mapFn[, thisArg]]) //对象(回调函数,回调函数的this对象)
```
