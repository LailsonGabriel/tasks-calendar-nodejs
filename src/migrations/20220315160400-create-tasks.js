'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const TasksTable = queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      dateAndHour: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'date_and_hour',
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      resolved: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'id_user',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    });

    return TasksTable;
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Tasks');
  },
};
