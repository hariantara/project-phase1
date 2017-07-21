'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stuff = sequelize.define('Stuff', {
    type: DataTypes.STRING,
    price: DataTypes.INTEGER
  });

  Stuff.associate = (models) =>{
    // User.hasMany(models.Teacher);
    Stuff.belongsToMany(models.User,{
      through: models.detailOrder, foreignKey: 'stuffId'});
    }

  return Stuff;
};
