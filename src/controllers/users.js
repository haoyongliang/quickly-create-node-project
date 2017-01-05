import User from '../mapper/user'

export default  {

  getAllUsers: function (req, res, next) {
    let data = []
    console.log(111);
    User.findAll().then(function (result) {
      for (var i = 0, usr; usr = result[i++];) {
        data.push(usr);
        console.log('nae=' + usr.user_name + ', password=' + usr.user_password);
      }

      res.json({
        success:true,
        result: {
          list: data
        }
      });

    }).then(function (err) {
      throw   err
    })

  }
}
