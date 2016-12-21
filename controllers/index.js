module.exports.homePage = (req, res, next) => { 
	res.render('index.html',{title:'Express'});
}
