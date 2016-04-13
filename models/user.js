'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: '姓名'
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '生日'
    },

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};