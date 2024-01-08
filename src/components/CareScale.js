export default function CareScale({ scaleValue, careType}) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? '☀' : '💧'
    
    return (
        <div>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀</span> : null
            )}
        </div>
    )
}