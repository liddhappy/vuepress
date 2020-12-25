---
title: Redis
date: 2020-11-21
categories:
  - NoSQL
tags:
  - Redis
---

## **Redis 是什么？**

Redis:`REmote DIctionary Server`(远程字典服务器)
是完全开源免费的，用 C 语言编写的，遵守 BSD 协议，是一个高性能的(key/value)分布式内存数据库，基于内存运行并支持持久化的 NoSQL 数据库，是当前最热门的 NoSql 数据库之一,也被人们称为数据结构服务器。
Redis 与其他 key - value 缓存产品有以下三个特点：

- Redis 支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用；
- Redis 不仅仅支持简单的 key-value 类型的数据，同时还提供 list，set，zset，hash 等数据结构的存储；
- Redis 支持数据的备份，即 master-slave 模式的数据备份；

## **Redis 能干什么？**

- 内存存储和持久化：redis 支持异步将内存中的数据写到硬盘上，同时不影响继续服务；
- 取最新 N 个数据的操作，如：可以将最新的 10 条评论的 ID 放在 Redis 的 List 集合里面；
- 模拟类似于 HttpSession 这种需要设定过期时间的功能；
- 发布、订阅消息系统；
- 定时器、计数器；

## **redis 官网？**

- http://redis.io/
- http://www.redis.cn/

## **从哪些方面去学习 Redis？**

- 数据类型、基本操作和配置；
- 持久化和复制，RDB/AOF；
- 事务的控制；
- 复制；

## **Redis 的安装及启动关闭**

由于企业里面做 Redis 开发，99%都是 Linux 版的运用和安装，几乎不会涉及到 Windows 版，所以 Windows 版不作为讲解;

### **1.Linux（CentOS 6.9）下安装 redis（3.0.4）**

下载获得 redis-3.0.4.tar.gz 后将它放入我们的 Linux 目录/opt；
/opt 目录下，解压命令:tar -zxvf redis-3.0.4.tar.gz；
解压完成后出现文件夹：redis-3.0.4；
进入目录:cd redis-3.0.4；
在 redis-3.0.4 目录下执行 make 命令；
运行 make 命令时出现的错误：

安装 gcc（能上网：yum install gcc-c++）；
再次 make；
jemalloc/jemalloc.h：没有那个文件或目录（运行 make distclean 之后再 make）；
如果 make 完成后继续执行 make install；

### **2.查看默认安装目录：usr/local/bin**

redis-benchmark：服务启动起来后执行性能测试工具，可以在自己本子运行，看看自己本子性能如何；
redis-check-aof：修复有问题的 aof 文件；
redis-check-dump：修复有问题的 dump.rdb 文件；
redis-cli：客户端，操作入口；
redis-sentinel：redis 集群使用；
redis-server：Redis 服务器启动命令；

### **3.启动**

修改 redis.conf 文件将里面的 daemonize no 改成 yes，让服务在后台启动；
将默认的 redis.conf 拷贝到自己定义好的一个路径下，比如/myconf/redis.conf；
进入/usr/local/bin 目录下运行 redis-server，运行拷贝出存放了自定义 myconf 文件目录下的 redis.conf 文件（redis-server /myconf/redis.conf）;
在/usr/local/bin 目录下运行 redis-cli，启动客户端（redis-cli -p 6379）；

### **4.关闭**

单实例关闭：redis-cli shutdown；
多实例关闭，指定端口关闭：redis-cli -p 6379 shutdown；
Redis 启动后杂项基础知识

#### **1.单进程**

单进程模型来处理客户端的请求。对读写等事件的响应是通过对 epoll 函数的包装来做到的。Redis 的实际处理速度完全依靠主进程的执行效率；
epoll 是 Linux 内核为处理大批量文件描述符而作了改进的 epoll，是 Linux 下多路复用 IO 接口 select/poll 的增强版本，它能显著提高程序在大量并发连接中只有少量活跃的情况下的系统 CPU 利用率；

#### **2.redis 数据库的一些概念及操作**

默认 16 个数据库，类似数组下表从零开始，初始默认使用零号库；
统一密码管理，16 个库都是同样密码，要么都 OK 要么一个也连接不上，redis 默认端口是 6379；
select 命令切换数据库：select 0-15；
dbsize：查看当前数据库的 key 的数量；
flushdb：清空当前库；
flushall；通杀全部库；

## Redis 数据类型

### redis 的五大数据类型

#### 1.string（字符串）

string 是 redis 最基本的类型，你可以理解成与 Memcached 一模一样的类型，一个 key 对应一个 value；
string 类型是二进制安全的。意思是 redis 的 string 可以包含任何数据。如 jpg 图片或者序列化的对象 ；
string 类型是 Redis 最基本的数据类型，一个 redis 中字符串 value 最多可以是 512M；

#### 2.list（列表）

redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素导列表的头部（左边）或者尾部（右边）。它的底层实际是个链表。

#### 3.set（集合）

redis 的 set 是 string 类型的无序集合。它是通过 HashTable 实现的。

#### 4.hash（哈希，类似 java 里的 Map）

redis 的 hash 是一个键值对集合；
redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象；
类似 Java 里面的 `Map<String,Object>`；

#### 5.zset(sorted set：有序集合)

redis 的 zset 和 set 一样也是 string 类型元素的集合,且不允许重复的成员；
不同的是每个元素都会关联一个 double 类型的分数；
redis 正是通过分数来为集合中的成员进行从小到大的排序。zset 的成员是唯一的,但分数(score)却可以重复；

## redis 常见数据类型操作命令参考网址

http://redisdoc.com/

## redis 键(key) --（常用命令介绍）

`keys *`：查看所有 key；
`exists key的名字`：判断某个 key 是否存在；
`move key dbID（0-15）`： 当前库就没有了，被移除了；
`expire key 秒钟`： 为给定的 key 设置过期时间；
`ttl key`： 查看还有多少秒过期，-1 表示永不过期，-2 表示已过期；
`type key`： 查看你的 key 是什么类型；

## redis 字符串(String) --（常用命令介绍）

set/get/del/append/strlen；
Incr/decr/incrby/decrby：一定要是数字才能进行加减；
getrange/setrange：

- getrange：获取指定区间范围内的值，类似 between and 的关系从零到负一表示全部；
- setrange：设置指定区间范围内的值，格式是 setrange key 位置值 具体值；
  setex(set with expire) 键 秒值 值/setnx(set if not exist) 键

- setex：设置带过期时间的 key，动态设置 : `setex 键 秒值 真实值`
- setnx：只有在 key 不存在时设置 key 的值：`setnx 键 值 mset/mget/msetnx`
- mset：同时设置一个或多个 key-value 对。
- mget：获取所有(一个或多个)给定 key 的值。
- msetnx：同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在（如果存在 key，则都不会操作，因为 msetnx 是原子性型操作）。
- getset：将给定 key 的值设为 value ，并返回 key 的旧值(old value)。简单一句话，先 get 然后立即 set。

## redis 列表(List) --（常用命令介绍）

lpush/rpush/lrange；
lpop/rpop，移除列表 key 的头/尾元素；
lindex，按照索引下标获得元素(从上到下)（格式：`lindex key index`）；
llen：返回列表 key 的长度（格式：`llen key`）；
lerm：根据参数 count 的值，移除列表中与参数 value 相等的元素（格式： `lerm key count value`）；

- count > 0 : 从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count 。
- count < 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。
- count = 0 : 移除表中所有与 value 相等的值。

ltrim ，截取指定范围的值后再赋值给 key（格式：`ltrim key start stop`）；
rpoplpush，移除列表的最后一个元素，并将该元素添加到另一个列表头部并返回（格式：`rpoplpush source—key destination—key`）；
lset，将列表 key 下标为 index 的元素的值设置为 value（格式：`lset key index value`）；
linsert，（格式：`linsert key before|after pivot value`）将值 value 插入到列表 key 当中，位于值 pivot 之前或之后；

- 当 pivot 不存在于列表 key 时，不执行任何操作。
- 当 key 不存在时， key 被视为空列表，不执行任何操作。
- 如果 key 不是列表类型，返回一个错误。

性能总结
它是一个字符串链表，left、right 都可以插入添加；

- 如果键不存在，创建新的链表；
- 如果键已存在，新增内容；
- 如果值全移除，对应的键也就消失了。
- 链表的操作无论是头和尾效率都极高，但假如是对中间元素进行操作，效率就很惨淡了。

## redis 集合(Set) --（常用命令介绍）

sadd/smembers/sismember，格式：

- sadd key member [member ...]
- smembers key
- sismember key member

scard：获取集合里面的元素个数（格式：scard key）；
srem：删除集合中元素（格式：srem key member [member ...]）；
srandmember，（格式：srandmember key [count]）（不会修改 set 集合）

- 如果命令执行时，只提供了 key 参数，那么返回集合中的一个随机元素；
- 如果 count 为正数，且小于集合基数，那么命令返回一个包含 count 个元素的数组，数组中的元素各不相同。如果 count 大于等于集合基数，那么返回整个集合；
- 如果 count 为负数，那么命令返回一个数组，数组中的元素可能会重复出现多次，而数组的长度为 count 的绝对值；

spop，移除并返回集合中的一个随机元素（格式：spop key）；
smove，（格式：smove source destination member）将 member 元素从 source 集合移动到 destination 集合；
**数学集合类**

- 差集：sdiff（格式：sdiff key [key ...]）
- 交集：sinter（格式：sinter key [key ...]）
- 并集：sunion（格式：sunion key [key ...]）

## redis 哈希(Hash) --（常用命令介绍）

hset/hget/hmset/hmget/hgetall/hdel，格式：

- hset key field value：将哈希表 key 中的域 field 的值设为 value ；
- hget key field：返回哈希表 key 中给定域 field 的值；
- hmset key field value [field value ...]：同时将多个 field-value (域-值)对设置到哈希表 key 中；
- hmget key field [field ...]：返回哈希表 key 中，一个或多个给定域的值；
- hgetall key：返回哈希表 key 中，所有的域和值；
- hdel key field [field ...]：删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略；
  hlen，返回哈希表 key 中域的数量（格式：hlen key）；
  hexists，查看哈希表 key 中，给定域 field 是否存在（格式：hexists key field）；
- hkeys/hvals，格式：

- hkeys key：返回哈希表 key 中的所有域；
- hvals key：返回哈希表 key 中所有域的值；

hincrby/hincrbyfloat，格式：

- hincrby key field increment：为哈希表 key 中的域 field 的值加上增量 increment；
- hincrbyfloat key field increment：为哈希表 key 中的域 field 加上浮点数增量 increment ；hsetnx，将哈希表 key 中的域 field 的值设置为 value ，当且仅当域 field 不存在（格式：hsetnx key field value）

## redis 有序集合 Zset(sorted set) --（常用命令介绍）

zadd/zrange，格式：

- zadd key score member [[score member][score member] ...]：将一个或多个 member 元素及其 score 值加入到有序集 key 当中；
- zrange key start stop [WITHSCORES]：返回有序集 key 中，指定区间内的成员，其中成员的位置按 score 值递增(从小到大)来排列；

zrangebyscore：（格式：zrangebuscore key min max [WITHSCORES][limit offset count]），返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员；

zrem：移除有序集 key 中的一个或多个成员，不存在的成员将被忽略（格式：`zrem key member [member ...]`）；
zcard/zcount /zrank/zscore，格式：

- zcard key：返回有序集 key 的基数；
- zcount key min max：返回有序集 key 中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量；
- zrank key member：返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列，排名以 0 为底，也就是说， score 值最小的成员排名为 0 ；
- zscore key member：返回有序集 key 中，成员 member 的 score 值；

zrevrank：返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递减(从大到小)排序，排名以 0 为底，也就是说， score 值最大的成员排名为 0 （格式：zrevrank key member）；
zrevrange：返回有序集 key 中，指定区间内的成员，其中成员的位置按 score 值递减(从大到小)来排列（格式：zrevrange key start stop [WITHSCORES]）；
zrevrangebyscore：返回有序集 key 中， score 值介于 max 和 min 之间(默认包括等于 max 或 min )的所有的成员。有序集成员按 score 值递减(从大到小)的次序排列（格式：zrevrangebyscore key max min [WITHSCORES][limit offset count]）；

## 解析配置文件（redis.conf）

### INCLUDES（包含）

和我们的 Struts2 配置文件类似，可以通过 includes 包含，redis.conf 可以作为总闸，包含其他；

### GENERAL（通用）

- daemonize no
  Redis 默认不是以守护进程的方式运行，可以通过该配置项修改，使用 yes 启用守护进程；
  启用守护进程后，Redis 会把 pid 写到一个 pidfile 中，在/var/run/redis.pid；
- pidfile /var/run/redis.pid
  当 Redis 以守护进程方式运行时，Redis 默认会把 pid 写入/var/run/redis.pid 文件，可以通过 pidfile 指定；
- port 6379
  指定 Redis 监听端口，默认端口为 6379；
  如果指定 0 端口，表示 Redis 不监听 TCP 连接；
- tcp-backlog 511
  设置 tcp 的 backlog，backlog 其实是一个连接队列，backlog 队列总和=未完成三次握手队列 + 已经完成三次握手队列。在高并发环境下你需要一个高 backlog 值来避免慢客户端连接问题（注意 Linux 内核会将这个值减小到/proc/sys/net/core/somaxconn 的值），所以需要增大 somaxconn 和 tcp_max_syn_backlog 两个值来达到想要的效果；
- bind 127.0.0.1
  绑定的主机地址；
  你可以绑定单一接口，如果没有绑定，所有接口都会监听到来的连接；
- timeout 0
  当客户端闲置多长时间后关闭连接，如果指定为 0，表示关闭该功能；
- tcp-keepalive 0
  TCP 连接保活策略；
  单位为秒，如果设置为 0，则不会进行 Keepalive 检测，建议设置成 60 ；
- loglevel notice
  指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning；
- logfile ""
  指定了记录日志的文件，空字符串的话，日志会打印到标准输出设备。后台运行的 redis 标准输出是/dev/null；
- syslog-enabled no
  是否把日志输出到 syslog 中；
- syslog-ident redis
  指定 syslog 里的日志标志
- syslog-facility local0
  指定 syslog 设备，值可以是 USER 或 LOCAL0-LOCAL7；
- databases 16
  设置数据库的数量，默认数据库为 0；

### SNAPSHOTTING（快照）

- save
  指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合；
  save 900 1：900 秒（15 分钟）内有 1 个更改
  save 300 10：300 秒（5 分钟）内有 10 个更改
  save 60 10000：60 秒（1 分钟）内有 10000 个更改
- stop-writes-on-bgsave-error yes
  后台存储错误停止写；
- rdbcompression yes
  指定存储至本地数据库时是否压缩数据，默认为 yes，Redis 采用 LZF 压缩，如果为了节省 CPU 时间，可以关闭该选项，但会导致数据库文件变的巨大；
- rdbchecksum yes
  在存储快照后，还可以让 redis 使用 CRC64 算法来进行数据校验，但是这样做会增加大约 10%的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能；
- dbfilename dump.rdb
  指定本地数据库文件名，默认值为 dump.rdb；
  dir ./
  指定本地数据库存放目录（rdb、aof 文件也会写在这个目录）；

### REPLICATION（复制）

详细请看下文 Redis 的复制（Master | Slave）；

### SECURITY（安全）

- requirepass foobared
  设置 Redis 连接密码，如果配置了连接密码，客户端在连接 Redis 时需要通过 auth password 命令提供密码，默认关闭；

### LIMITS（极限）

- maxclients 10000
  设置 redis 同时可以与多少个客户端进行连接。默认情况下为 10000 个客户端。当你无法设置进程文件句柄限制时，redis 会设置为当前的文件句柄限制值减去 32，因为 redis 会为自身内部处理逻辑留一些句柄出来。如果达到了此限制，redis 则会拒绝新的连接请求，并且向这些连接请求方发出“max number of clients reached”以作回应；
- maxmemory `<bytes>`
  设置 redis 可以使用的内存量。一旦到达内存使用上限，redis 将会试图移除内部数据，移除规则可以通过 maxmemory-policy 来指定。如果 redis 无法根据移除规则来移除内存中的数据，或者设置了“不允许移除”，那么 redis 则会针对那些需要申请内存的指令返回错误信息，比如 SET、LPUSH 等。但是对于无内存申请的指令，仍然会正常响应，比如 GET 等。如果你的 redis 是主 redis（说明你的 redis 有从 redis），那么在设置内存使用上限时，需要在系统中留出一些内存空间给同步队列缓存，只有在你设置的是“不移除”的情况下，才不用考虑这个因素
- maxmemory-policy noeviction
  数据淘汰策略，Reids 具体有 6 种淘汰策略：
  （1）volatile-lru：使用 LRU 算法移除 key，只对设置了过期时间的键；
  （2）allkeys-lru：使用 LRU 算法移除 key；
  （3）volatile-random：在过期集合中移除随机的 key，只对设置了过期时间的键；
  （4）allkeys-random：移除随机的 key；
  （5）volatile-ttl：移除那些 TTL 值最小的 key，即那些最近要过期的 key；
  （6）noeviction：不进行移除。针对写操作，只是返回错误信息；
- maxmemory-samples 5
  设置样本数量，LRU 算法和最小 TTL 算法都并非是精确的算法，而是估算值，所以你可以设置样本的大小，redis 默认会检查这么多个 key 并选择其中 LRU 的那个；

### APPEND ONLY MODE（追加）

- appendonly no
  指定是否在每次更新操作后进行日志记录，Redis 在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失；因为 redis 本身同步数据文件是按上面 save 条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为 no；
- appendfilename "appendonly.aof"
  指定更新日志文件名，默认为 appendonly.aof；
- appendfsync everysec
  always：同步持久化，每次发生数据变更会被立即记录到磁盘 性能较差但数据完整性比较好；
  everysec：出厂默认推荐，异步操作，每秒记录 如果一秒内宕机，有数据丢失；
  no：让操作系统来决定何时同步，不能给服务器性能带来多大的提升，而且也会增加系统奔溃时数据丢失的数量；
- no-appendfsync-on-rewrite no
  重写时是否可以运用 Appendfsync，用默认 no 即可，保证数据安全性；
- auto-aof-rewrite-percentage 100
  重写指定百分比，为 0 会禁用 AOF 自动重写特性；
- auto-aof-rewrite-min-size 64mb
  设置重写的基准值；

### 常见的一些配置总结

redis.conf 配置项说明如下：

1. Redis 默认不是以守护进程的方式运行，可以通过该配置项修改，使用 yes 启用守护进程
   daemonize yes
2. 当 Redis 以守护进程方式运行时，Redis 默认会把 pid 写入/var/run/redis.pid 文件，可以通过 pidfile 指定
   pidfile /var/run/redis.pid
3. 指定 Redis 监听端口，默认端口为 6379，作者在自己的一篇博文中解释了为什么选用 6379 作为默认端口，因为 6379 在手机按键上 MERZ 对应的号码，而 MERZ 取自意大利歌女 Alessia Merz 的名字
   port 6379
4. 绑定的主机地址
   bind 127.0.0.1
5. 当 客户端闲置多长时间后关闭连接，如果指定为 0，表示关闭该功能
   timeout 300
6. 指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning，默认为 verbose
   loglevel verbose
7. 日志记录方式，默认为标准输出，如果配置 Redis 为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给/dev/null
   logfile stdout
8. 设置数据库的数量，默认数据库为 0，可以使用 SELECT 命令在连接上指定数据库 id
   databases 16
9. 指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合
   save seconds changes
   Redis 默认配置文件中提供了三个条件：
   save 900 1
   save 300 10
   save 60 10000
   分别表示 900 秒（15 分钟）内有 1 个更改，300 秒（5 分钟）内有 10 个更改以及 60 秒内有 10000 个更改。
10. 指定存储至本地数据库时是否压缩数据，默认为 yes，Redis 采用 LZF 压缩，如果为了节省 CPU 时间，可以关闭该选项，但会导致数据库文件变的巨大
    rdbcompression yes
11. 指定本地数据库文件名，默认值为 dump.rdb
    dbfilename dump.rdb
12. 指定本地数据库存放目录
    dir ./
13. 设置当本机为 slav 服务时，设置 master 服务的 IP 地址及端口，在 Redis 启动时，它会自动从 master 进行数据同步
    slaveof `<masterip>` `<masterport>`
14. 当 master 服务设置了密码保护时，slav 服务连接 master 的密码
    masterauth `<master-password>`
15. 设置 Redis 连接密码，如果配置了连接密码，客户端在连接 Redis 时需要通过 AUTH `<password>`命令提供密码，默认关闭
    requirepass foobared
16. 设置同一时间最大客户端连接数，默认无限制，Redis 可以同时打开的客户端连接数为 Redis 进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis 会关闭新的连接并向客户端返回 max number of clients reached 错误信息
    maxclients 128
17. 指定 Redis 最大内存限制，Redis 在启动时会把数据加载到内存中，达到最大内存后，Redis 会先尝试清除已到期或即将到期的 Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis 新的 vm 机制，会把 Key 存放内存，Value 会存放在 swap 区
    maxmemory `<bytes>`
18. 指定是否在每次更新操作后进行日志记录，Redis 在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 redis 本身同步数据文件是按上面 save 条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为 no
    appendonly no
19. 指定更新日志文件名，默认为 appendonly.aof
    appendfilename appendonly.aof
20. 指定更新日志条件，共有 3 个可选值：
    no：表示等操作系统进行数据缓存同步到磁盘（快）
    always：表示每次更新操作后手动调用 fsync()将数据写到磁盘（慢，安全）
    everysec：表示每秒同步一次（折衷，默认值）
    appendfsync everysec
21. 指定是否启用虚拟内存机制，默认值为 no，简单的介绍一下，VM 机制将数据分页存放，由 Redis 将访问量较少的页即冷数据 swap 到磁盘上，访问多的页面由磁盘自动换出到内存中（在后面的文章我会仔细分析 Redis 的 VM 机制）
    vm-enabled no
22. 虚拟内存文件路径，默认值为/tmp/redis.swap，不可多个 Redis 实例共享
    vm-swap-file /tmp/redis.swap
23. 将所有大于 vm-max-memory 的数据存入虚拟内存,无论 vm-max-memory 设置多小,所有索引数据都是内存存储的(Redis 的索引数据 就是 keys),也就是说,当 vm-max-memory 设置为 0 的时候,其实是所有 value 都存在于磁盘。默认值为 0
    vm-max-memory 0
24. Redis swap 文件分成了很多的 page，一个对象可以保存在多个 page 上面，但一个 page 上不能被多个对象共享，vm-page-size 是要根据存储的 数据大小来设定的，作者建议如果存储很多小对象，page 大小最好设置为 32 或者 64bytes；如果存储很大大对象，则可以使用更大的 page，如果不 确定，就使用默认值
    vm-page-size 32
25. 设置 swap 文件中的 page 数量，由于页表（一种表示页面空闲或使用的 bitmap）是在放在内存中的，，在磁盘上每 8 个 pages 将消耗 1byte 的内存。
    vm-pages 134217728
26. 设置访问 swap 文件的线程数,最好不要超过机器的核数,如果设置为 0,那么所有对 swap 文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为 4
    vm-max-threads 4
27. 设置在向客户端应答时，是否把较小的包合并为一个包发送，默认为开启
    glueoutputbuf yes
28. 指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法
    hash-max-zipmap-entries 64
    hash-max-zipmap-value 512
29. 指定是否激活重置哈希，默认为开启（后面在介绍 Redis 的哈希算法时具体介绍）
    activerehashing yes
30. 指定包含其它的配置文件，可以在同一主机上多个 Redis 实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件
    include /path/to/local.conf
