import  express from 'express';

import  * as handler from '../controllers/users';

const router = express.Router();

/* GET users listing. */
router.get('/add', handler.add);

export default router;
              