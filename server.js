const Hapi = require('@hapi/hapi');
const routes = require('./config/routes');
const config = require('./config/envs-config');


const server = Hapi.server({
    port: config.port,
    host: config.host
});

//apresenta as rotas http mapeadas ao hapi
routes.forEach((path) => server.route(path));

module.exports = server;
