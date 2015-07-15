try{
	var express=require("express");
	var app=express();

	app.get("/",function(req,res){
		res.send("Hello!!!");
	});

	app.listen("2244","127.0.0.1");
}catch(e){
	console.error("express is not found");
	process.exit(e.code);
}
console.log("OK");