const database = require('../database/models/index');

const DocenteCursoService = {
	getDocenteCurso: async (id) => {
		const results = await database.Docente.findOne({
			where: { idDocente : id },
			attributes: [ "nome" ],
			include: [ { model: database.Curso, attributes: ["titulo"] } ]
		});
		return results;
	},
};

module.exports = DocenteCursoService;
