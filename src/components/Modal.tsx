import pokeball from '../images/pokeball.png'
import bg from '../images/bg_pokemon.jpg'

interface Modal {
    id: string | number,
    image: string,
    name: string,
    type: string,
    weight: number,
    height: number,
    stats: any | any[],
    onClick: any,
}

function Modal({onClick, id, name, image, type, weight, height, stats}: Modal) {
    return (
        <div className="flex fixed top-0 left-0 w-full h-full items-center justify-evenly bg-pokemon">
            <div className="flex items-center justify-center flex-col w-[450px] h-[500px]">
                <div className="bg-orange-500 flex items-center font-bold text-base text-white justify-center pt-0 w-full h-[65px] rounded-3xl">
                    <img className="w-20" src={image} alt={name}/>
                    <p className="w-180px text-black">No. {id}</p>
                    <p className="pl-10 first-letter:uppercase">{name}</p>
                    <img className="w-[40px] ml-auto mr-4" src={pokeball} alt="A pokeball icon"/>
                    <div onClick={onClick}
                         className="top-[15px] right-[20px] lg:top-[36px] lg:right-[50px] align-middle justify-center items-center rounded-3xl lg:px-3 lg:py-2 py-2 px-3 border border-2 border-white mr-2 text-white font-extrabold cursor-pointer">
                        X
                    </div>
                </div>
                <img className="w-full" src={image} alt={name}/>
                <div className="flex w-full">
                    <div className="stats-left bg-gray-200 text-center">
                        <p>Type</p>
                        <p>Height</p>
                        <p>Weight</p>
                    </div>
                    <div className="stats-right bg-white text-center">
                        <p className="first-letter:uppercase">{type}</p>
                        <p>{height} cm</p>
                        <p>{weight} lbs</p>
                    </div>
                </div>
                <div className="base-stats">
                    <div>
                        {
                            // @ts-ignore
                            stats.map((stats, index) => <p key={index} className="first-letter:uppercase">
                                {stats.stat.name}
                            </p>)
                        }
                    </div>
                    <div>
                        {
                            // @ts-ignore
                            stats.map((stats, index) => <p key={index}>
                                {stats.base_stat}
                            </p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
