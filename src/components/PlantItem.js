import CareScale from './CareScale'

function handleClick(e) {
    console.log('✨ This is a click',e)
}

export default function PlantItem( {id, cover, name, water, light }) {
    return (
        <div>
            <li key={id} className='jh-plant-item' onClick={() => handleClick(name)}>
                <img className='jh=plant-item-cover' src={cover} alt={`${name} cover`} />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
        </div>
    )
}