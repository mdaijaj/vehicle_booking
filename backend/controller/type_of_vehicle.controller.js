const db = require('../models');
const TypeOfVehicle = db.typeOfVehicleModel;


exports.createVehicleType = async (req, res) => {
  try {
    const { vehicle_name, no_of_wheeler, description, seating_capacity, status } = req.body;
    const newVehicleType = await TypeOfVehicle.create({
      vehicle_name,
      no_of_wheeler,
      description,
      seating_capacity,
      status: status !== undefined ? status : true,
    });
    return res.status(201).json({message: "create vehcle type created successfully!", data: newVehicleType })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create vehicle type', error: error.message });
  }
};


exports.getAllVehicleTypes = async (req, res) => {
    try {
      const { no_of_wheeler } = req.query;
      const filter = {};
      if (no_of_wheeler) {
        filter.no_of_wheeler = no_of_wheeler;
      }
  
      const vehicleTypes = await TypeOfVehicle.findAll({
        where: filter,
      });
      return res.status(200).json({message: "Fetch vehcle type successfully!", data: vehicleTypes })
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve vehicle types', error: error.message });
    }
  };
  
