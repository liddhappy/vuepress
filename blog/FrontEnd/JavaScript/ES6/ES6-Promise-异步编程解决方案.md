---
title: ES6 Promise 异步编程解决方案
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2020-01-15 11:06:55
---

## 含义

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象。

### 特点

Promise 有三种状态: pending (进行中) , fulfilled(已成功) 和 rejected (已失败)

其状态只会改变一次,由进行到成功和进行到失败两者中的一种,改变后就会保持

## 基本用法

Promise 是一个构造函数

需要接受一个函数作为参数,这个函数有两个参数,两个参数分别为`resolve`和`reject`,它们是函数,引擎提供的内置函数.

`resolve`在异步操作成功后调用,并将操作结果作为参数  
`reject`失败时将失败信息作为参数传入

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

Promise 实例生成后可用`then`方法对`resolve`和`reject`两个状态进行处理,如下:

```javascript
promise.then(
  function(value) {
    // 成功
  },
  function(error) {
    // 失败
  }
);
```

## Promise.prototype.then()

为 Promise 实例添加状态改变时的回调函数。前面说过，`then`方法的第一个参数是`resolved`状态的回调函数，第二个参数（可选）是`rejected`状态的回调函数。

then 方法返回的是一个新的 Promise 实例（注意，不是原来那个 Promise 实例）。因此可以采用链式写法，即 then 方法后面再调用另一个 then 方法。

```javascript
new Promise((resolve) => {
  //模拟数据请求
  const data = {
    name: 'Promise',
  };
  setTimeout(() => {
    resolve(data);
  }, 1000);
})
  .then((data) => {
    //模拟数据处理
    console.log('第一次处理', data.name);
    console.log();
    return new Promise((resolve) => {
      setTimeout(
        () => {
          //模拟数据请求
          resolve((data.name += '大法'));
        },
        2000,
        data
      );
    });
  })
  .then((name) => {
    //模拟数据处理
    console.log('第二次处理', name);
  });
```

上面的代码和下面的结果是一样的,但是明显用 Promise 复杂得多,为啥还用呢?  
观察两个代码可以发现,上面的处理代码写在`then`里,通过链式编程,不管有多少个`then`,代码始终在外层,方便管理和维护  
下面的多套用两层就已经分不清结构了

```javascript
//数据请求
const data = {
  name: 'Promise',
};
setTimeout(() => {
  //数据处理
  console.log('第一次处理', data.name);
  //数据请求
  data.name += '大法';
  setTimeout(() => {
    //数据处理
    console.log('第二次处理', data.name);
  }, 2000);
}, 1000);
```

当然 then 默认返回一个 Promise 对象

## Promise.prototype.catch()

`Promise.prototype.catch`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

```javascript
getJSON('/posts.json')
  .then(function(posts) {
    // ...
  })
  .catch(function(error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('发生错误！', error);
  });
```

手动抛出一个错误测试一下

```javascript
const promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});
promise.catch(function(error) {
  console.error(error);
});
// Error: test
```

前面说过 Promise 的状态一旦改变就会保持,看看下面的例子:
错误是不会影响已经变成`resolve`的 Promise

```javascript
const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');
});
promise
  .then(function(value) {
    console.log(value);
  })
  .catch(function(error) {
    console.log(error);
  });
// ok
```

错误处理具有"冒泡"性质,前面的错误最终都会被 catch 捕获

Promise 中的错误如果没有被 catch 捕获则传到最外层代码,并报错,但是不会影响后续代码执行,简单说就是 promise 能够吃掉错误

catch 返回一个 Promise 对象,后面还能接上 then 或者 catch

## Promise.prototype.finally()

finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

到这里怎么感觉回到了 JS 的异常处理去了

```javascript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```

```javascript
promise.finally(() => {
  // 语句
});

// 等同于
promise.then(
  (result) => {
    // 语句
    return result;
  },
  (error) => {
    // 语句
    throw error;
  }
);
```

自己实现一个 finally

```javascript
Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
    (value) => P.resolve(callback()).then(() => value),
    (reason) =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};
```

## Promise.all()

Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例

```javascript
const p = Promise.all([p1, p2, p3]);
```

all 接受一个可迭代对象,其值应该是 Promise 实例(不是也行,反正他也不处理它)

p 的状态与 p1,p2,p3...有关

(1) 全部成功,p 变为成功,此时全部的返回值组成数组传给 p 的回调函数  
(2) promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。  
(3) 或参数中不包含 promise 时回调完成（resolve）

## Promise.race()

用法和 all 一样  
不同在于: race 只会接受第一个返回的结果(无论成功失败),并保持不再改变

```javascript
const p = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('哈哈');
      // reject(new Error('哈哈返回一个错误'));
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('卧槽');
      reject(new Error('卧槽这是个错误'));
    }, 1000);
  }),
]);

p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});
```

## 未完待续
