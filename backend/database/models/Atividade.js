module.exports = (sequelize, DataTypes) => {
    const Atividade = sequelize.define("Atividade", 
    {
        idAtividade: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING(450),
            allowNull: false
        },
        pontuacao: {
            type: DataTypes.INTEGER(),
            allowNull: false
        },
        dataInicio: {
            type: DataTypes.DATE(),
            allowNull: false
        },
        dataTermino: {
            type: DataTypes.DATE(),
            allowNull: false
        }
    },
    {
        tableName: 'ATIVIDADE',
        timestamps: false
    }
);

    Atividade.associate = function(models) {
        Atividade.belongsToMany(models.Aluno, {
            through: models.AlunoAtividade,
            foreignkey: 'ID_ATIVIDADE',
            otherKey: 'ID_ALUNO'
        });
    }

    return Atividade;
}