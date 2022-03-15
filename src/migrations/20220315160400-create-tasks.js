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
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });

    return TasksTable;
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('Tasks');
  },
};
