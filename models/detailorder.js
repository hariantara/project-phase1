'use strict';
module.exports = function(sequelize, DataTypes) {
  var detailOrder = sequelize.define('detailOrder', {
    clientId: DataTypes.INTEGER,
    stuffId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  });

  detailOrder.associate = (models)=>{
    detailOrder.belongsTo(models.User, {foreignKey: 'userId'})
    detailOrder.belongsTo(models.Stuff, {foreignKey: 'stuffId'})
  }

  return detailOrder;
};
