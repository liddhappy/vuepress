---
title: ES6 Set WeakSet
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2020-01-13 15:28:29
---

## Set 语法

```javascript
new Set([iterable]);
```

**iterable**
可迭代对

Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set 中的元素只会出现一次，即 Set 中的元素是唯一的。

Set 中没有 Array 一样的索引,其 key 是和 value 一样的

### 值相等

`-0`和`+0`应该是相等的  
尽管`NaN !== NaN` 但`NaN`被认为是相同的

## Set.prototype 属性

### size

返回值个数

### constructor

返回构造函数,默认 Set

## Set.prototype 方法

### add(value)

尾部添加一个元素,返回 Set 对象

### clear()

移除所有元素

### delete(value)

删除某个元素,返回 true 或者 false

### entries()

返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和 Map 对象保持相似， 每个值的键和值相等。

### forEach(callback[, thisArg])

callback 的参数 currentValue (当前元素), currentKey (当前元素),set (被操作的 Set)  
为了和其他集合的 forEach()方法保持一致,使用了三个参数,但是 Set 的前两个参数是等效的

### has(value)

返回布尔,Set 中是否存在该值

### values()

返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。

### key()

同 value(),本来是返回元素的 key,但 Set 的 `key = value`,所以效果和 value 一样

### Set.prototype[@@iterator]()

```javascript
var setIter = mySet[Symbol.iterator]();
```

返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。

## WeakSet

```javascript
new WeakSet([iterable]);
```

可迭代对象中的值必须是对象  
WeakSet 只能储存对象,不能有其他内容

## WeakSet 和 Set 的区别

- 与 Set 相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值。
- WeakSet 持弱引用：集合中对象的引用为弱引用。 如果没有其他的对 WeakSet 中对象的引用，那么这些对象会被当成垃圾回收掉。 这味着 WeakSet 中没有存储当前对象的列表。 正因为这样，WeakSet 是不可枚举的。

```javascript
var ws = new WeakSet();
var foo = {};
var bar = {};

ws.add(foo);
ws.add(bar);

foo = null;

ws.has(foo); //false
```

## WeakSet.prototype 方法

只有`add()`,`delete()`,`has()`
