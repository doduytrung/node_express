try{
	var express=require("express");
	var app=express();

	var users={
			"1":{"name":"Me","age":21},
			"2":{"name":"You","age":22},
			"3":{"name":"She","age":33}
	}

	app.get("/user/:id",function(req,res){
		var user=users[req.params.id];
		if(user){
			res.send("This is "+user.name);
		}else{
			res.send("Sorry, we cannot find user!");
		}
	});
	

	app.listen("2244","127.0.0.1");
}catch(e){
	console.error("express is not found");
	process.exit(e.code);
}
