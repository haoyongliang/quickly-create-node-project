import userMapper from './../mapper/User'
export default class User{
	constructor(user){
    this.id = user.id;
		this.name = user.name;
		this.password = user.password;
	}

	/*
	普通方法
	 */
	save(){
    return userMapper.sync()
      .then(()=>{
        return userMapper.create(this)
      })
	}

	/*
	 *静态方法
	 */
  static find(){

	}


}
