/**
 * Created by chenqiming on 16/4/13.
 */

import Router from 'koa-router';
import {
    User, sequelize
} from '../../models';
import StatusError from '../utils/StatusError';

const router = new Router();
export default router;

router.get('/', function (ctx, next) {

});

router.get('/user/:id/:dd', function (ctx, next) {
    ctx.body = {
        id: ctx.params.id.split('=')[1],
        dd: ctx.params.dd.split('=')[1]
    }
});

router.get('/query', async ctx => {
    const app = await User.findById(1);

    ctx.body = app.get({plain: true});

    /*var User = sequelize.define('user', {
     username: Sequelize.STRING,
     birthday: Sequelize.DATE
     });

     await sequelize.transaction(async transaction=>{
     const { dataValues } = await User.findOne({where: {id: 1}, transaction});
     console.log(dataValues);
     ctx.body = dataValues.id;
     });*/
});

router.post('/insert', function (ctx, next) {
    ctx.body = "insert";

    /*var User = sequelize.define('user', {
     username: Sequelize.STRING,
     birthday: Sequelize.DATE
     });

     sequelize.sync().then(function() {
     return User.create({
     username: '',
     birthday: new Date(1980, 6, 20)
     });
     }).then(function(jane) {
     console.log(jane.get({
     plain: true
     }));
     });*/
});