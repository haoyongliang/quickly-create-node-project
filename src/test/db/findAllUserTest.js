import UserModel  from './../../model/userModel'


UserModel
  .findAll()
  .then((data)=> {
    data.forEach((element, index)=> {
      let user = element.dataValues;
      console.log(user.id + '\t' + user.name + '\t' + user.createdAt + '\t' + user.updatedAt);
    });
  })


