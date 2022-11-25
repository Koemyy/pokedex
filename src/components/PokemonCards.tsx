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
        <div className="container">
            {isShown && (
                <div className="show">
                    <div className="stat-container-title">
                        <img className="image-title" src={image} alt={name}/>
                        <p className="w-180px text-black">No. {id}</p>
                        <p>{name}</p>
                        <img className="pokeball-title" src={pokeball} alt="A pokeball icon"/>
                    </div>
                    <img className="w-full" src={image} alt={name}/>
                    <div className="flex w-full">
                        <div className="stats-left bg-gray-200 text-center">
                            <p>Type</p>
                            <p>Height</p>
                            <p>Weight</p>
                        </div>
                        <div className="stats-right bg-white">
                            <p>{type}</p>
                            <p>{height} cm</p>
                            <p>{weight} lbs</p>
                        </div>
                    </div>
                    <div className="base-stats">
                        <div>
                            {
                                // @ts-ignore
                                stats.map(stats => <p>
                                    {stats.base_stat}
                                </p>)
                            }
                        </div>
                        <div>
                            {
                                // @ts-ignore
                                stats.map(stats => <p>
                                    {stats.stat.name}
                                </p>)
                            }
                        </div>
                    </div>
                </div>
            )}
            <div className="right"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={modalHandler}
            >
                <img className="max-h-[50px] mr-[10px] w-[50px]" src={image} alt={name}/>
                <p className="w-[270px]">No. {id}</p>
                <p>{name}</p>
                <img className="ml-auto w-[40px]" src={pokeball} alt="A pokeball icon"/>
            </div>
            {setModalIsOpen && (
                <Modal>
                    id={id}
                    name={name}
                    height={height}
                    weight={weight}
                    stats={stats}
                    type={type}
                    onClick={closeModalHandler}
                </Modal>
            )}
        </div>
    )
}

export default PokemonCard
