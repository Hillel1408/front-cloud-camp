import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import './styles/globals.scss';

function App() {
    return (
        <Router basename="front-cloud-camp">
            <main className="container">
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
