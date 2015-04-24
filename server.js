var express 	= require('express'),
	jade	 	= require('jade'),
	app 		= express.createServer(),
	io 			= require('socket.io').listen(app);

// Setup views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.configure(function() {
	app.use(express.static(__dirname + '/public'));
});

// Setup server to listen to port 3000
app.get('/', function(req, res) {
	res.render('home.jade');
});
app.listen(3000);