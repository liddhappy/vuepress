---
title: HTML 扩充 音频,视频元素
date: 2019-08-10 22:32:02
categories:
- HTML
tags: 
- HTML
---

video 视频

audio 音频

## video

controls: 控制控件的显示，取值只能为controls

某些属性，只有两种状态：1. 不写   2. 取值为属性名，这种属性叫做布尔属性

布尔属性，在HTML5中，可以不用书写属性值

autoplay: 布尔属性，自动播放。

muted: 布尔属性，静音播放。

loop: 布尔属性，循环播放

## audio

和视频完全一致


## 兼容性

1. 旧版本的浏览器不支持这两个元素
2. 不同的浏览器支持的音视频格式可能不一致

mp4、webm


```html
    <audio src="./media/shamoluotuo.mp3" controls autoplay loop muted></audio>
```

```html
    <video controls autoplay muted loop style="width:500px;">
        <source src="media/open.mp4">
        <source src="media/open.webm">
        <p>
            对不起，你的浏览器不支持video元素，请点击这里下载最新版本的浏览器
        </p>
    </video>
```