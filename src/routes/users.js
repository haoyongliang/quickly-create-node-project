import  express from 'express';

import  handler  from '../controllers/users';

const router = express.Router();
router.prefix = '/api/users';

/* GET users listing. */
router.get('/users', handler.getAllUsers);
router.get('/data',(req,res,next) => {

})
//router.post('/users/:id', handler.getAllUsers);
//router.put('/users/:id', handler.getAllUsers);
//router.delete('/user/:id', handler.getAllUsers);

export default router;
