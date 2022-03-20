'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    users_id: DataTypes.INTEGER,
    books_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    order_at: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};