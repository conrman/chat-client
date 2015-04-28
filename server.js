var 	express		= require('express')
	,	app 	= express()
	, 	server 	= require('http').createServer()
	, 	io		= require('socket.io')(server)
	, 	jade	= require('jade');

// Setup views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.set(function() {
	app.use(express.static(__dirname + '/public'));
});

// Setup server to listen to port 8888
app.get('/', function(req, res) {
	res.render('home.jade');
});
app.listen(8888);

// Setup socket connections
io.sockets.on('connection', function(socket) {

	socket.on('setPseudo', function(data) {
		socket.set('pseudo', data);
	});

	socket.on('message', function(message) {
		socket.get('psedo', function() {
			var data = { 
				'message' 	: message,
				pseudo 	: name
			};

			socket.broadcast.emit('message', data);
			console.log("user " + name + " send this : " + message);
		});
	});

});