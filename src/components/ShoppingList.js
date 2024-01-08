import {plantList} from '../datas/plantList'

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
                {categories.map((plant, index) => (
                    <li key={`${plant}-${index}`}>{plant}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant, index) => (
                    <li key={`${plant.name}-${index}`}>{plant.name}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant) => {
                    <li key={plant.id}>
                        {plant.isBestSale && <span>🔥</span>}
                    </li>
                })}
            </ul>
        </div>
    )
}