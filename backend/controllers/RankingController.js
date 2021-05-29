const RankingService = require('../services/RankingService');

const RankingController = {
    index: async (req, res) => {
        const { id } = req.params;
        const rankResult = await RankingService.getRanking(id);
        return res.send(rankResult);
    }
}

module.exports = RankingController;