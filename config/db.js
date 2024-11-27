const Sequelize = require('sequelize');
const envConfig = require('./envs-config');

const sequelizeConfig = {
    dialect: 'postgres',
    port: envConfig.database.port,
    host: envConfig.database.host,
    logging: console.log
};

//database, usuario, senha
const sequelize = new Sequelize(envConfig.database.name, 
                                envConfig.database.user,
                                envConfig.database.password, 
                                sequelizeConfig);

                                sequelize.authenticate()
                                .then(() => console.log('Conexão com o banco de dados foi bem-sucedida.'))
                                .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = {sequelize};