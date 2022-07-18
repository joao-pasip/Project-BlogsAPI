'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
*/

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'Users',
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { as: 'blogPosts', foreignKey: 'userId' })
  }

  return User;
}

module.exports = User;