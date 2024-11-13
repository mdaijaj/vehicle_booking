import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Radio, RadioGroup, FormControl, FormControlLabel, Button, Box } from "@mui/material";

const Step4 = ({ onNext, onPrevious, vehicle_type_id }) => {
    const [data, setData] = useState({ specific_model_id: "" });
    const [modelList, setModelList] = useState([]);

    const handleChange = (e) => {
        setData({ specific_model_id: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(data);
    };

    const apiCall = async () => {
        try {
            const response = await axios.get(`/api/getSpecificModelsByVehicleId/${parseInt(vehicle_type_id)}`);
            setModelList(response.data.data); 
        } catch (error) {
            console.error("Error fetching specific models", error);
        }
    };

    useEffect(() => {
        if (vehicle_type_id) {
            apiCall();
        }
    }, [vehicle_type_id]); 

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400, margin: '0 auto' }}
        >
            <Typography variant="h5" align="center" style={{paddingTop: "40px"}} gutterBottom>
                Step 4: Specific Model
            </Typography>
            <FormControl component="fieldset">
                <RadioGroup
                    name="specific_model_id"
                    value={data.specific_model_id}
                    onChange={handleChange}
                >
                    {modelList.map((item) => (
                        <FormControlLabel
                            key={item.model_id}
                            value={item.model_id.toString()}
                            control={<Radio required />}
                            label={item.model_name}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
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

export default Step4;
