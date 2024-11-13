import { useState } from "react";
import { Typography, Radio, RadioGroup, FormControl, FormControlLabel, Button, Box } from "@mui/material";

const Step2 = ({ onNext, onPrevious }) => {
    const [data, setData] = useState({ no_of_wheel: "" });

    const handleChange = (e) => {
        setData({ no_of_wheel: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(data);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400, margin: '0 auto' }}
        >
            <Typography variant="h5" align="center" style={{paddingTop: "40px"}} gutterBottom>
                Step 2: Number of Wheels
            </Typography>
            <FormControl component="fieldset">
                <RadioGroup name="no_of_wheel" value={data.no_of_wheel} onChange={handleChange}>
                    <FormControlLabel value="2" control={<Radio required />} label="2 Wheeler" />
                    <FormControlLabel value="4" control={<Radio required />} label="4 Wheeler" />
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

export default Step2;
