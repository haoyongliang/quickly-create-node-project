"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.add = add;
function add(req, res, next) {
	console.log(req.url);
	console.log(req.query.name);
}