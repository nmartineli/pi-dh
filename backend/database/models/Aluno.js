module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define("Aluno", 
    {
        idAluno: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
    },
    {
        tableName: 'ALUNO',
        timestamps: false,
    }
);

    Aluno.associate = function(models) {
        Aluno.belongsToMany(models.Atividade, {
            through: models.AlunoAtividade,
            foreignKey: 'ID_ALUNO',
            otherKey: 'ID_ATIVIDADE'
        });
    }

    return Aluno;
}