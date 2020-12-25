---
title: vim编辑器与shell命令脚本
date: 2020-11-21
categories:
  - Linux
tags:
  - Linux
---

## vim

Vim 之所以能得到广大厂商与用户的认可，原因在于 Vim 编辑器中设置了三种模式—命令模式、末行模式和编辑模式，每种模式分别又支持多种不同的命令快捷键，这大大提高了工作效率，而且用户在习惯之后也会觉得相当顺手。要想高效率地操作文本，就必须先搞清这三种模式的操作区别以及模式之间的切换方法

> 命令模式：控制光标移动，可对文本进行复制、粘贴、删除和查找等工作。
>
> 输入模式：正常的文本录入。
>
> 末行模式：保存或退出文档，以及设置编辑环境。

![Vim编辑器与Shell命令脚本](.\picture\vim不同模式间的切换.png)

表 4-1 Vim 中常用的命令

| 命令   | 作用                                               |
| ------ | -------------------------------------------------- |
| dd     | 删除（剪切）光标所在整行                           |
| 5dd    | 删除（剪切）从光标处开始的 5 行                    |
| yy     | 复制光标所在整行                                   |
| 5yy    | 复制从光标处开始的 5 行                            |
| n      | 显示搜索命令定位到的下一个字符串                   |
| N      | 显示搜索命令定位到的上一个字符串                   |
| u      | 撤销上一步的操作                                   |
| Ctrl+R | 恢复撤销                                           |
| p      | 将之前删除（dd）或复制（yy）过的数据粘贴到光标后面 |

表 4-2 末行模式中可用的命令

| 命令          | 作用                                    |
| ------------- | --------------------------------------- |
| :w            | 保存                                    |
| :q            | 退出                                    |
| :q!           | 强制退出（放弃对文档的修改内容）        |
| :wq!          | 强制保存退出                            |
| :set nu       | 显示行号                                |
| :set nonu     | 不显示行号                              |
| :命令         | 执行该命令                              |
| :整数         | 跳转到该行                              |
| :s/one/two    | 将当前光标所在行的第一个 one 替换成 two |
| :s/one/two/g  | 将当前光标所在行的所有 one 替换成 two   |
| :%s/one/two/g | 将全文中的所有 one 替换成 two           |
| ?字符串       | 在文本中从下至上搜索该字符串            |
| /字符串       | 在文本中从上至下搜索该字符串            |

## shell

可以将 Shell 终端解释器当作人与计算机硬件之间的“翻译官”，它作为用户与 Linux 系统内部的通信媒介，除了能够支持各种变量与参数外，还提供了诸如循环、分支等高级编程语言才有的控制结构特性。要想正确使用 Shell 中的这些功能特性，准确下达命令尤为重要。Shell 脚本命令的工作方式有两种：交互式和批处理。

**交互式（Interactive）：用户每输入一条命令就立即执行。**

**批处理（Batch）：由用户事先编写好一个完整的 Shell 脚本，Shell 会一次性执行脚本中诸多的命令。**

## 接受参数

为了让 Shell 脚本程序更好地满足用户的一些实时需求，以便灵活完成工作，必须要让脚本程序能够像之前执行命令时那样，接收用户输入的参数。

$0对应的是当前Shell脚本程序的名称，$#对应的是总共有几个参数，$*对应的是所有位置的参数值，$?对应的是显示上一次命令的执行返回值，而$1、$2、\$3……则分别对应着第 N 个位置的参数值，

example.sh 里面内容

```
#!/bin/bash
echo "当前脚本名称为$0"
echo "总共有$#个参数，分别是$*。"
echo "第1个参数为$1，第5个为$5。"
```

输出结果：

![接受参数](.\picture/接受参数.png)

## 判断用户参数

按照测试对象来划分，条件测试语句可以分为 4 种：

> 文件测试语句；
>
> 逻辑测试语句；
>
> 整数值比较语句；
>
> 字符串比较语句。

表 4-3 文件测试所用的参数

| 操作符 | 作用                       |
| ------ | -------------------------- |
| -d     | 测试文件是否为目录类型     |
| -e     | 测试文件是否存在           |
| -f     | 判断是否为一般文件         |
| -r     | 测试当前用户是否有权限读取 |
| -w     | 测试当前用户是否有权限写入 |
| -x     | 测试当前用户是否有权限执行 |

**注意：格式的使用**

**空格[空格 -参数(空格)文件名空格]**

下面使用文件测试语句来判断/etc/fstab 是否为一个目录类型的文件，然后通过 Shell 解释器的内设\$?变量显示上一条命令执行后的返回值。如果返回值为 0，则目录存在；如果返回值为非零的值，则意味着目录不存在：

```
[root@linuxprobe ~]# [ -d /etc/fstab ]
[root@linuxprobe ~]# echo $?
1
```

再使用文件测试语句来判断/etc/fstab 是否为一般文件，如果返回值为 0，则代表文件存在，且为一般文件：

```
[root@linuxprobe ~]# [ -f /etc/fstab ]
[root@linuxprobe ~]# echo $?
0
```

逻辑语句用于对测试结果进行逻辑分析，根据测试结果可实现不同的效果。例如在 Shell 终端中逻辑“与”的运算符号是&&，它表示当前面的命令执行成功后才会执行它后面的命令，因此可以用来判断/dev/cdrom 文件是否存在，若存在则输出 Exist 字样。

```
[root@linuxprobe ~]# [ -e /dev/cdrom ] && echo "Exist"
Exist
```

除了逻辑“与”外，还有逻辑“或”，它在 Linux 系统中的运算符号为||，表示当前面的命令执行失败后才会执行它后面的命令，因此可以用来结合系统环境变量 USER 来判断当前登录的用户是否为非管理员身份：

```
[root@linuxprobe ~]# echo $USER
root
[root@linuxprobe ~]# [ $USER = root ] || echo "user"
[root@linuxprobe ~]# su - linuxprobe
[linuxprobe@linuxprobe ~]$ [ $USER = root ] || echo "user"
user
```

第三种逻辑语句是“非”，在 Linux 系统中的运算符号是一个叹号（！），它表示把条件测试中的判断结果取相反值。也就是说，如果原本测试的结果是正确的，则将其变成错误的；原本测试错误的结果则将其变成正确的。

我们现在切换回到 root 管理员身份，再判断当前用户是否为一个非管理员的用户。由于判断结果因为两次否定而变成正确，因此会正常地输出预设信息：

```
[linuxprobe@linuxprobe ~]$ exit
logout
[root@linuxprobe root]# [ $USER != root ] || echo "administrator"
administrator
```

表 4-4 可用的整数比较运算符

| 操作符 | 作用           |
| ------ | -------------- |
| -eq    | 是否等于       |
| -ne    | 是否不等于     |
| -gt    | 是否大于       |
| -lt    | 是否小于       |
| -le    | 是否等于或小于 |
| -ge    | 是否大于或等于 |

```
[root@linuxprobe ~]# [ -z $String ]
[root@linuxprobe ~]# echo $?
0
```

表 4-5 常见的字符串比较运算符

操作符 作用
= 比较字符串内容是否相同
!= 比较字符串内容是否不同
-z 判断字符串内容是否为空

```
[root@linuxprobe ~]# echo $LANG
en_US.UTF-8
[root@linuxprobe ~]# [ $LANG != "en.US" ] && echo "Not en.US"
Not en.US
```

## 流程控制语句

### if 条件测试语句

**if 条件语句的单分支结构由 if、then、fi 关键词组成**，而且只在条件成立后才执行预设的命令，相当于口语的“如果……那么……”。单分支的 if 语句属于最简单的一种条件判断结构，语法格式如图 4-17 所示。

![第4章 Vim编辑器与Shell命令脚本。第4章 Vim编辑器与Shell命令脚本。](.\picture/单分支结构-2.png)

下面使用单分支的 if 条件语句来判断/media/cdrom 文件是否存在，若存在就结束条件判断和整个 Shell 脚本，反之则去创建这个目录：

```
[root@linuxprobe ~]# vim mkcdrom.sh
#!/bin/bash
DIR="/media/cdrom"
if [ ! -e $DIR ]
then
mkdir -p $DIR
fi
```

**if 条件语句的双分支结构由 if、then、else、fi 关键词组成**，它进行一次条件匹配判断，如果与条件匹配，则去执行相应的预设命令；反之则去执行不匹配时的预设命令，相当于口语的“如果……那么……或者……那么……”。if 条件语句的双分支结构也是一种很简单的判断结构，语法格式如图所示

### ![第4章 Vim编辑器与Shell命令脚本。第4章 Vim编辑器与Shell命令脚本。](.\picture/双分支结构-1.png)

下面使用双分支的 if 条件语句来验证某台主机是否在线，然后根据返回值的结果，要么显示主机在线信息，要么显示主机不在线信息。而**Linux 系统中的 ping 命令不像 Windows 一样尝试 4 次就结束**，因此为了避免用户等待时间过长，需要通过*-c 参数来规定尝试的次数，并使用-i 参数定义每个数据包的发送间隔，以及使用-W 参数定义等待超时时间。*

```
[root@linuxprobe ~]# vim chkhost.sh
#!/bin/bash
ping -c 3 -i 0.2 -W 3 $1 &> /dev/null
if [ $? -eq 0 ]
then
echo "Host $1 is On-line."
else
echo "Host $1 is Off-line."
fi
```

**if 条件语句的多分支结构由 if、then、else、elif、fi 关键词组成**，它进行多次条件匹配判断，这多次判断中的任何一项在匹配成功后都会执行相应的预设命令，相当于口语的“如果……那么……如果……那么……”。

```
[root@linuxprobe ~]# vim chkscore.sh
#!/bin/bash
read -p "Enter your score（0-100）：" GRADE
if [ $GRADE -ge 85 ] && [ $GRADE -le 100 ] ;
then
echo "$GRADE is Excellent"
elif [ $GRADE -ge 70 ] && [ $GRADE -le 84 ] ;
then
echo "$GRADE is Pass"
else
echo "$GRADE is Fail"
fi
[root@linuxprobe ~]# bash chkscore.sh
Enter your score（0-100）：88
88 is Excellent
[root@linuxprobe ~]# bash chkscore.sh
Enter your score（0-100）：80
80 is Pass
```

### for 条件循环语句

**for 循环语句允许脚本一次性读取多个信息，然后逐一对信息进行操作处理，当要处理的数据有范围时，使用 for 循环语句再适合不过了。**for 循环语句的语法格式如图所示

![第4章 Vim编辑器与Shell命令脚本。第4章 Vim编辑器与Shell命令脚本。](.\picture/for条件语句-1.png)

**/dev/null 是一个被称作 Linux 黑洞的文件**，把输出信息重定向到这个文件等同于删除数据（类似于没有回收功能的垃圾箱），可以让用户的屏幕窗口保持简洁。

```
[root@linuxprobe ~]# vim Example.sh
#!/bin/bash
read -p "Enter The Users Password : " PASSWD
for UNAME in `cat users.txt`
do
id $UNAME &> /dev/null
if [ $? -eq 0 ]
then
echo "Already exists"
else
useradd $UNAME &> /dev/null
echo "$PASSWD" | passwd --stdin $UNAME &> /dev/null
if [ $? -eq 0 ]
then
echo "$UNAME , Create success"
else
echo "$UNAME , Create failure"
fi
fi
done
```

在 Linux 系统中，**/etc/passwd 是用来保存用户账户信息的文件**。如果想确认这个脚本是否成功创建了用户账户，可以打开这个文件，看其中是否有这些新创建的用户信息。

```
[root@linuxprobe ~]# bash Example.sh
Enter The Users Password : linuxprobe
andy , Create success
barry , Create success
carl , Create success
duke , Create success
eric , Create success
george , Create success
[root@linuxprobe ~]# tail -6 /etc/passwd
andy:x:1001:1001::/home/andy:/bin/bash
barry:x:1002:1002::/home/barry:/bin/bash
carl:x:1003:1003::/home/carl:/bin/bash
duke:x:1004:1004::/home/duke:/bin/bash
eric:x:1005:1005::/home/eric:/bin/bash
george:x:1006:1006::/home/george:/bin/bash
```

### while 条件循环语句

while 条件循环语句是一种让脚本根据某些条件来重复执行命令的语句，它的循环结构往往在执行前并不确定最终执行的次数，完全不同于 for 循环语句中有目标、有范围的使用场景。**while 循环语句通过判断条件测试的真假来决定是否继续执行命令，若条件为真就继续执行，为假就结束循环。**while 语句的语法格式如图所示![第4章 Vim编辑器与Shell命令脚本。第4章 Vim编辑器与Shell命令脚本。](.\picture/while条件语句-1.png)

该脚本使用\$RANDOM 变量来调取出一个随机的数值（范围为 0 ～ 32767），将这个随机数对 1000 进行取余操作，并使用 expr 命令取得其结果，再用这个数值与用户通过 read 命令输入的数值进行比较判断。这个判断语句分为三种情况，分别是判断用户输入的数值是等于、大于还是小于使用 expr 命令取得的数值。

```
[root@linuxprobe ~]# vim Guess.sh
#!/bin/bash
PRICE=$(expr $RANDOM % 1000)
TIMES=0
echo "商品实际价格为0-999之间，猜猜看是多少？"
while true
do
read -p "请输入您猜测的价格数目：" INT
let TIMES++
if [ $INT -eq $PRICE ] ; then
echo "恭喜您答对了，实际价格是 $PRICE"
echo "您总共猜测了 $TIMES 次"
exit 0
elif [ $INT -gt $PRICE ] ; then
echo "太高了！"
else
echo "太低了！"
fi
done
```

### case 条件测试语句

case 语句是在多个范围内匹配数据，若匹配成功则执行相关命令并结束整个条件测试；而如果数据不在所列出的范围内，则会去执行星号（\*）中所定义的默认命令。case 语句的语法结构如图 4-22 所示。

![第4章 Vim编辑器与Shell命令脚本。第4章 Vim编辑器与Shell命令脚本。](.\picture/case条件语句-1.png)

我们编写脚本 Checkkeys.sh，提示用户输入一个字符并将其赋值给变量 KEY，然后根据变量 KEY 的值向用户显示其值是字母、数字还是其他字符。

```
[root@linuxprobe ~]# vim Checkkeys.sh
#!/bin/bash
read -p "请输入一个字符，并按Enter键确认：" KEY
case "$KEY" in
[a-z]|[A-Z])
echo "您输入的是 字母。"
;;
[0-9])
echo "您输入的是 数字。"
;;
*)
echo "您输入的是 空格、功能键或其他控制字符。"
esac
[root@linuxprobe ~]# bash Checkkeys.sh
请输入一个字符，并按Enter键确认：6
您输入的是 数字。
[root@linuxprobe ~]# bash Checkkeys.sh
请输入一个字符，并按Enter键确认：p
您输入的是 字母。
[root@linuxprobe ~]# bash Checkkeys.sh
请输入一个字符，并按Enter键确认：^[[15~
您输入的是 空格、功能键或其他控制字符。
```

### 计划任务服务程序

计划任务分为一次性计划任务与长期性计划任务，大家可以按照如下方式理解。

> 一次性计划任务：今晚 11 点 30 分开启网站服务。
>
> 长期性计划任务：每周一的凌晨 3 点 25 分把/home/wwwroot 目录打包备份为 backup.tar.gz。

一次性计划任务只执行一次，一般用于满足临时的工作需求。我们可以用 at 命令实现这种功能，只需要写成“at 时间”的形式就可以。如果想要查看已设置好但还未执行的一次性计划任务，可以使用“at -l”命令；要想将其删除，可以用“atrm 任务序号”。在使用 at 命令来设置一次性计划任务时，默认采用的是交互式方法。例如，使用下述命令将系统设置为在今晚 23:30 分自动重启网站服务。

```
[root@linuxprobe ~]# at 23:30
at > systemctl restart httpd
at > 此处请同时按下Ctrl+d来结束编写计划任务
job 3 at Mon Apr 27 23:30:00 2015
[root@linuxprobe ~]# at -l
3 Mon Apr 27 23:30:00 2016 a root
```

可以把前面学习的管道符（任意门）放到两条命令之间，让 at 命令接收前面 echo 命令的输出信息，以达到通过非交互式的方式创建计划一次性任务的目的。

```
[root@linuxprobe ~]# echo "systemctl restart httpd" | at 23:30
job 4 at Mon Apr 27 23:30:00 2015
[root@linuxprobe ~]# at -l
3 Mon Apr 27 23:30:00 2016 a root
4 Mon Apr 27 23:30:00 2016 a root
```

如果我们不小心设置了两个一次性计划任务，可以使用下面的命令轻松删除其中一个：

```
[root@linuxprobe ~]# atrm 3
[root@linuxprobe ~]# at -l
4 Mon Apr 27 23:30:00 2016 a root
```

如果我们希望 Linux 系统能够周期性地、有规律地执行某些具体的任务，那么 Linux 系统中默认启用的 crond 服务简直再适合不过了。**创建、编辑计划任务的命令为“crontab -e”，查看当前计划任务的命令为“crontab -l”，删除某条计划任务的命令为“crontab -r”。**另外，如果您是以**管理员的身份登录的系统，还可以在 crontab 命令中加上-u 参数来编辑他人的计划任务。**

在正式部署计划任务前，**口诀“分、时、日、月、星期 命令”。**这是使用 crond 服务设置任务的参数格式（其格式见表 4-6）。需要注意的是，如果有些字段没有设置，则需要使用星号（**\***）占位，如图所示。![第4章 Vim编辑器与Shell命令脚本。第4章 Vim编辑器与Shell命令脚本。](.\picture/cron计划任务的参数.png)

表 4-6 使用 crond 设置任务的参数字段说明

| 字段 | 说明                                             |
| ---- | ------------------------------------------------ |
| 分钟 | 取值为 0 ～ 59 的整数                            |
| 小时 | 取值为 0 ～ 23 的任意整数                        |
| 日期 | 取值为 1 ～ 31 的任意整数                        |
| 月份 | 取值为 1 ～ 12 的任意整数                        |
| 星期 | 取值为 0 ～ 7 的任意整数，其中 0 与 7 均为星期日 |
| 命令 | 要执行的命令或程序脚本                           |

假设在每周一、三、五的凌晨 3 点 25 分，都需要使用 tar 命令把某个网站的数据目录进行打包处理，使其作为一个备份文件。我们可以使用 crontab -e 命令来创建计划任务。为自己创建计划任务无需使用-u 参数，具体的实现效果的参数如 crontab -l 命令结果所示：

```
[root@linuxprobe ~]# crontab -e
no crontab for root - using an empty one
crontab: installing new crontab
[root@linuxprobe ~]# crontab -l
25 3 * * 1,3,5 /usr/bin/tar -czvf backup.tar.gz /home/wwwroot
```

需要说明的是，除了用逗号（,）来分别表示多个时间段，例如“8,9,12”表示 8 月、9 月和 12 月。还可以用减号（-）来表示一段连续的时间周期（例如字段“日”的取值为“12-15”，则表示每月的 12 ～ 15 日）。以及用除号（/）表示执行任务的间隔时间（例如“\*/2”表示每隔 2 分钟执行一次任务）。

如果在 crond 服务中需要同时包含多条计划任务的命令语句，应每行仅写一条。例如我们再添加一条计划任务，它的功能是每周一至周五的凌晨 1 点钟自动清空/tmp 目录内的所有文件。尤其需要注意的是，在 crond 服务的计划任务参数中，所有命令一定要用绝对路径的方式来写，如果不知道绝对路径，请用 whereis 命令进行查询，rm 命令路径为下面输出信息中加粗部分。

```
[root@linuxprobe ~]# whereis rm
rm: /usr/bin/rm /usr/share/man/man1/rm.1.gz /usr/share/man/man1p/rm.1p.gz
[root@linuxprobe ~]# crontab -e
crontab: installing new crontab
[root@linuxprobe ~]# crontab -l
25 3 * * 1,3,5 /usr/bin/tar -czvf backup.tar.gz /home/wwwroot
0 1 * * 1-5 /usr/bin/rm -rf /tmp/*
```

注意事项：

**在 crond 服务的配置参数中，可以像 Shell 脚本那样以#号开头写上注释信息，这样在日后回顾这段命令代码时可以快速了解其功能、需求以及编写人员等重要信息。**

**计划任务中的“分”字段必须有数值，绝对不能为空或是\*号，而“日”和“星期”字段不能同时使用，否则就会发生冲突。**
