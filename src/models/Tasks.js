module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    'Tasks',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      dateAndHour: DataTypes.DATE,
      duration: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    },
  );

  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users, {
      foreignKey: 'id_user',
      as: 'Users',
    });
  };

  return Tasks;
};
