module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    'Tasks',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      dateAndHour: {
        type: DataTypes.DATE,
        field: 'date_and_hour',
      },
      duration: DataTypes.INTEGER,
      idUser: {
        type: DataTypes.INTEGER,
        field: 'id_user',
      },
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
