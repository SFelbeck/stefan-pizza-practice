const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model { }

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    }
)