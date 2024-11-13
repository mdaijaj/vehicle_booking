# Vehicle Booking
## Project Overview
This project is a vehicle rental application that enables users to book a vehicle by selecting vehicle type, specific model, and rental dates. 
It features a multi-step form for collecting booking details and a backend to manage vehicle availability and bookings.

## Technologies Used
- Nodejs Express - Backend framework
- JavaScript - Programming language
- MySQL - Relational database (or preferred alternative)
- ORM - Sequlize ORM

## Features
Multi-step form interface with one question per screen
Dynamic data fetching for vehicle types and models based on user input
Backend validation to prevent overlapping bookings
Database seeding for initial data setup

## Validation and Error Handling
Frontend: Each question must be answered before proceeding to the next step. Error messages are shown for any missing input.
Backend: Validates booking dates to prevent overlaps.

Create a MySQL database named vehicle_booking.
## Create a table with the following schema:
- type_of_vehicle -
- specefic_model -
- booking -

### Relations and Association with Tables:-
One to One 
Many to One


### API Endpoints
Vehicle Type API (Get `/api/getAllVehicleTypes`) <br/>
(POST `/api/createVehicleType`)
- Request Body:
    - vehicle_name - Vehicle's vehicle_name
    - no_of_wheeler - Vehicle's no_of_wheeler
    - description - Vehicle's description
    - seating_capacity - Vehicle's seating_capacity
- Response:
    - JSON response with the new Vehicle’s details.
- Functionality:
    - Inserts the new Vehicle into the Vehicle’s details.
    - Returns a success response with Vehicle’s details.

2. Specefic Model API (Get `/api/getSpecificModelsByVehicleId/:vehicle_type_id`) <br/>
    (POST `/api/createSpecificModel`)
- Request Body:
    - model_name - SpecificModel's model_name
    - model_no - SpecificModel's model_no
    - year - SpecificModel's year
    - description - SpecificModel's description
    - seatingCapacity - SpecificModel's seatingCapacity
    - type_of_vehicle_id - SpecificModel's type_of_vehicle_id
- Response:
    - JSON response with SpecificModel details  is successful.
    - Functionality:
    - Retrieves the SpecificModel from the database.
    - Returns a success response with SpecificModel details on successful.

3. Booking API (Get `/api/getAllBookings`) <br/>
    (POST `/api/createBooking`)
- Request Body:
    - first_name - Booking's first_name
    - last_name - Booking's last_name
    - no_of_wheel - Booking's no_of_wheel
    - type_of_vehicle_id - Booking's type_of_vehicle_id
    - specefic_model_id - Booking's specefic_model_id
    - start_date - Booking's start_date
    - end_date - Booking's end_date
- Response:
    - JSON response with Booking details  is successful.
    - Functionality:
    - Retrieves the Booking from the database.
    - Returns a success response with Booking details on successful.

## Project Setup
### Backend:-
Clone the repository and navigate to the project directory:
```
git clone https://github.com/mdaijaj/vehicle_booking.git
```
cd `vehicle_booking/backend`
Install dependencies:
```
yarn install or npm install 
```
Set up environment variables (e.g., database connection settings) in .env:
```
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=aijaj123
DATABASE_NAME=vehicle_booking
```

Start the server:
```
yarn run start or npm start
```
```
http://localhost:5000
```

### Frontend:-

cd `vehicle_booking/frontend`
Install dependencies:-
```
yarn install or npm install 
```

Start the server:
```
npm run start
```
```
http://localhost:3000
```
Testing

Unit Tests: Write tests for controllers, services, and entities to verify proper functionality and error handling.
Integration Tests: Use Jest or similar frameworks to simulate API requests and ensure correct response handling.

