
注： 此工程为[FED](https://github.com/ijse/FED)的fork，由于FED原工程改动较大，特此创建一个备份，此工程在某个时间点可能消失。

## Features

* 支持FreeMarker模板引擎
* 支持velocity模板引擎
* 支持标准的HTTP请求方法及返回数据格式
* 支持less、coffee文件的实时编译
* 可自动重启应用最新代码
* 插件机制扩展，满足大部分扩展需求

## Quick Start

1. 创建文件夹:

```
$> mkdir vedProj
$> cd vedProj
```

2. 下载安装VED:

```
$> npm install -g ved
```

3. COPY一份配置文件 "vedProj/VED/configs/index.json", 修改

4. 启动服务：

```
$> ved server -w -p 8910 ./configs/index.json
```

注：`ved server`时必须指定配置文件~！

当修改mock文件时，VED会自动重启应用更新。


## Contributing

点右上角fork按钮

## Test

	> npm test



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ijse/ved/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

