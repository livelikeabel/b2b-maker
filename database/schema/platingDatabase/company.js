const { DataTypes } = require('sequelize');

module.exports = seq => 
    seq.define(
        'company',
        {
            id: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'idx',
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,           
            },
            engName: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'eng_name',
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            roadNameAddress: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'road_name_address',
            },
            addressDetail: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'address_detail',
            },
            inUse: {
                type: DataTypes.INTGER(1),
                allowNull: false,
                field: 'in_use',
            },
            area: {
                type: DataTypes.STRING,
                allowNull: false,   
            },
            lunchDeliveryAvailable: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                field: 'lunch_delivery_available',
            },
            deliveryAvailable: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'delivery_available',
            },
            lat: {
                type: DataTypes.INTREGER(11),
                allowNull: false,
            },
            lon: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            }
        },
        {
            tableName: 'company',
            timestamps: false
        }
    );