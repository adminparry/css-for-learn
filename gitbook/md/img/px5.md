# img下面5px问题

``` html
<style>
    .img{
        width:40px;height:40px;
    }
    .div{

    }
</style>
<div class="div">
    <img src="'https://cn.vuejs.org/images/logo.png'" class="img">
</div>
```

### 1
设置图片的
``` html
vertical-align: bottom;
```
### 2
设置div的高度
``` css
height: 40px;
```
### 3
设置img为块元素
``` css
display: block;
```