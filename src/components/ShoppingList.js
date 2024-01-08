import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'

export default function ShoppingList() {
    const categories = plantList.reduce((cat, plant) => {
        if (!cat.includes(plant.category)) {
            cat.push(plant.category);
        }
        return cat;
    }, [])
    
    return (
        <div> 
            <h2> Plant Categories: </h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={`${category}-${index}`}>{category}</li>
                ))}
            </ul>
            <h2>Plants for Sale:</h2>
            <ul>
                {plantList.map((plant, index) => (
                    <li key={`${plant.name}-${index}`}>{plant.name}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant) => {
                    <li key={plant.id}>
                        {plant.isBestSale || plant.category === "classic" && <span>🔥</span>}
                    </li>
                })}
            </ul>
            <ul className='jh-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='jh-plant-item'>
						{plant.name}
						{plant.isSpecialOffer && <div className='jh-sales'>Sale</div>}
					</li>
                ))}
            </ul>
        </div>
    )
}