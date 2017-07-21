'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */ return queryInterface.bulkInsert("Stuff",[{
        type : "Blazer",
        price : 40000,
        createdAt: new Date(),
        updatedAt: new Date()
  },{
        type : "Kebaya",
        price : 90000,
        createdAt: new Date(),
        updatedAt: new Date()
  },{
        type : "Jaket Kulit",
        price : 80000,
        createdAt: new Date(),
        updatedAt: new Date()
  }] )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
