const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const Expense = require('./Expense');
const Category = require('./Category');
const PaymentMethod = require('./PaymentMethod');
const Budget = require('./Budget');

// Define relationships here
User.hasMany(Expense, { foreignKey: 'user_id' });
Expense.belongsTo(User, { foreignKey: 'user_id' });
// ... other associations

const db = {
  sequelize,
  Sequelize,
  User,
  Expense,
  Category,
  PaymentMethod,
  Budget
};

module.exports = db;
