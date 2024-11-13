const db = require('../models');
const Booking = db.bookingModel;
const TypeOfVehicle= db.typeOfVehicleModel;
const SpecificModel= db.speceficModel;
const { Op } = require('sequelize');


function normalizeDate(date) {
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0); 
  return normalizedDate;
}
  
exports.createBooking = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      no_of_wheel,
      type_of_vehicle_id,
      specific_model_id,
      start_date,
      end_date,
      status,
    } = req.body;

    
    const startDate = normalizeDate(start_date);
    const endDate = normalizeDate(end_date);

    const existingBooking = await Booking.findOne({
      where: {
        type_of_vehicle_id,
        specific_model_id,
        [Op.or]: [
          {
            start_date: {
              [Op.between]: [startDate, endDate],
            },
          },
          {
            end_date: {
              [Op.between]: [startDate, endDate],
            },
          },
          {
            [Op.and]: [
              { start_date: { [Op.lte]: startDate } },
              { end_date: { [Op.gte]: endDate } },
            ],
          },
          {
            [Op.and]: [
              { start_date: startDate },
              { end_date: endDate },
            ],
          },
        ],
      },
    });

    if (existingBooking) {
      return res.status(400).json({
        message: 'Booking conflict: The selected date range overlaps with an existing booking.',
      });
    }

    const newBooking = await Booking.create({
      first_name,
      last_name,
      no_of_wheel,
      type_of_vehicle_id,
      specific_model_id,
      start_date: startDate, 
      end_date: endDate,     
      status: status || true,
    });
    return res.status(200).json({
      message: 'Car booked successfully!',
      data: newBooking,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create booking',
      error: error.message,
    });
  }
};
  


exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        {
          model: TypeOfVehicle,
          attributes: ['vehicle_id', "vehicle_name"], 
        },
        {
          model: SpecificModel,
          attributes: ['model_id', "model_name"], 
        }
      ],
    });
    return res.status(200).json({ message: "car booked successfully!", data: bookings });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve bookings', error: error.message });
  }
};

