import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Wishes from './pages/Wishes';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/stories" element={<Stories/>}/>
                <Route path="/wishes" element={<Wishes/>}/>
            </Routes>

        </>
    );
};

export default App;
