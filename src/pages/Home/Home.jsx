import Hero from "../../components/Home/Hero"
import MenuSection from "../../components/Home/MenuSection"
import Reservations  from "../../components/Home/Reservations"
import Testimonials from "../../components/Home/Testimonials"

const Home = () => {
  return (
    <div>
      <Hero/>
      <MenuSection/>
      <Testimonials/>
      <Reservations/>
    </div>
  )
}

export default Home