module.exports.add = (req, res, next) => { 
	console.log(req.url);
	console.log(req.query.name);
}