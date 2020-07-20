const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', function (req, res) {

    res.send({
        message: `hello from ${req.body.value}`
    });
});


app.listen(3000);