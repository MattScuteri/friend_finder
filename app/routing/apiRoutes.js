//import server.js file
const server = require('././server.js');
const friends = require('./data/friends.js')

server.app.get("/api/friends", function(req, res) {
	res.json(friends);
})

server.app.post("/api/friends", newFriend, function(req, res) {
	for (let i = 0; i < newFriend.length, i++) {
		let totalDifference = Math.abs(newFriend.scores[i] - friends.scores)
		
		console.log(totalDifference);

		for (let j = 0, j < friends.length, i++) {

		}
	}
})

server.app.listen(port, function() {
	console.log("App listening on PORT" + port)
});