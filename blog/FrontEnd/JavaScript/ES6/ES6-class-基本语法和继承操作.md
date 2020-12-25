---
title: ES6 class 基本语法和继承操作
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2020-01-15 11:07:45
---

ECMAScript 2015 中引入的 JavaScript 类实质上是 JavaScript 现有的基于原型的继承的语法糖。类语法不会为 JavaScript 引入新的面向对象的继承模型。

类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter 和 setter 都在严格模式下执行。

## 类声明

例如声明一个 Rectangle 类

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

与函数不同的是**类声明不会提升**

## 类表达式

```javascript
let Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

和函数类似,上面是**命名表达式**,同样也可以写**匿名表达式**

## 类体结构

```javascript
class Rectangle {
  // constructor 构造函数
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method 方法
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10); //实例化

console.log(square.area); // 方法调用
// 100
```

## 静态方法

static 关键字用来定义一个类的一个静态方法。调用静态方法不需要实例化该类，但不能通过一个类实例调用静态方法。静态方法通常用于为一个应用程序创建工具函数。

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); //5倍根号2
```

## 方法的 this

将类中的方法保存出来执行时,由于执行在严格模式下,this 不是指向全局,而是返回 undefined;

## 实例属性

实例的属性必须定义在类的方法里：

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

静态的或原型的数据属性必须定义在类定义的外面。

```javascript
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

## 字段声明 (提案)

[详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Class_elements)

## 使用 extends 创建子类

extends 关键字在类声明或类表达式中用于创建一个类作为另一个类的一个子类。

```javascript
class ChildClass extends ParentClass { ... }
```

### 描述

extends 关键字用来创建一个普通类或者内建对象的子类。

继承的.prototype 必须是一个 Object 或者 null。

不仅继承.prototype 也继承静态属性

## super 关键字

```javascript
super([arguments]); //必须在constructor中使用
// 调用 父对象/父类 的构造函数

super.functionOnParent([arguments]);
```

super 调用父类的方法是,this 指向子类

## Object.getPrototypeOf()

Object.getPrototypeOf 方法可以用来从子类上获取父类。

```javascript
//ColorPoint的父类是Point
Object.getPrototypeOf(ColorPoint) === Point;
// true
```

## 类的 prototype 属性和**proto**属性

```javascript
class A {}

class B extends A {}

B.__proto__ === A; // true
B.prototype.__proto__ === A.prototype; // true
```

子类实例的`__proto__`属性的`__proto__`属性，指向父类实例的`__proto__`属性。也就是说，子类的原型的原型，是父类的原型。

## Mix-ins

抽象子类或者 mix-ins 是类的模板。 一个 ECMAScript 类只能有一个单超类，所以想要从工具类来多重继承的行为是不可能的。子类继承的只能是父类提供的功能性。因此，例如，从工具类的多重继承是不可能的。该功能必须由超类提供。

一个以超类作为输入的函数和一个继承该超类的子类作为输出可以用于在 ECMAScript 中实现混合：

```javascript
var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

使用 mix-ins 的类可以像下面这样写：

```javascript
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```
