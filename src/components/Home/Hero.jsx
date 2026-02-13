import OrderBtn from "../Common/OrderBtn"
import ViewMenuBtn from "../Common/ViewMenuBtn"


import "./Hero.css"

const Hero = () => {
    const scrollToReservations = () => {
        // setIsMobileMenuOpen(false);
        document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='hero' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.58),rgba(0, 0, 0, 0.296)) , url(./home.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: "100vh",
            width: "100%",
        }}>
            <div className="home-hero-container">


                <p className="welcome">Welcome to Tandoori Restaurant</p>
                <h1>Authentic Flavors</h1>
                <h3>Experience the taste of tradition</h3>
                <div className="btn-Section">
                    <ViewMenuBtn btnText={"View Menu"} />
                    <button className="ReserveBtn" onClick={() => scrollToReservations()} >Resverse Table</button>
                </div>
            </div>
        </div>
    )
}

export default Hero