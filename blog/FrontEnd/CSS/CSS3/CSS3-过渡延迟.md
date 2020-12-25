---
title: CSS3 过渡延迟(未完成)
tags:
  - CSS3
  - CSS
categories:
  - FrontEnd
date: 2019-10-20 22:30:06
---

## 汇总

| 属性名                                                                                                      | 简介                                       | 值                                                                                          |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`transition-property`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property)               | 指定哪个或哪些 CSS 属性用于过渡。          | none\|all 或属性名#                                                                         |
| [`transition-duration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration)               | 指定过渡的时长。                           | #                                                                                           |
| [`transition-timing-function`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) | 定义属性值怎么变化。                       | linear\|ease\|ease-in\|ease-in-out\|ease-out\|step-start\|step-end\|steps()\|cubic-bezier() |
| [`transition-delay`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay)                     | 属性开始变化时与过渡开始发生时之间的时长。 | #                                                                                           |
| transition                                                                                                  | 简写属性                                   | `<property>` `<duration>` `<timing-function>` `<delay>`                                     |

## 过渡属性

哪些属性能够过渡

https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animated_properties

## 过渡效果

`transition-property`
用于设置哪些属性应用过渡效果。

- `none`没有过渡动画。
- `all`所有可被动画的属性都表现出过渡动画。
- `IDENT`属性名称。由小写字母 a 到 z，数字 0 到 9，下划线（\_）和破折号（-）。第一个非破折号字符不能是数字。同时，不能以两个破折号开头。

## 过渡速度

`transition-timing-function`
用于设置过渡效果的速度，可在 https://cubic-bezier.com 网站在线体验效果差异,也可以直接使用 chrome 的控制台调试。

## 延迟时间

`transition-delay`
用于设置延迟过渡的时间。

## 简写属性

`transition`
可以使用 transition 指令将过渡规则统一设置，需要注意以下几点。

- 必须设置过渡时间
- 延迟时间放在逗号或结束前

## 事件触发

`transitionend`

```JavaScript
el.addEventListener("transitionend", updateTransition, true);
```

## 当属性值列表长度不一致时

以`transition-property`为标准,过长截断,过短补齐,下面举个过短的例子

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

实际上

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```
