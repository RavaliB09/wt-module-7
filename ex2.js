var url = require('url');
var http = require('http');
var dt = require('./mymodule');
function add(var1, var2) {
    var ans;
    ans = var1 + var2;
    return ans;
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var a = q.a;
    var b = q.b;

    a = parseInt(a);
    b = parseInt(b);

    //var c = a + b;
    res.write("the addition  is" + dt.add(a, b) + '<br/>');
    res.write("the substraction is" + "\n" + dt.sub(a, b));
    res.end();
}).listen(8080);















