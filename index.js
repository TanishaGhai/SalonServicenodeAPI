const database= require('./Infra/database');
const server=require('./Infra/server');

server.init();
database.init();