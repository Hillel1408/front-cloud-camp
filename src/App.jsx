import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Steps } from './pages/Steps';
import './styles/globals.scss';

function App() {
    return (
        <Router basename="front-cloud-camp">
            <main className="container">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/steps" element={<Steps />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
