---
title: MySQL_入门
date: 2020-11-21
categories:
  - MySQL
tags:
  - MySQL
---

MySQL 登录和退出

方式一：

通过 mysql 自带的客户端只限于 root 用户

方式二：

通过 windows DOC

启动服务

```sql
net  start mysql
```

安装 MySQL

```
mysqld --install
```

初始化 MySQL

```sql
mysqld --initialize --console
```

修改密码

```sql
alter user '用户'@'localhost' identified by 'root';
```

登录：

```sql
mysql( -h主机号 -p端口号) -u 用户名 -p 密码
```

常见登录：

```sql
mysql -u root -p
```

MySQL 常见命令

1. 查看当前所有的数据库

```sql
show databases;
```

2. 打开指定库

```sql
use 库名;
```

3. 查看当前库的所有表

```sql
show tables;
```

4. 查看其他库的所有表

```sql
show tables from 库名;
```

5. 创建表

````sql
create table 表名(
列名 列类型,
列名 列类型,
``` ```);
````

6. 查看表结构

```sql
desc 表名;
```

7.查看服务器版本

```sql
//方式一：登录到mysql服务端
select version();
//方式二：windows doc
mysql --version
或mysql -V
```

mysql 的语法规范

1. 不区分大小写 ，但建议关键词大写，表名，列名小写
2. 每条命令用分号; 或者\g 结尾
3. 每条命令根据需要，可以进行缩进或者换行
4. 注释

- 单行注释 #注释文字
- 单行注释 -- 注释文字 注意一定要有空格
- 多行注释 /_ 注释文字 _/
