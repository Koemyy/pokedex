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
            <div onClick={onClick} className="absolute top-[36px] right-[50px] rounded-2xl px-5 py-2 bg-orange-500 text-white font-extrabold cursor-pointer">
                X
            </div>
            <div>
                <img className="drop-shadow-md w-500px" src={image} alt={name}/>
            </div>
        </div>
    )
}

export default Modal
