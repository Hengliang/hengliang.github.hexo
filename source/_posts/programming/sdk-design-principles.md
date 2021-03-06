---
title: SDK设计原则
date: 2017-07-09 02:55:20
tags: 
 - programming
---

最近在开发一个`SDK`，其目标就是能够让后端服务能够简单快速的接入监控，告警以及异常上报功能，从而透视出服务运行时的实时质量。实现其实蛮简单的，利用现有的各种服务平台，实现胶水代码就好了。但是，再简单的事情也不该轻视，如果因为这个`SDK`引起服务不可用，响应变慢，或者其他异常，那就不是一件好玩的事情了。一个`SDK`虽然小（或者说是代码少），但是需要足够健壮，不要给业务添麻烦。同时，也需要足够简单，同样是不要给业务添麻烦。

![](http://7xrkrd.com1.z0.glb.clouddn.com/how%20to%20builda%20sdk%20for%20developermake%20them%20happy%20-%20sealed.png)

下面是我在开发`SDK`时的一些总结和思考，不能面面俱到，不过应该能够让一个`SDK`活得还算滋润，吧。


## ✎ Smallest Core

设计`SDK`和设计模块，设计产品一样，都是要先理清核心功能，这一点对于一个`SDK`来说，就是保持一个最小核心代码实现，只做一件事，并将其做好。在`Java`开源社区中有一个把自己做复杂的例子就是`Restlet`，当你需要`Restful`时，往往`Spring MVC`就能很好的满足了，所以在使用中`Restlet`的复杂度远远高于`Spring MVC`。虽然前面对比是两个框架，不过还是能够说明保持“最小核心”的重要性的。

## ✎ Simplest API

当开发拿到一个`SDK`时，第一反应肯定是问“怎么用”，这里表达的意思就是“怎么调用”。如果此时几个方法或者几句话表达不清楚，估计就得下次再说了，毕竟谁都很忙对吧，解决这个问题的关键就是设计最简洁的`API`。首先`API`数量要少，根据研究人类的瞬时记忆只能维持记忆5到9个数字，一下子没记还是会有些挫败感的，所以一个`SDK`最好是只要用到3到5个`API`。其次，`API`要能开箱即用，简单明了，不要错综复杂的配置与初始化，最多调用`init()`就可以开始干活啦。简洁`SDK`的目标就是简单好用，让人舒服，保持以下原则会让`SDK`更容易达成这个目标。

- Less than more
- Keep It Simple, Stupid (KISS)
- Self-documenting code
- Non-invasive


## ✎ Asynchronous

一般来说，`SDK`的`API`都是被业务线程调用的，而业务线程只有一个目标，就是安全无错快速的执行完业务逻辑。可以想象，如果让开发知道一个`SDK`中的代码会阻塞业务代码运行，哪怕是一毫秒，估计也是会拒绝的吧。更严重的是，如果`SDK`中的代码是同步执行，`SDK`中的异常有可能会抛出到当前业务线程执行栈中，那就真的太恐怖了。因此，异步对于`SDK`来说基本是必选项，除非是“权限”类的`SDK`。


## ✎ Production Ready

关于什么是`Production Ready`，可以参考这个[定义](https://softwareengineering.stackexchange.com/a/61731)。下面列出了准备好给生产环境使用所需要做的一些事情。做到`Production Ready`，不仅`SDK`需要完备的功能，更重要的是让人使用的放心。

- Unit Test / 单元测试
- Detailed Debug Logging / 详细的Debug日志输出
- Detailed Documents/Comments / 详细的代码注释和文档说明
- Tiny Size / 微型包大小，减少多余的依赖