import { useState } from "react";
import axios from "axios";
import { Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Step5 = ({ payload, onPrevious }) => {
    const [data, setData] = useState({ start_date: "", end_date: "" });
    const navigate= useNavigate(); 

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalPayload = { ...payload, ...data };
        try {
            const res = await axios.post('/api/createBooking', finalPayload);
            if (res.status === 200) {
                toast.success('Data submitted successfully!', { autoClose: 5000 })
                navigate('/booking_table')
            } else {
                toast.warning('Submission failed', { autoClose: 5000 })                
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error('This date allready Booked. Please try other date.', { autoClose: 1500 })
        }
    };

    return (
        <div>
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Step 5: Date Information
            </Typography>
            <TextField
                label="Start Date"
                type="date"
                name="start_date"
                value={data.start_date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                fullWidth
            />
            <TextField
                label="End Date"
                type="date"
                name="end_date"
                value={data.end_date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                fullWidth
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Button variant="outlined" color="primary" onClick={onPrevious}>
                    Previous
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </Box>
        <ToastContainer />
        </div>
    );
};

export default Step5;
