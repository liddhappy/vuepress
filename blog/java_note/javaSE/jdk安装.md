---
title: JDK安装
date: 2020-11-21
categories:
  - JavaSE
tags:
  - Java
---

## 一.jdk 下载链接

https://www.oracle.com/java/technologies/javase-downloads.html

下载 jdk。

## 二.安装 jdk

### 1.按照流程一一安装就行了。

### 2.检验 java 是否安装好

window 键+R 输入 cmd

在操作命令符输入 Java -version

安装完 jdk 不一定 javac 就能执行,需要配置环境变量。

**配置环境变量**

1. CLASSPATH 是什么？它的作用是什么？

它是 javac 编译器的一个环境变量。它的作用与 import、package 关键字有关。当你写下 improt java.util.时，编译器面对 import 关键字时，就知道你要引入 java.util 这个 package 中的类；

2. PATH 环境变量

作用是指定命令搜索路径，在命令行下面执行命令如 javac 编译 java 程序时，它会到 PATH 变量所指定的路径中查找看是否能找到相应的命令程序。

3. CLASSPATH 环境变量

作用是指定类搜索路径，要使用已经编写好的类，前提当然是能够找到它们了，JVM 就是通过 CLASSPATH 来寻找类的。

4. 配置 JAVA_HOME Path CLASSPATH

JAVA_HOME

```
C:\Program Files\Java\jdk1.8.0_251
```

Path

```
;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
```

CLASSPATH

```
.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
```

最后在命令操作符输入 javac 指令确定环境变量是否成功。
