---
title: Docker介绍
date: 2020-11-27
categories:
  - Docker
tags:
  - Docker
---

## **虚拟机：虚拟化硬件**

虚拟机 Virtual Machine 指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。在实体计算机中能够完成的工作在虚拟机中都能够实现。

在计算机中创建虚拟机时，需要将实体机的部分硬盘和内存容量作为虚拟机的硬盘和内存容量。

每个虚拟机都有独立的 CMOS、硬盘和操作系统，可以像使用实体机一样对虚拟机进行操作。在容器技术之前，业界的网红是虚拟机。

虚拟机技术的代表，是 VMWare 和 OpenStack。

## **容器**

将操作系统层虚拟化，是一个标准的软件单元

**其特点如下：**

- 随处运行：容器可以将代码与配置文件和相关依赖库进行打包，从而确保在任何环境下的运行都是一致的。
- 高资源利用率：容器提供进程级的隔离，因此可以更加精细地设置 CPU 和内存的使用率，进而更好地利用服务器的计算资源。
- 快速扩展：每个容器都可作为单独的进程予以运行，并且可以共享底层操作系统的系统资源，这样一来可以加快容器的启动和停止效率。

**区别与联系：**

- 虚拟机虽然可以隔离出很多「子电脑」，但占用空间更大，启动更慢。虚拟机软件可能还要花钱，例如 VMWare。
- 容器技术不需要虚拟出整个操作系统，只需要虚拟一个小规模的环境，类似「沙箱」。
- 运行空间，虚拟机一般要几 GB 到 几十 GB 的空间，而容器只需要 MB 级甚至 KB 级。

| 特性       | 虚拟机                     | 容器              |
| ---------- | -------------------------- | ----------------- |
| 隔离级别   | 操作系统级                 | 进程              |
| 隔离策略   | Hypervisor（虚拟机监控器） | Cgroups(控制组群) |
| 系统资源   | 5~15%                      | 0~5%              |
| 启动时间   | 分钟级                     | 秒级              |
| 镜像存储   | GB~TB                      | KB~MB             |
| 集群规模   | 上百                       | 上万              |
| 高可用策略 | 备份、容灾、迁移           | 弹性、负载、动态  |

虚拟机属于虚拟化技术，而 Docker 这样的容器技术，属于轻量级的虚拟化。

与虚拟机相比，容器更轻量且速度更快，因为它利用了 Linux 底层操作系统在隔离的环境中运行。

虚拟机的 Hypervisor 创建了一个非常牢固的边界，以防止应用程序突破它，而容器的边界不那么强大。

## Docker介绍

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。

#### Docker 技术的三大核心概念，分别是：

- 镜像 Image
- 容器 Container
- 仓库 Repository

Docker 轻量级的原因是什么？相信你也会有这样的疑惑：为什么 Docker 启动快？如何做到和宿主机共享内核？

当我们请求 Docker 运行容器时，Docker 会在计算机上设置一个资源隔离的环境。

然后将打包的应用程序和关联的文件复制到 Namespace 内的文件系统中，此时环境的配置就完成了。之后 Docker 会执行我们预先指定的命令，运行应用程序。

镜像不包含任何动态数据，其内容在构建之后也不会被改变。

### **核心概念**

**核心概念如下：**

- Build，Ship and Run（搭建、运输、运行）。
- Build once，Run anywhere（一次搭建，处处运行）。
- Docker 本身并不是容器，它是创建容器的工具，是应用容器引擎。
- Docker 三大核心概念，分别是：`镜像 Image`，`容器 Container`、`仓库 Repository`。
- Docker 技术使用 Linux 内核和内核功能（例如 Cgroups 和 namespaces）来分隔进程，以便各进程相互独立运行。
- 由于 Namespace 和 Cgroups 功能仅在 Linux 上可用，因此容器无法在其他操作系统上运行。那么 Docker 如何在 macOS 或 Windows 上运行？Docker 实际上使用了一个技巧，并在非 Linux 操作系统上安装 Linux 虚拟机，然后在虚拟机内运行容器。
- 镜像是一个可执行包，其包含运行应用程序所需的代码、运行时、库、环境变量和配置文件，容器是镜像的运行时实例。

| 命令       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| FROM       | 基于哪个镜像来实现                                           |
| MAINTAINER | 镜像创建者                                                   |
| ENV        | 声明环境变量                                                 |
| RUN        | 执行命令                                                     |
| ADD        | 添加宿主主机文件到容器里，有需要解压得到文件会自动解压       |
| COPY       | 添加宿住机文件到容器里                                       |
| WORKDIR    | 工作目录                                                     |
| EXPOSE     | 容器内应用可使用的端口                                       |
| CMD        | 容器启动后所执行内，                                         |
| ENTRYPOINT | 与CMD功能相同，但需docker run 不会覆盖，如果需要可添加参数~entrypoint来覆盖 |
| VOLUME     | 数据卷，将宿主机的目录映射到容器中的目录                     |

