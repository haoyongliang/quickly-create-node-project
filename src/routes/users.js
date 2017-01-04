import  express from 'express';

import  handler  from '../controllers/users';

const router = express.Router();

/* GET users listing. */
router.get('/users', handler.getAllUsers);
//router.post('/users/:id', handler.getAllUsers);
//router.put('/users/:id', handler.getAllUsers);
//router.delete('/user/:id', handler.getAllUsers);

export default router;
