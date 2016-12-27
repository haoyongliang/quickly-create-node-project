export default class User{
	constructor(user){
		this.username = user.username;
		this.password = user.password;
	}

	/*
	普通方法
	 */
	save(fn){
		fn();
	}

	/*
	 *静态方法 
	 */
	staic find(){
		
	}


}