import UserModel  from './../../model/userModel'

new UserModel({
  name: 'angularbaby',
  password: '123456'
}).save()
  .then(()=> {
    console.log("插入成功");
  });


