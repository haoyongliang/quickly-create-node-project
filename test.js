var pool = require('./pool');
pool.query('insert into student value(4,"张三",45)', function(err,vals){
	console.log(vals);
	for(var i=0; i<vals.length; i++){
		console.log(vals[i]);
	}
});