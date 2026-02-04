import "./MenuSection.css"
import ViewMenuBtn from "../Common/ViewMenuBtn"



import { menuItems } from '../../data/MenuData';
import CategoryBox from "../../components/Common/CategoryBox"

const popularItems = menuItems.filter(item => item.isPopular);
const newItems = menuItems.filter(item => item.isNew);

const MenuSection = () => {

    return (
        <div className='home-menu-section'>
            <div className="menu-header">
                <span>Our Menu</span>
                <h1>Explore Our Dishes</h1>
                <p>From sizzling BBQ to authentic desi flavors and fusion Chinese, discover the taste that brings families together.</p>
            </div>



            <div className="dishes-box">
                <CategoryBox categoryTitle={"New Arrivals"} cards={newItems}/>
                <CategoryBox categoryTitle= "Popular Items" cards={popularItems}/>
                
                <div className="view-menubtn">
                <ViewMenuBtn id = "view-menuBtn" btnText={"View Full Menu"}/>

                </div>
            </div>
    

    </div >
  )
}

export default MenuSection