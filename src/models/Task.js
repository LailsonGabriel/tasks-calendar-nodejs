const Task = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Tasks',
    {
      id: DataTypes.INTEGER,
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

  Task.associate = (models) => {
    Task.belongsTo(models.Users, {
      foreignKey: 'id_user',
      as: 'Users',
    });
  };

  return Task;
};

module.exports = Task;
