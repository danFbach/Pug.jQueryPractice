var express = require('express');
var app = express();
var path = require('path')
app.use('/public',express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.listen(10001, function () {
  console.log('Ready');
});
app.get('/', function (req, res) {
	res.render('../views/Index.pug', { title: 'Nail Plant Home'  });
});
app.get('/#', function (req, res) {
	res.render('../views/Index.pug', { title: 'Nail Plant Home'  });
});
app.get('/Index.html', function (req, res) {
	res.render('../views/Index.pug', { title: 'Nail Plant Home'  });
});
app.get('/About.html', function (req, res) {
	res.render('../views/About.pug', { title: 'About Us' });
});
app.get('/Containers.html', function (req, res) {
	res.render('../views/Containers.pug', { title: 'Containers' });
});
app.get('/Exterior.html', function (req, res) {
	res.render('../views/Exterior.pug', { title: 'Exterior' });
});
app.get('/Help.html', function (req, res) {
	res.render('../views/Help.pug', { title: 'Help / FAQ' });
});