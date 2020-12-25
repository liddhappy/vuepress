---
title: ES6 Map WeakMap
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2020-01-13 15:28:47
---

## Map 语法

Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

```javascript
new Map([iterable]);
```

**Iterable** 可以是一个数组(二维数组)或者其他 iterable 对象，其元素为键值对(两个元素的数组，例如: `[[ 1, 'one' ],[ 2, 'two' ]]`。 每个键值对都会添加到新的 Map。

## Map 简述

使用`for...of`迭代后返回形式为`[key,value]`的数组

### 键/值的相等

除了 ie11,其他新浏览器支持最新标准`-0`和`+0`相等  
`NaN`是相等的,其他的都按照 `===` 判断

### Map 与 Object 区别

Map 从多方面都是和 Object 一样,区别有以下几点:

- Object 的键只能是`字符串`或者`Symbols`,而 Map 可以是任意
- Map 的键是有序的,根据插入顺序决定
- size 能获取键值对个数,但是 Object 只能手动计算
- Object 都有自己的原型，Map 原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。例如:键名设置 toString 会变成函数
- Map 在涉及频繁增删键值对的场景下会有些性能优势。

## Map.prototype 属性

### size

返回值个数

### constructor

返回构造函数,默认 Map

## Map.prototype 方法

## get(key)

返回键对应的值，如果不存在，则返回 undefined。

## set(key, value)

设置 Map 对象中键的值。返回该 Map 对象。

### clear()

移除所有键值对

### delete(value)

删除某个元素,返回 true 或者 false

### entries()

返回一个新的`Iterator`对象，它按插入顺序包含了 Map 对象中每个元素的`[key, value]`数组。

### forEach(callback[, thisArg])

按插入顺序，为 Map 对象里的每一键值对调用一次 callbackFn 函数。如果为 forEach 提供了 thisArg，它将在每次回调中作为 this 值。参考 Array 和 Set 的 forEach();

### has(value)

返回布尔,Map 中是否存在该值

### values()

返回一个新的迭代器对象，该对象包含 Map 对象中的按插入顺序排列的所有元素的值。

### key()

同 value(),本来是返回元素的 key,但 Map 的 `key = value`,所以效果和 value 一样

### Map.prototype[@@iterator]()

```javascript
var MapIter = myMap[Symbol.iterator]();
```

返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的`[key, value]`数组。

## WeakMap

WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。**其键必须是对象**，而值可以是任意的。

```javascript
new WeakMap([iterable]);
```

**Iterable** 是一个数组（二元数组）或者其他可迭代的且其元素是键值对的对象。每个键值对会被加到新的 WeakMap 里。

```javascript
var wm = new WeakMap();
var foo = {};

wm.set(foo, '值');

foo = null;

wm.has(foo); //false
```

### WeakMap.prototype 方法

只有`delete()`,`get()`,`has()`,`set()`
