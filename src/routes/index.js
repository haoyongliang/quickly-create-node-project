import express from 'express';

import * as handler from '../controllers/index';

const router =  express.Router();
router.prefix = '/';

/* GET home page. */
router.get('/', handler.homePage);
router.get('/home',(req,res,next)=>{
    console.log(22);
  })

export default router;
