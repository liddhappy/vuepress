---
title: Docker注意事项
date: 2020-11-27
categories:
  - Docker
tags:
  - Docker
---
Docker CE 即社区免费版，Docker EE 即企业版，强调安全，但需付费使用。

Docker-ce提供四种版本： stable,edge,test,nightly 。 从Docker 1.13版以后，新版本号成发发布年份和月份为准。例：18.09.0

**Docker-ce版本分为静态链接与动态链接两种：**

1.   静态链接版本不依赖操作系统库，所有包较大。 （windows 和mac目前只提供静态链接版）
2.   动态链接版可以执行程序小一些，与操作系统库相关，只能在某种操作系统的具体发行版下安装。centos,debian,fedora,raspbian,ubuntu五类发版。

**Docker支持以下的CentOS版本：**

- CentOS 7 (64-bit)
- CentOS 6.5 (64-bit) 或更高的版本

Docker 运行在 CentOS 7 上，要求系统为64位、**系统内核版本为 3.10 以上**。

Docker 运行在 CentOS-6.5 或更高的版本的 CentOS 上，要求系统为64位、系统内核版本为 2.6.32-431 或者更高版本。

​       内核编译时需要激活namespace,CGgroup,netfilter,veth等特性，还对iptablest等工具版有依赖要求。

 验证当前环境是否满足Docker 运行要求