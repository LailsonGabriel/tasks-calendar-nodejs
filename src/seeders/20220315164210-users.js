'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users', [
      {
        name: 'Lailson Gabriel',
        email: 'lailson@gmail.com',
        password: 'lailson',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', null, {});
  },
};
