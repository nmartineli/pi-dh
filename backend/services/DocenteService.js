const database = require('../database/models/index');

const DocenteService = {
    getDocentes: async () => {
        const resultados = await database.Docente.findAll();
        return resultados;
    },
    getDocentesByName: async (nome) => {
        const buscaDocente = await database.Docente.findOne({
            where: { nome: nome }
        });
        return buscaDocente;
    },
    getDocentesPage: async () => {
        const resultados = await database.Docente.findAll({ offset: 4, limit: 5 });
        return resultados;
    }
};

module.exports = DocenteService;