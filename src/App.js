import React from 'react';
import Navigation from './Navigation/Navigation';
import Posts from './Posts/Posts';
import Sidebar from './Sidebar/Sidebar';

function App() {
    return (
        <div className= 'container'>
            <Navigation/>
            <Posts/>
            <Sidebar/>
        </div>
    );
}

export default App;
