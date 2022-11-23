import pokeball from '../images/pokeball.png';

interface topBar {
    title: string,
}

function TopBar({title}: topBar) {
    return (
        <div className="flex items-center justify-between absolute padding top-8 h-12 w-full top-bar-gradient">
            <div className="flex justify-between items-center lg:w-[40%]">
                <h1 className="font-lg font-bold">{title}</h1>
                <div className="flex items-center align-middle text-white">
                    <div className="flex padding-pokeball rounded-lg ml-5 bg-gray-500">
                        <img src={pokeball}
                             alt="A pokeball icon"
                             style={{width: "30px", marginRight: "10px"}}
                        />
                        <p>438</p>
                    </div>
                    <div className="flex padding-pokeball rounded-lg ml-5 bg-gray-500">
                        <img src={pokeball} alt="A pokeball icon"
                             style={{width: "30px", marginRight: "10px"}}
                        />
                        <p>649</p>
                    </div>
                </div>
            </div>
            <p style={{color: "white"}}>A -&gt; Z</p>
        </div>
    )
}

export default TopBar
