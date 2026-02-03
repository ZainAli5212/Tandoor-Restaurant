import "./CategoryBox.css"
import DishCard from "./ItemCard"

const DishBox = ({ categoryTitle, cards }) => {
    return (
        <div className="box">
            <h2>{categoryTitle}</h2>
            <div className="grid-container">
                {cards.map((card, index) => (
                    <DishCard 
                        key={index} 
                        dishName={card.title} 
                        source={card.imgSrc} 
                    />
                ))}
            </div>
        </div>
    )
}

export default DishBox