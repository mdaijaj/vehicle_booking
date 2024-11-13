const specific_model = require("./specific_model");
const type_of_vehicle = require("./type_of_vehicle");

module.exports = (sequelize,Sequelize) => {
    const bookingModelTable = sequelize.define("booking", {
        booking_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        first_name:{
            type:Sequelize.STRING,
        },
        last_name: {
           type: Sequelize.STRING
        },
        no_of_wheel: {
            type: Sequelize.INTEGER,
        },
        type_of_vehicle_id: {
            type: Sequelize.INTEGER,
        },
        specific_model_id: {
            type: Sequelize.INTEGER,
        },
        start_date: {
            type: Sequelize.DATEONLY,
        },
        end_date: {
            type: Sequelize.DATEONLY,
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true
        },
    })
    return bookingModelTable;
    }