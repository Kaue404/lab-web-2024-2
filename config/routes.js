const aluno = require('../api/v1/alunos/aluno-routes');
const produto = require('../api/v1/produtos/produto-routes');

const routes = [
    ...aluno,
    ...produto
]

module.exports = routes;