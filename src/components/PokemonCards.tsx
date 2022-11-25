import pokeball from '../images/pokeball.png';

interface Card {
    id: string | number,
    image: string,
    name: string,
    type: string,
    weight: number,
    height: number,
    stats: any | any[],
}

function PokemonCard({id, image, name, type, weight, height, stats}: Card) {
    // @ts-ignore
    return (
        <div className="">
            <div>
                <div>
                    <img className="" src={image} alt={name}/>
                    <p className="w-180px text-black">No. {id}</p>
                    <p>{name}</p>
                    <img className="" src={pokeball} alt="A pokeball icon"/>
                </div>
                <img src={image} alt={name}/>
                <div className="flex w-full">
                    <div className="bg-gray-200 text-center">
                        <p>Type</p>
                        <p>Height</p>
                        <p>Weight</p>
                    </div>
                    <div className="bg-white">
                        <p>{type}</p>
                        <p>{height} cm</p>
                        <p>{weight} lbs</p>
                    </div>
                </div>
                <div>
                    <div>
                        {
                            // @ts-ignore
                            stats.map(stats => <p>
                                {stats.base_stat}
                                {stats.stat.name}
                            </p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
