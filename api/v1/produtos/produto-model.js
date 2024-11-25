const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Product = database.sequelize.define('Product', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: Sequelize.STRING,
  categoria: Sequelize.STRING,
  marca: Sequelize.STRING,
  preco: Sequelize.FLOAT,
  quantidadeEstoque: Sequelize.INTEGER,
  codigoBarras: Sequelize.STRING,
  dimensoes: {
    type: Sequelize.JSON,
  },
  peso: {
    type: Sequelize.JSON,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'ativo',
  },
  dataCadastro: {
    type: Sequelize.DATE,
    defaultValue: Data.now,
  },
});

module.exports = Product;
