import OrderBtn from "../Common/OrderBtn"
import ViewMenuBtn from "../Common/ViewMenuBtn"


import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero'>
            <p className="welcome">Welcome to Tandoori Restaurant</p>
            <h1>Authentic Flavors</h1>
            <h3>Experience the taste of tradition</h3>
            <div className="btn-Section">
            <ViewMenuBtn btnText={"View Menu"}/>
            <OrderBtn btnText={"Order Now"}/>
            </div>
        </div>
    )
}

export default Hero