import React from 'react'
import MenuDishCard from '../../components/Menu/MenuDishCard'
import MenuHero from '../../components/Menu/MenuHero'
import MenuDisplay from '../../components/Menu/MenuDisplay'
const Menu = () => {
  let product = { id: 22, name: "Pina Colada", description: "Creamy pineapple and coconut mocktail", price: "Rs. 400", category: "beverages", isNew: true, image: "public/menu-images/PinaColada.png" }
  return (
    <div className='menu-main-container'>

    <MenuHero/>
    <MenuDisplay/>
    


    </div>
    
  )
}

export default Menu