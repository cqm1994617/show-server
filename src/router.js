/**
 * Created by chenqiming on 16/4/11.
 */

import Router from 'koa-router';

import userRouter from './routers/route';

const router = new Router();

router.use('', userRouter.routes());

export default router;
