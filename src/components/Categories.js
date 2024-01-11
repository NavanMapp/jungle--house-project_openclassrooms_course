import '../styles/Categories.css'

export default function Categories({ setActiveCategory, category, activeCategory}) {
    return(
        <div>
            <select value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='jh=categories-select'
            >
                <option value=''>---</option>
                {Categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Reset</button>
        </div>
    )
}