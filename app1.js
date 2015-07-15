var http=require("http");

var server=http.createServer(function(req,res){
	//home
	if(req.url=="/"){
		res.writeHead(200,{"Content-Type":"text/html"});
		res.end("Welcome to the home page!");
	}

	//about
	else if(req.url=="/about"){
		res.writeHead(200,{"Content-Type":"text/html"});
		res.end("Welcome to the about page!");
	}

	//
	else {
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.end("Error 404! File not found!");
	}
});

server.listen(1337,"localhost");