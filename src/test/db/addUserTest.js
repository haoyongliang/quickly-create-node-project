
import User  from './../../mapper/User'
User.sync()
  .then(()=>{
  return User.create({
    name:"张三",
    password:"123456"
  })
}).then(u=> {
  console.log("插入数据成功，信息如下");
  console.log(u.get('name'));
  console.log(u.get('password'));
}).catch(err=> {
  console.log('插入数据失败');
});



