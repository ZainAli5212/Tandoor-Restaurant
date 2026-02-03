import Button from "../Common/Button"
import ColorButton from "../Common/ColorButton"


import "./Hero.css"
// import myPic from "../../assets/hero.jpg";

const Hero = () => {
    return (
        <div className='hero'>
            <p className="welcome">Welcome to Tandoori Restaurant</p>
            <h1>Rich Curries</h1>
            <h3>Experience the taste of tradition</h3>
            <div className="btn-Section">
            <ColorButton btnText={"View Menu"}/>
            <Button btnText={"Order Now"}/>
            </div>
        </div>
    )
}

export default Hero