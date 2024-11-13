const config = require("../config/db");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.typeOfVehicleModel = require("./type_of_vehicle")(sequelize, Sequelize);
db.speceficModel = require("./specific_model")(sequelize, Sequelize);
db.bookingModel = require("./booking_model")(sequelize, Sequelize);


/////////////////////////////// Relation ///////////////////////////////

db.bookingModel.belongsTo(db.typeOfVehicleModel, { foreignKey: 'type_of_vehicle_id' });
db.bookingModel.belongsTo(db.speceficModel, { foreignKey: 'specific_model_id' });

module.exports = db;