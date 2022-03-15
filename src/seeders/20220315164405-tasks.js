'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Tasks', [
      {
        title: 'My First Task',
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        dateAndHour: new Date('2022-04-15 06:00:00'),
        duration: 60,
        idUser: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Tasks', null, {});
  },
};
