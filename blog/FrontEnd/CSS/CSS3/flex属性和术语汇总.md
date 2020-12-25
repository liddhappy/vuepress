---
title: CSS3flex属性和术语汇总
date: 2019-07-24 16:14:06
categories:
  - FrontEnd
tags:
  - CSS3
---

## 术语表

| 中文     | 英文           |
| -------- | -------------- |
| 弹性盒子 | Flexbox        |
| 弹性容器 | Flex Container |
| 弹性项目 | Flex Item      |
| 主轴     | Main Axis      |
| 交叉轴   | Cross Axis     |
| 伸缩性   | Flex           |

## 属性

### 容器属性

| 属性           | 简介                     | 值                                             |
| -------------- | ------------------------ | ---------------------------------------------- |
| flex-direction | 决定主轴的方向           | row \| row-reverse \| column \| column-reverse |
| flex-wrap      | 一条轴线排不下，如何换行 | nowrap \| wrap \| wrap-reverse                 |
| flex-flow      | 以上属性的简写           | `<flex-direction>` \|\| `<flex-wrap>`              |

### 项目属性

| 属性        | 简介                                                          | 值                                                       |
| ----------- | ------------------------------------------------------------- | -------------------------------------------------------- |
| flex-basis  | 主轴方向上的初始大小,优先于 width/height,设置的是 content-box | 略                                                       |
| flex-shrink | 指定 flex 元素的收缩规则,默认宽度之和大于容器时发生           | number(默认 1)                                           |
| flex-grow   | 项目的放大比例(拉伸因子)                                      | number(默认 0)                                           |
| flex        | 以上的简写                                                    | none \| [ `<flex-grow>` `<flex-shrink>?` \|\| `<flex-basis>` ] |
| order       | 按照属性的值的增序进行布局(视觉上的)                          | integer                                                  |

## 对齐属性

### 容器属性

| 属性            | 简介                                       |
| --------------- | ------------------------------------------ |
| align-content   | 各项交叉轴方向的空白(只有一行不起作用)     |
| align-items     | 属性定义项目在交叉轴上如何对齐             |
| justify-content | 主轴项目之间的空格                         |
| place-content   | 简写`<align-content>` `<justify-content>?` |
| row-gap         | 行元素之间的间隙大小                       |
| column-gap      | 用来设置元素列之间的间隔                   |
| gap             | 简写 `<row-gap>` `<column-gap>?`           |

### 项目属性

| 属性         | 简介                 |
| ------------ | -------------------- |
| align-self   | 单独定义 align-items |
| justify-self | 草案中               |
