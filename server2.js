var fs=require('fs');
    path = require('path');
    var express=require('express');
    app=express();

    var server=app.listen(8081,function(){
    	console.log("8081");
    })

        app.get('/',function (req,res) {
    	res.writeHead(200);
    	fs.createReadStream('./test.html').pipe(res);
    	console.log(req.url);
    });

    app.get('/SimulIDE.zip',function(req,res){
        fs.createReadStream('./SimulIDE.zip').pipe(res);
    })

    app.get('/wrar501.exe',function(req,res){
        fs.createReadStream('./wrar501.exe').pipe(res);
    })
    