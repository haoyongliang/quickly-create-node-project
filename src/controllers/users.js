import User from '../mapper/userMapper'
import logger from '../logger';


  export default  {

  getAllUsers: function (req, res, next) {
    logger.debug('This is getAllUsers');
    let data = [1,2,3]

      res.json({
        success:true,
        result: {
          list: data
        }
      });


  }
}
