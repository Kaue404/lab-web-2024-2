const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
   id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
   },
   nome: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
   },
   categoria: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   marca: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   preco: {
      type: Sequelize.FLOAT,
      allowNull: false,
   },
   quantidadeEstoque: {
      field: 'quantidade_estoque',
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   codigoBarras: {
      field: 'codigo_barras',
      type: Sequelize.STRING,
      allowNull: false,
   },
   dimensoes: {
      type: Sequelize.JSON,
      allowNull: false,
   },
   peso: {
      type: Sequelize.JSON,
      allowNull: false,
   },
   status: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   dataCadastro: {
      field: 'data_cadastro',
      type: Sequelize.DATE,
      allowNull: false,
   },
}, {
   tableName: 'produto',
   timestamps: false,
});

module.exports = { Produto };
