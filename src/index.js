import app from './app';
import path from 'path';
import doMigrate from './utils/doMigrate';
import {
  User,
  sequelize
} from '../models';
//import Sequelize from 'sequelize';

//var sequelize = new Sequelize('show_development', 'root', '86163169');

async function main() {
  const port = process.env['PORT'] || 3000;
  const host = process.env['HOST'] || '';

  await doMigrate();
  await new Promise((res, rej) => {
    const server = app.listen(port, host, res);
    server.on('error', rej);
  });
  console.log('Ready!');
}

main()
  .catch(err => {
    setImmediate(() => {
      throw err;
    });
  });