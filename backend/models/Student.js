const {DataTypes} = require('sequelize')

const Student = sequelize.define('Student',{
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    dni:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Student