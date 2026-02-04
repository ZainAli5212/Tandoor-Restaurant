import "./ViewMenuBtn.css"
import { NavLink } from "react-router-dom";

const ViewMenuBtn = ({btnText}) => {
  return (
    <div>
        <button className="colorBtn">
            
            <NavLink to="/Menu" className="viewBtn-link">{btnText}</NavLink>
            
            
            </button>
    </div>
  )
}

export default ViewMenuBtn