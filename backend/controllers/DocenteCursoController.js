const DocenteCursoService = require('../services/DocenteCursoService');

const DocenteCursoController = {
    index: async (req, res) => {
        const { id } = req.params;
        const results = await DocenteCursoService.getDocenteCurso(id);
        return res.send(results);
    }
}

module.exports = DocenteCursoController;