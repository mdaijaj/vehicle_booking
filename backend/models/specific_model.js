
module.exports = (sequelize,Sequelize) => {
    const speceficModelTable = sequelize.define("specefic_model", {
        model_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        model_name:{
            type:Sequelize.STRING,
        },
        model_no: {
           type: Sequelize.INTEGER
        },
        year: {
            type: Sequelize.INTEGER,
        },
        description: {
            type: Sequelize.STRING,
        },
        seatingCapacity: {
            type: Sequelize.INTEGER,
        },
        type_of_vehicle_id: {
            type: Sequelize.INTEGER,
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true
        },
    })
    return speceficModelTable;
    }