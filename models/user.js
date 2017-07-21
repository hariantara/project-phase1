'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    nama: DataTypes.STRING,
    telp: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = (models) =>{
    // User.hasMany(models.Teacher);
    User.belongsToMany(models.Stuff,{
      through: models.detailOrder, foreignKey: 'userId'});
    }

  return User;
};
