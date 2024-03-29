import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`You want to buy 1 ${plantName}? Very good choice 🌱✨`)
}

export default function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='jh-plant-item' onClick={() => handleClick}>
			<span className='jh-plant-item-price'>R{price}</span>
			<img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}