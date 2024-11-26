const Joi = require('joi');

const dimensoesSchema = Joi.object({
    altura: Joi.number().required(),
    largura: Joi.number().required(),
    profundidade: Joi.number().required(),
    unidadeMedida: Joi.string().required(),
});

const pesoSchema = Joi.object({
    valor: Joi.number().required(),
    unidadeMedida: Joi.string().required(),
});

const createProduto = {
    payload: Joi.object({
        id: Joi.string().required(),
        nome: Joi.string().required(),
        descricao: Joi.string().required(),
        categoria: Joi.string().required(),
        marca: Joi.string().required(),
        preco: Joi.number().required(),
        quantidadeEstoque: Joi.number().required(),
        codigoBarras: Joi.string().required(),
        dimensoes: dimensoesSchema,
        peso: pesoSchema,
        status: Joi.string().required(),
        dataCadastro: Joi.date().required(),
    }),
};

const updateProduto = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
    payload: Joi.object({
        nome: Joi.string(),
        descricao: Joi.string(),
        categoria: Joi.string(),
        marca: Joi.string(),
        preco: Joi.number(),
        quantidadeEstoque: Joi.number(),
        codigoBarras: Joi.string(),
        dimensoes: dimensoesSchema,
        peso: pesoSchema,
        status: Joi.string(),
    }),
};

const deleteProduto = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
};

const getProdutoPorId = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
};

const listProdutos = {
    query: Joi.object({
        categoria: Joi.string(),
        nome: Joi.string(),
    }),
};

module.exports = {
    createProduto,
    updateProduto,
    deleteProduto,
    getProdutoPorId,
    listProdutos,
};
