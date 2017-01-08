import  express from 'express';

import  handler  from '../controllers/users';
import logger from './../logger';
const router = express.Router();
router.prefix = '/users';

/* GET users listing. */
router.get('/users', handler.getAllUsers);
router.get('/data',(req,res,next) => {

    logger.error('啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦');
  
})
//router.post('/users/:id', handler.getAllUsers);
//router.put('/users/:id', handler.getAllUsers);
//router.delete('/user/:id', handler.getAllUsers);

export default router;
