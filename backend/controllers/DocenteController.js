const DocenteService = require('../services/DocenteService');

const controller = {
    index: async (req, res) => {
        const list = await DocenteService.getDocentes();
        return res.json(list);
    },
    limit: async (req, res) => {
        const listLimit = await DocenteService.getDocentesPage();
        return res.json(listLimit);
    },
    searchName: async (req, res) => {
        const { nome } = req.params;
        const searchName = await DocenteService.getDocentesByName(nome);
        return res.json(searchName);
    }
};

module.exports = controller;