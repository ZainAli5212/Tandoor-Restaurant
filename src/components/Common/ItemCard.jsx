import "./ItemCard.css"
const DishCard = ({ItemName, source}) => {
    return (
        <div>
            <div className="grid-item">
                <img src={source} alt="Dish 3" />
                <div className="overlay-text">
                    <h2>{ItemName}</h2>
                </div>
            </div>
        </div>
    )
}

export default DishCard