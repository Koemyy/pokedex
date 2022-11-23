import React from 'react';
import TopBar from "./components/TopBar";
import './App.css'
import {Sections} from './components/Infos';

function App() {
    return (
        <div>
            <TopBar title="Pokédex"/>
            <Sections/>
        </div>
    );
}

export default App;
