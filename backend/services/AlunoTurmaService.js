const database = require('../database/models/index');

const AlunoTurmaService = {
  getTurmas: async (id) => {
    const turma = await database.Turma.findAll({
      where: idUser == id
    });
    return turma;
  },
  getTurmaById: async (idTurma) => {
    const turmaId = await database.Turma.findByPk(idTurma);
    return turmaId;
  },
  createTurma: async (codigo, titulo) => {
    const novaTurma = await database.Turma.create({ codigo, titulo });
    return novaTurma;
  }
};

module.exports = AlunoTurmaService;