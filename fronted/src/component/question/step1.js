import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Step1 = ({ onNext }) => {
    const [data, setData] = useState({ first_name: "", last_name: "" });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Data processing successfully!', { autoClose: 1500 })
        onNext(data);
    };

    return (
        <div>
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400, margin: '0 auto' }}
        >
            <Typography variant="h5" align="center" style={{paddingTop: "40px"}} gutterBottom>
                Step 1: What is your Name?
            </Typography>
            <TextField
                label="First Name"
                name="first_name"
                value={data.first_name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                label="Last Name"
                name="last_name"
                value={data.last_name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Next
            </Button>
        </Box>
        <ToastContainer />
        </div>
    );
};

export default Step1;
