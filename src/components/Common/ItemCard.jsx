import "./ItemCard.css"
const DishCard = ({name, image}) => {
    return (
        <div>
            <div className="grid-item">
                <img src={image} alt="Dish 3" />
                <div className="overlay-text">
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}

export default DishCard