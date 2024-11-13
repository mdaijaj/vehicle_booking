import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Radio, RadioGroup, FormControl, FormControlLabel, Button, Box } from "@mui/material";

const Step3 = ({ onNext, onPrevious, selectedWheel }) => {
    const [data, setData] = useState({ type_of_vehicle_id: "" });
    const [vehicleTypelist, setVehicleTypelist] = useState([]);

    const handleChange = (e) => {
        setData({ type_of_vehicle_id: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(data);
    };

    const apiCall = async () => {
        try {
            const response = await axios.get(`/api/getAllVehicleTypes?no_of_wheeler=${selectedWheel}`);
            setVehicleTypelist(response.data.data);
        } catch (error) {
            console.error("Error fetching vehicle types", error);
        }
    };

    useEffect(() => {
        if (selectedWheel) {
            apiCall();
        }
    }, [selectedWheel]);

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400, margin: '0 auto' }}
        >
            <Typography variant="h5" align="center" style={{paddingTop: "40px"}} gutterBottom>
                Step 3: Type of Vehicle
            </Typography>
            <FormControl component="fieldset">
                <RadioGroup
                    name="type_of_vehicle_id"
                    value={data.type_of_vehicle_id}
                    onChange={handleChange}
                >
                    {vehicleTypelist.map((item) => (
                        <FormControlLabel
                            key={item.vehicle_id}
                            value={item.vehicle_id.toString()}
                            control={<Radio required />}
                            label={item.vehicle_name}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" color="primary" onClick={onPrevious}>
                    Previous
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default Step3;
