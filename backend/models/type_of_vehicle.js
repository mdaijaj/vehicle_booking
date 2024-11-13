
module.exports = (sequelize,Sequelize) => {
    const typeOfVehicleTable = sequelize.define("type_of_vehicle", {
        vehicle_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        vehicle_name:{
            type:Sequelize.STRING,
        },
        no_of_wheeler: {
           type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING,
        },
        seating_capacity: {
            type: Sequelize.INTEGER,
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true
        },
    })
    return typeOfVehicleTable;
    }