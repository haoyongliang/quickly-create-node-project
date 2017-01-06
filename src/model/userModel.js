import userMapper from './../mapper/userMapper'

export default class UserModel{
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
  static findAll(){
    return userMapper.sync()
      .then(()=>{
        return userMapper.findAll();
      })
	}
}
