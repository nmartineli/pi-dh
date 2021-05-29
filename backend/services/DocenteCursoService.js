const database = require('../database/models/index');

const DocenteCursoService = {
	getDocenteCurso: async (id) => {
		const results = await database.Docente.findAll({
			where: { idDocente : id },
			include: database.Curso
		});
		return results;
	},
};

module.exports = DocenteCursoService;
