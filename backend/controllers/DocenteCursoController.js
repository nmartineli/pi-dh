const DocenteCursoService = require('../services/DocenteCursoService');

const DocenteCursoController = {
    index: async (req, res) => {
        const { id } = req.params;
        const results = await DocenteCursoService.getDocenteCurso(id);
        console.log(results[0].nome);
        return res.send(results);
    }
}

module.exports = DocenteCursoController;