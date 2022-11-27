import pokedex from '../images/pokedex_logo.png';

function TopBar() {
    return (
        <div className="flex items-center absolute w-full lg:py-5 lg:pl-10">
            <img className="lg:w-[250px] w-48 pt-3 mx-auto lg:mx-0" src={pokedex} alt=""/>
        </div>
    )
}

export default TopBar
