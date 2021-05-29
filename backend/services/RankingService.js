const database = require('../database/models/index');

const RankingService = {
    getRanking: async (id) => {
        const rankPoints = await database.Aluno.findAll({
            where: { idAluno : id },
            include: database.Atividade
        })
        return rankPoints;
    }
}

module.exports = RankingService;