// Node.js Net 模块
// Node.js 工具模块Node.js 工具模块
// Node.js Net 模块提供了一些用于底层的网络通信的小工具，包含了创建服务器/客户端的方法
// net.createServer([options][, connectionListener])
// 创建一个 TCP 服务器。参数 connectionListener 自动给 'connection' 事件创建监听器。
// 2	net.connect(options[, connectionListener])
// 返回一个新的 'net.Socket'，并连接到指定的地址和端口。
// 当 socket 建立的时候，将会触发 'connect' 事件。
// 3	net.createConnection(options[, connectionListener])
// 创建一个到端口 port 和 主机 host的 TCP 连接。 host 默认为 'localhost'。
// 4	net.connect(port[, host][, connectListener])
// 创建一个端口为 port 和主机为 host的 TCP 连接 。host 默认为 'localhost'。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
// 5	net.createConnection(port[, host][, connectListener])
// 创建一个端口为 port 和主机为 host的 TCP 连接 。host 默认为 'localhost'。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
// 6	net.connect(path[, connectListener])
// 创建连接到 path 的 unix socket 。参数 connectListener 将会作为监听器添加到 'connect' 事件上。返回 'net.Socket'。
// 7	net.createConnection(path[, connectListener])
// 创建连接到 path 的 unix socket 。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
// 8	net.isIP(input)
// 检测输入的是否为 IP 地址。 IPV4 返回 4， IPV6 返回 6，其他情况返回 0。
// 9	net.isIPv4(input)
// 如果输入的地址为 IPV4， 返回 true，否则返回 false。
// 10	net.isIPv6(input)
// 如果输入的地址为 IPV6， 返回 true，否则返回 false。


// net.Server
// net.Server通常用于创建一个 TCP 或本地服务器。
// 序号	方法 & 描述
// 1	server.listen(port[, host][, backlog][, callback])
// 监听指定端口 port 和 主机 host ac连接。 默认情况下 host 接受任何 IPv4 地址(INADDR_ANY)的直接连接。端口 port 为 0 时，则会分配一个随机端口。
// 2	server.listen(path[, callback])
// 通过指定 path 的连接，启动一个本地 socket 服务器。
// 3	server.listen(handle[, callback])
// 通过指定句柄连接。
// 4	server.listen(options[, callback])
// options 的属性：端口 port, 主机 host, 和 backlog, 以及可选参数 callback 函数, 他们在一起调用server.listen(port, [host], [backlog], [callback])。还有，参数 path 可以用来指定 UNIX socket。
// 5	server.close([callback])
// 服务器停止接收新的连接，保持现有连接。这是异步函数，当所有连接结束的时候服务器会关闭，并会触发 'close' 事件。
// 6	server.address()
// 操作系统返回绑定的地址，协议族名和服务器端口。
// 7	server.unref()
// 如果这是事件系统中唯一一个活动的服务器，调用 unref 将允许程序退出。
// 8	server.ref()
// 与 unref 相反，如果这是唯一的服务器，在之前被 unref 了的服务器上调用 ref 将不会让程序退出（默认行为）。如果服务器已经被 ref，则再次调用 ref 并不会产生影响。
// 9	server.getConnections(callback)
// 异步获取服务器当前活跃连接的数量。当 socket 发送给子进程后才有效；回调函数有 2 个参数 err 和 count。
// 
// 
//