import React from 'react';
import TopBar from "./components/TopBar";
import Bar from '../src/components/Bar';
import PokeList from "./components/PokeList";

function App() {
    return (
        <div>
            <TopBar/>
            <PokeList/>
            <div className="fixed bottom-0 w-full items-center py-3">
                <Bar/>
            </div>
        </div>
    );
}

export default App;
