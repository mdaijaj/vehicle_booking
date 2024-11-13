const db = require('../models');
const SpecificModel = db.speceficModel;

exports.createSpecificModel = async (req, res) => {
  try {
    const { model_name, model_no, year, description, seatingCapacity, type_of_vehicle_id, status } = req.body;
    const newModel = await SpecificModel.create({
      model_name,
      model_no,
      year,
      description,
      seatingCapacity,
      type_of_vehicle_id,
      status: status || true,
    });
    return res.status(201).json({message: "create vehcle type created successfully!", data: newModel })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create specific model', error: error.message });
  }
};


exports.getSpecificModelsByVehicleId = async (req, res) => {
    try {
      const vehicle_type_id = req.params.vehicle_type_id;
  
      const models = await SpecificModel.findAll({
        where: { type_of_vehicle_id: vehicle_type_id },
      });
  
      if (models.length === 0) {
        return res.status(404).json({ message: 'No models found for this vehicle type' });
      }
      return res.status(201).json({message: "create vehcle type created successfully!", data: models })
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve specific models', error: error.message });
    }
};
  