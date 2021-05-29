module.exports = (sequelize, DataTypes) => {
    const AlunoAtividade = sequelize.define("AlunoAtividade", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    },
    {
        tableName: 'ALUNO_ATIVIDADE',
        timestamps: false,
    }
    );

    AlunoAtividade.associate = function(models) {
        AlunoAtividade.belongsTo(models.Aluno, {
            as: 'aluno',
            foreignKey: 'ID_ALUNO'
        });
        AlunoAtividade.belongsTo(models.Atividade, {
            as: 'atividade',
            foreignKey: 'ID_ATIVIDADE'
        });
    }

    return AlunoAtividade;
};