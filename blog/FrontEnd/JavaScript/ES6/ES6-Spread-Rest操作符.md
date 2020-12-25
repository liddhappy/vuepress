---
title: ES6 Spread/Rest操作符
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2020-01-10 19:57:32
---

## Spread 展开

展开语法(Spread syntax), 可以在函数调用/数组构造时, 将数组表达式或者 string 在语法层面展开；还可以在构造字面量对象时, 将对象表达式按 key-value 的方式展开。(注: 字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)

### 语法

- 函数调用

```javascript
fun(...iterableObj); // 注:iterableObj 可迭代对象
```

- 字面量数组构造或字符串

```javascript
[...iterableObj, '4', ...'hello', 6];
```

- 构造字面量对象时,进行克隆或者属性拷贝(ECMAScript 2018 规范新增特性)

```javascript
let obj1 = { ...obj };
```

### 函数调用

将数组迭代为参数,之前只能使用`apply`方法,展开语法能够简化操作

```javascript
function myFunction(x, y, z) {
  return x + y + z;
}
var args = [0, 1, 2];
myFunction(...args);
//3
```

当函数使用 new 时就不能用`apply`,展开语法没这个问题

```javascript
var dateFields = [1970, 0, 1]; // 1970年1月1日
var d = new Date(...dateFields);
```

### 构造字面量数组

#### 直接使用

```javascript
var fruits = ['pear', 'apple'];
var meats = ['beef', 'pork', 'ham'];
var eat = [...fruits, 'banana', ...meats];
//[ "pear", "apple", "banana", "beef", "pork", "ham" ]
```

#### 拷贝

```javascript
var arr = [1, 2, 3];
var arr2 = [...arr];
```

#### 链接

```javascript
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];
```

### 构造字面量对象

其行为是, 将已有对象的所有可枚举(enumerable)属性拷贝到新构造的对象中.

```javascript
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: "baz", x: 42, y: 13 }
```

### 注意

- 函数调用时数组长度不能比最大参数长度大
- 数组和函数调用时,只能对可迭代对象用

## Rest 剩余语法(剩余参数)

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

### 语法

```javascript
function(a, b, ...theArgs) {
  // ...
}
```

剩余参数必须是最后一个,a,b 对应参数后,剩余的所有参数都装入 theArgs 数组中

```javascript
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
```

### 解构剩余参数

把解构和剩余参数合起来用(实际上我不知哪里能用到)

```javascript
function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // NaN (b and c are undefined)
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 (the fourth parameter is not destructured)
```
