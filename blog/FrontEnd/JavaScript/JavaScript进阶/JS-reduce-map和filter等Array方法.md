---
title: 'reduce,map和filter等Array方法'
tags:
  - JavaScript
categories:
  - FrontEnd
date: 2019-12-21 22:44:16
---

## Array.prototype.filter() 元素筛选

filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

### 语法

```javascript
  var newArray = arr.filter(callback(element[, index[, array]])[, thisArg]);
```

#### 参数

- **callback**
  用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数：
  - **element**
    数组中当前正在处理的元素。
  - **index** [可选]
    正在处理的元素在数组中的索引。
  - **array** [可选]
    调用了 filter 的数组本身。
- **thisArg** [可选]
  执行 callback 时，用于 this 的值。

#### 返回值

一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

### 实例

```javascript
//筛选出小于等于30的
const arr = [1, 54, 12, 30, 82];
const callback = (elem) => {
  return elem <= 30;
};
console.log(arr.filter(callback));
//[1,12,30]
```

## Array.prototype.map() 迭代操作

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

### 语法

```javascript
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg]);
```

#### 参数

- **callback**
  生成新数组元素的函数，使用三个参数：
  - **currentValue**
    数组中当前正在处理的值。
  - **index** [可选]
    正在处理的元素在数组中的索引。
  - **array** [可选]
    调用了 `map` 的数组本身。
- **thisArg** [可选]
  执行 `callback` 时，用于 this 的值。

`callback` 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 `delete` 删除的索引则不会被调用。

#### 返回值

返回值回调函数结果构成的新数组

### 实例

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
```

## Array.prototype.reduce() 汇总计算

reduce() 方法对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值。

### 语法

```javascript
  arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]);
```

#### 参数

- **callback**
  执行数组中每个值 (如果没有提供 `initialValue`则第一个值除外)的函数，包含四个参数：
  - **accumulator**
    累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或`initialValue`（见于下方）。
  - **currentValue**
    数组中正在处理的元素。
  - **index** [可选]
    数组中正在处理的当前元素的索引。 如果提供了`initialValue`，则起始索引号为 0，否则从索引 1 起始。
  - **array** [可选]
    调用`reduce()`的数组
- **initialValue** [可选]
  作为第一次调用 `callback`函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 `reduce` 将报错。

#### 返回值

函数累计处理的结果

### 实例

**只有一个参数时**:

```javascript
[4, 3, 2, 1, 0].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
});
//10
```

没有传递初始值,初始情况如下:  
`accumulator`为数组第一个值`4`,`currentValue`为第二个值`3`,`currentIndex`为`1`;

**有两个参数时**:

```javascript
[4, 3, 2, 1, 0].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 10);
//20
```

传递初始值`initialValue = 10`,初始情况如下:  
`accumulator`为初始值`10`,`currentValue`为数组第一个值`4`,`currentIndex`为`0`;

## 结语

之所以把这三个方法放一起,是因为这三个方法经常可以一起使用使程序更加简单

Array 的方法还有很多

### Array 对象的方法看这里

[Array 对象 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
