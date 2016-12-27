import express from 'express';

import * as handler from '../controllers/index';

const router =  express.Router();
/* GET home page. */
router.get('/', handler.homePage);

export default router;
