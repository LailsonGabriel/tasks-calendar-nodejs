const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.Task, { foreignKey: 'user_id', as: 'tasks' });
  };

  return User;
};

module.exports = User;
