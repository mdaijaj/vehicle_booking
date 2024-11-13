import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'
import Final from './final'
import MultiStepForm from './final';
import BookingTable from './table'

const Routing = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allquestion" element={<MultiStepForm />} />
        <Route path="/final" element={<Final />} />
        <Route path="/booking_table" element={<BookingTable />} />
      </Routes>
    </>
  )
}

export default Routing;