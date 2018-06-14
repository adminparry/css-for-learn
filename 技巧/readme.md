

## [边缘发光效果](http://parry.me/css-for-learn/master/%E6%8A%80%E5%B7%A7/%E8%BE%B9%E7%BC%98%E5%8F%91%E5%85%89.html)
```html
<style>
	.light{
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
		border: 1px solid #ccc;
		transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	}
	.light:focus{
		border-color: #4d90fe;
		outline: 0;
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(77,144,254,.6);
	}
</style>
<body>
	<input class="light" type="text">
</body>
```


## 弹出框禁止滚动处理
```html
<style>
	.mark{
		position: fixed;
		left: 0;top: 0;
		width: 100%;height: 100%;
		background: rgba(26,26,26,.65);
		
		display: none;

	}
	.content{
		width: 200px;height: 200px;background: white;
		border-radius: 5px;
		position: absolute;
		left: 50%;
		top:50%;
		transform:translate3d(-50%,-50%,0);
		line-height: 200px;
		text-align: center;
	}
</style>
<body>
	<button id="popup">popup</button>
	<div class="mark">
		<div class="content">
			这就是弹出框中的内容
		</div>
	</div>
</body>
<script>
	
</script>
```

## 多列布局

## 固定到底部的footer

## 图片置灰

## 隐藏滚动条

## 左右布局

## css实现先选卡移入移出

## flex移动首页样式

## inline-block去除默认间距

## out-line实现表格效果

