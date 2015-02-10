
// var http = require("http");
// var port = 9111;
// var messages = ["Are you there?", "Anybody home?", "Hello"];

// var onRequest = function(req, res){


// 	if(req.method === "GET"){
// 		res.writeHead(200, {
// 		"Connection": "close",
// 		"Content-Type": "application/json",
// 		"Access-Control-Allow-Origin": "*"
// 		})
// 	res.end(JSON.stringify(messages));

// 	}


//     if (req.method === 'POST') {
//        var postData = '';
//        req.on('data', function(chunk) {
//            postData += chunk.toString();
//         });    
//         req.on('end', function() {
// 			console.log("Got POST data");
// 			console.log(JSON.parse(postData));
// 			messages.push(JSON.parse(postData));

// 			res.writeHead(200, {
// 				"Connection": 'close',
// 				"Content-Type": 'application/json',
// 				"Access-Control-Allow-Origin": '*',
// 				"Access-Control-Allow-Origin": 'OPTIONS, GET, POST'
// 				})
// 		res.end(postData);
// 		})
// 	}

// 	else if (req.method === "OPTIONS") {
// 		res.writeHead(200, {
// 	'Connection': 'close',
// 	'Content-Type': 'application/json',
// 	'Access-Control-Allow-Origin': '*',
// 	'Access-Control-Allow-Methods': 'OPTIONS GET POST',
// 	}
// 	res.end(JSON.stringify(messages));
// }


// http.createServer(onRequest).listen(port);
// console.log("listening on port " + port)







