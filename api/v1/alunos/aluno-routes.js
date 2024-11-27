const alunoController = require("./aluno-controller");
const alunoSchema = require("./aluno-schema");

const baseVersion = '/api/v1';

const routes = [
   
    {
        method: "GET",
        path: `${baseVersion}/alunos`,
        options: {
            handler: alunoController.getAlunos,
            validate: alunoSchema.consultarAlunos
        }
    },
    {
        method: "GET",
        path: `${baseVersion}/alunos/{id}`,
        options: {
            handler: alunoController.alunoPorId,
            validate: alunoSchema.consultaPorId
        }
    },
    {
        method: "POST",
        path: `${baseVersion}/alunos`,
        options: {
            handler: alunoController.createAluno,
            validate: alunoSchema.createAluno
        }
    }
];

module.exports = routes;