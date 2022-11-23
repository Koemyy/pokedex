import React from 'react';
import TopBar from "./components/TopBar";
import './App.css'
import {Sections} from './components/Infos';

function App() {
    return (
        <div>
            <TopBar title="Pokédex"/>
            <div className="fixed bottom-0 lg:h-[50px] w-full bg-black items-center py-3 lg:pr-12">
                <Sections/>
            </div>
        </div>
    );
}

export default App;
