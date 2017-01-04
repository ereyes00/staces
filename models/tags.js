'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tags = sequelize.define('Tags', {
    title: DataTypes.STRING
    //body: DataTypes.STRING
  }
  // {
  //   classMethods: {
  //     associate: function(models) {
  //       // associations can be defined here
  //       Tags.hasMany(models.User)
  //     }
  //   }
  // }
  );
  return Tags;
};