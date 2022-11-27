import pokeball from '../images/pokeball.png';
import {useState} from "react";
import Modal from './Modal'

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
    const [isShown, setIsShown] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function modalHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="flex lg:justify-end lg:overflow-y-hidden">
            {isShown && (
                <div className="show">
                    <div className="stat-container-title">
                        <img className="w-20" src={image} alt={name}/>
                        <p className="w-180px text-black">No. {id}</p>
                        <p className="pl-10 first-letter:uppercase">{name}</p>
                        <img className="pokeball-title" src={pokeball} alt="A pokeball icon"/>
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
                                stats.map((stats, index) => <p key={index}  className="first-letter:uppercase">
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
            )}
            <div className="hover:bg-gradient-to-bl from-orange-300 hover:even:text-white to-orange-500 rounded-3xl flex items-center w-[38%] h-[55px] mt-5 mr-4 p-10 text-base font-bold"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={modalHandler}
            >
                <img className="" src={image} alt={name}/>
                <p className="w-[270px]">No. {id}</p>
                <p className="first-letter:uppercase">{name}</p>
                <img className="ml-auto w-[40px]" src={pokeball} alt="A pokeball icon"/>
            </div>
            {modalIsOpen && (
                <Modal
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    height={height}
                    weight={weight}
                    stats={stats}
                    type={type}
                    onClick={closeModalHandler}
                />
            )}
        </div>
    )
}

export default PokemonCard
