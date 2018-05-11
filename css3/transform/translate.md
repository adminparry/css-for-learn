## translate
css3 中矩阵变换的简写形式 代表平移


### translate(x,y)
定义 2D 转换。
``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>translate</title>
	<style>
		.translate{
			width: 200px;height: 200px;background-color: red;
			transform: translate(10px,10px);
		}
	</style>
</head>
<body>
	<div class="translate"></div>
</body>
</html>
```
### translate3d(x,y,z)
定义 3D 转换。
``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>translate</title>
	<style>
		.translate{
			width: 200px;height: 200px;background-color: red;
			transform: translate3d(10px,10px,10px);
		}
	</style>
</head>
<body>
	<div class="translate"></div>
</body>
</html>
```
### translateX(x)
定义转换，只是用 X 轴的值。
``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>translate</title>
	<style>
		.translate{
			width: 200px;height: 200px;background-color: red;
			transform: translateX(10px);
		}
	</style>
</head>
<body>
	<div class="translate"></div>
</body>
</html>
```
### translateY(y)
定义转换，只是用 Y 轴的值。
``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>translate</title>
	<style>
		.translate{
			width: 200px;height: 200px;background-color: red;
			transform: translateY(10px);
		}
	</style>
</head>
<body>
	<div class="translate"></div>
</body>
</html>
```
### translateZ(z)
定义 3D 转换，只是用 Z 轴的值。
``` bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>translate</title>
	<style>
		.translate{
			width: 200px;height: 200px;background-color: red;
			transform: translateZ(10px);
		}
	</style>
</head>
<body>
	<div class="translate"></div>
</body>
</html>
```