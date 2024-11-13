import { useEffect, useState } from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
    CircularProgress,
    Container
} from "@mui/material";

const BookingsTable = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('/api/getAllBookings');
            setBookings(response.data.data);
        } catch (error) {
            console.error("Error fetching bookings", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <Box sx={{ minHeight: '80vh', display: 'flex', paddingTop: "30px", bgcolor: '#f0f2f5' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom>
                    Bookings List
                </Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <TableContainer component={Paper} elevation={3} sx={{ maxHeight: '70vh', overflowY: 'auto' }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><strong>Booking ID</strong></TableCell>
                                    <TableCell align="center"><strong>First Name</strong></TableCell>
                                    <TableCell align="center"><strong>Last Name</strong></TableCell>
                                    <TableCell align="center"><strong>Vehicle Type</strong></TableCell>
                                    <TableCell align="center"><strong>Specific Model</strong></TableCell>
                                    <TableCell align="center"><strong>Start Date</strong></TableCell>
                                    <TableCell align="center"><strong>End Date</strong></TableCell>
                                    <TableCell align="center"><strong>Status</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bookings.map((booking) => (
                                    <TableRow key={booking.booking_id} hover>
                                        <TableCell align="center">{booking.booking_id}</TableCell>
                                        <TableCell align="center">{booking.first_name}</TableCell>
                                        <TableCell align="center">{booking.last_name}</TableCell>
                                        <TableCell align="center">{booking.type_of_vehicle?.vehicle_name}</TableCell>
                                        <TableCell align="center">{booking.specefic_model?.model_name}</TableCell>
                                        <TableCell align="center">{booking.start_date}</TableCell>
                                        <TableCell align="center">{booking.end_date}</TableCell>
                                        <TableCell align="center">{booking.status? "Booked": "Available"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Container>
        </Box>
    );
};

export default BookingsTable;
