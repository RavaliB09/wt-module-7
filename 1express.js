var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.get('/values', function (req, res) {
    var rr = "<html>";
    rr = rr + "<body>";
    rr = rr + "<form method='post' action='addittion'>";
    rr = rr + "first number" + "<input type='text' name='one' value=' '>";
    rr = rr + "second number" + "<input type='text' name='two' value=' '>";
    rr = rr + "<input type='button'>";

})