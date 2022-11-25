import React from 'react';
import TopBar from "./components/TopBar";
import './App.css'
import {Sections} from './components/Infos';
import PokeList from "./components/PokeList";

function App() {
    return (
        <div>
            <TopBar title="Pokédex"/>
            <PokeList/>
            <div className="fixed bottom-0 lg:h-[50px] w-full bg-black items-center py-3 lg:pr-12">
                <Sections/>
            </div>
        </div>
    );
}

export default App;
