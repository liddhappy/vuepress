---
title: Vundle
date: 2020-11-21
categories:
  - Linux
tags:
  - Vim
---

## 一、下载 Vundle 插件：

Vundle 需要使用 git 命令来克隆安装，如果无 git 命令，可以使用`yum -y install git`安装 git 命令。有 git 命令的，直接克隆 Vundle：

```bash
mkdir -p ~/.vim/bundle
git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim12
```

## 二、编辑~/.vimrc 文件设置插件：

运行`vim ~/.vimrc`命令创建`.vimrc`文件，并在文件中添加如下内容，并保存退出：

```bash
syntax on
" tab宽度和缩进同样设置为4
set tabstop=4
set softtabstop=4
set shiftwidth=4

set nocompatible

" 你在此设置运行时路径
set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()

" 在这里面输入安装的插件
" Vundle 本身就是一个插件
Plugin 'gmarik/Vundle.vim'


"所有插件都应该在这一行之前
call vundle#end()

" filetype off
filetype plugin indent on
```

**提示：**如果使用粘贴方法复制到到.vimrc 发现格式混乱，可以在 shell 中使用`cat <<END> ~/.vimrc`命令，然后粘贴代码，在输出`END`回车即可。

## 三、安装 Vundle 插件：

`“.vimrc”`文件配置好后，打开 vim，在命令模式输入插件安装命令`:PluginInstall`命令，vim 就会自动安装“.vimrc”中配置的所有插件，直到 vim 底部出现“Done”安装完成。

## 四、Vundle 插件用法介绍：

下面命令在 vim 命令模式下运行。

| 命令           | 描述                                                                          |
| -------------- | ----------------------------------------------------------------------------- |
| :PluginInstall | 安装~/.vimrc 中”call vundle#begin()”到”call vundle#end()”范围内配置好的插件； |
| :PluginClean   | 清理已经从”call vundle#begin()”到”call vundle#end()”范围删除的插件。          |
| :PluginUpdate  | 更新插件                                                                      |
| :PluginSearch  | 搜索插件，如”:PluginSearch html”搜索包含 html 关键词的插件。                  |
