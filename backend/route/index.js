const typeOfVehicle = require("../controller/type_of_vehicle.controller");
const specificModel = require("../controller/specific_model.controller");
const booking= require("../controller/booking.controller")

module.exports = function (app) {

  app.post('/api/createVehicleType', typeOfVehicle.createVehicleType);
  app.get('/api/getAllVehicleTypes', typeOfVehicle.getAllVehicleTypes);

  app.post('/api/createSpecificModel', specificModel.createSpecificModel);
  app.get('/api/getSpecificModelsByVehicleId/:vehicle_type_id', specificModel.getSpecificModelsByVehicleId);

  app.post('/api/createBooking', booking.createBooking);
  app.get('/api/getAllBookings', booking.getAllBookings);

  


}