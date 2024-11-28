const produtoModel = require('./produto-model');

const save = async (produto) => {
    return await produtoModel.Produto.create(produto);
};

const update = async (id, dados) => {
    const produto = await produtoModel.Produto.findByPk(id);
    if (!produto) throw new Error("Produto não encontrado");

    return await produto.update(dados);
};

const remove = async (id) => {
    const produto = await produtoModel.Produto.findByPk(id);
    if (!produto) throw new Error("Produto não encontrado");

    await produto.destroy(); // Para remoção física
    // produto.status = 'inativo'; // Para remoção lógica
    // await produto.save();
};

const getById = async (id) => {
    return await produtoModel.Produto.findByPk(id);
};

const list = async (filters) => {
    const { categoria, nome } = filters;
    const where = {};

    if (categoria) where.categoria = categoria;
    if (nome) where.nome = { [Sequelize.Op.like]: `%${nome}%` };

    return await produtoModel.Produto.findAll({ where });
};

module.exports = { save, update, remove, getById, list };
