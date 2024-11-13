
const Home= ()=>{

    let img_obj={
        width: "100%", 
        padding: "10px"
    }

    let h2_obj={
        textAlign: "center", 
        padding: "10px"
    }
    
   return (
    <>
        <h2 style={h2_obj}>Welcome To Car Booking App</h2>
        <div className="main">
            <img src="https://athemes.com/wp-content/uploads/Etalon-car-rental-wordpress-theme.jpg" style={img_obj}/>
        </div>
    </>
   ) 
}

export default Home;