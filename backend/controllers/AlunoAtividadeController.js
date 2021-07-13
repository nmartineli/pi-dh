const AlunoAtividadeService = require('../services/AlunoAtividadeService');
const AlunoTurmaService = require('../services/AlunoTurmaService');

const AlunoAtividadeController = {
    index: (req, res) => {
        return res.render('dashboard-aluno/aluno-atividades-dashboard');
    },
    getAllActivities: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser, nome } = req.user;
        const data = await AlunoAtividadeService.getActivities(idTurma);
        const subscribed = await AlunoAtividadeService.getSubscribed(idUser);
        const classes = await AlunoTurmaService.getClassById(idTurma);

        return res.render('dashboard-aluno/aluno-atividades-dashboard', 
        { 
            data,
            subscribed,
            nome,
            classes
        });
    },
    getActivityById: async (req, res) => {
        const { id, idTurma } = req.params;
        const { idUser, nome } = req.user;
        const data = await AlunoAtividadeService.getActivityById(id);
        const classes = await AlunoTurmaService.getClassById(idTurma);

        return res.render('dashboard-aluno/aluno-atividade-dashboard', 
        {
            data,
            nome,
            classes
        });
    },
    sendActivity: async (req, res) => {    
        const { id, idTurma } = req.params;
        const { textField } = req.body;
        await AlunoAtividadeService.sendActivity(id, textField);
        
        return res.redirect(`/dashboard/aluno/turmas/${idTurma}/atividades`);
    },
    enrollActivity: async (req, res) => {
        const { idAtividade, idTurma } = req.params;
        const { idUser, nome } = req.user;
        const data = await AlunoAtividadeService.getActivity(idAtividade);
        const classes = await AlunoTurmaService.getClassById(idTurma);
        return res.render('dashboard-aluno/aluno-aceitar-dashboard',
        {
            data,
            classes,
            nome
        });
    },
    createAssociation: async (req, res) => {
        const { idAtividade, idTurma } = req.params;
        const { idUser } = req.user;
        await AlunoAtividadeService.createAssociation(idUser, idAtividade);
        return res.redirect(`/dashboard/aluno/turmas/${idTurma}/atividades`);
    },
    destroyAssociation: async (req, res) => {
        const { idTurma } = req.params;
        const { id } = req.params;
        await AlunoAtividadeService.destroyAssociation(id);
        return res.redirect(`/dashboard/aluno/turmas/${idTurma}/atividades`);
    }
};

module.exports = AlunoAtividadeController;
