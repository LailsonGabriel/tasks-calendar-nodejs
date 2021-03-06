module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  Users.associate = (models) => {
    Users.hasMany(models.Tasks, { foreignKey: 'id_user', as: 'tasks' });
  };

  return Users;
};
