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

    function mobileTestFalse() {
        if (window.innerWidth >= 1020) {
            setIsShown(false)
        }
    }

    function mobileTestTrue() {
        if (window.innerWidth >= 1020) {
            setIsShown(true)
        }
    }

    return (
        <div className="flex lg:justify-end md:overflow-hidden">
            {isShown && (
                <div className="fixed flex items-center justify-end flex-col w-[400px] h-[70vh] bottom-[12%] right-[55%] z-10">
                    <div className="flex bg-orange-500 justify-center align-middle items-center font-bold text-lg text-white pt-2 ml-[5%] pt-0 pb-[10px] w-[110%] h-[65px] rounded-3xl">
                        <img className="w-12 ml-2" src={image} alt={name}/>
                        <p className="w-180px text-black pl-2">No. {id}</p>
                        <p className="pl-20 first-letter:uppercase">{name}</p>
                        <img className="w-[40px] ml-auto pr-2" src={pokeball} alt="A pokeball icon"/>
                    </div>
                    <img className="w-full" src={image} alt={name}/>
                    <div className="flex w-full">
                        <div className="flex flex-col w-[50%] text-lg bg-gray-200 text-center">
                            <p>Type</p>
                            <p>Height</p>
                            <p>Weight</p>
                        </div>
                        <div className="flex flex-col w-[50%] text-lg bg-white text-center">
                            <p className="first-letter:uppercase">{type}</p>
                            <p>{height} cm</p>
                            <p>{weight} lbs</p>
                        </div>
                    </div>
                    <div className="flex w-full bg-white">
                        <div className="w-full">
                            {
                                // @ts-ignore
                                stats.map((stats, index) => <p key={index} className="first-letter:uppercase text-center">
                                    {stats.stat.name}
                                </p>)
                            }
                        </div>
                        <div className="w-full">
                            {
                                // @ts-ignore
                                stats.map((stats, index) => <p className="text-center" key={index}>
                                    {stats.base_stat}
                                </p>)
                            }
                        </div>
                    </div>
                </div>
            )}
            <div
                className="hover:bg-gradient-to-bl ml-10 mt-5 justify-center align-middle from-orange-300 hover:even:text-white to-orange-500 rounded-3xl flex items-center md:w-full md:h-full lg:w-[38%] lg:h-[55px] lg:mt-5 lg:mr-4 lg:p-10 text-base font-bold"
                onClick={modalHandler}
                onMouseEnter={mobileTestTrue}
                onMouseLeave={mobileTestFalse}
            >
                <img src={image} alt={name}/>
                <p className="lg:w-[270px]">No. {id}</p>
                <p className="first-letter:uppercase px-5 lg:px-0">{name}</p>
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
