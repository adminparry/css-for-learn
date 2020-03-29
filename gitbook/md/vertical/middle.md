# 垂直居中的方式

## 当文字处理
vertical-align 配合 inline-block

``` html
<style type="text/css">
	.wrapper {
        width: 200px;
        height: 200px;
        background-color: green;

        margin: 0 auto;        
        text-align: center;
    }
    .wrapper:before {
        width: 0;
        height: inherit;
        content: "";
        display: inline-block;
        vertical-align: middle;

    }
    
    .content {
        width: 100px;
        height: 100px;
        background-color: yellow;

        vertical-align: middle;
        display: inline-block;

    }
	</style>
    	<div class="wrapper">

        <div class="content">
        </div>
    </div>
```

## flex
flex定义的布局方式
配合align-item align-self

## transform
transform: translate3d(10px, 10px, 10px);
配合position relative
top 50%
translateY(-50%)