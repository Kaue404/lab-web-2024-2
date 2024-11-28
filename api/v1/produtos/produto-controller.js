const produtoBusiness = require('./produto-business');

const createProduto = async (request, h) => {
    const result = await produtoBusiness.save(request.payload);
    return h.response(result).code(201);
};

const updateProduto = async (request, h) => {
    const { id } = request.params;
    const result = await produtoBusiness.update(id, request.payload);
    return h.response(result).code(200);
};

const deleteProduto = async (request, h) => {
    const { id } = request.params;
    await produtoBusiness.remove(id);
    return h.response().code(204);
};

const getProdutoPorId = async (request, h) => {
    const { id } = request.params;
    const result = await produtoBusiness.getById(id);
    if (result) {
        return h.response(result).code(200);
    }
    return h.response().code(404);
};

const listProdutos = async (request, h) => {
    const result = await produtoBusiness.list(request.query);
    return h.response(result).code(200);
};

module.exports = {
    createProduto,
    updateProduto,
    deleteProduto,
    getProdutoPorId,
    listProdutos,
};
