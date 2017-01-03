'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.homePage = homePage;
function homePage(req, res, next) {
	res.render('index.html', { title: 'Express' });
}