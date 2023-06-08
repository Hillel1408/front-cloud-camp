import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Step1 } from './pages/Step1';
import { Step3 } from './pages/Step3';
import './styles/globals.scss';

function App() {
    return (
        <Router basename="front-cloud-camp">
            <main className="container">
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/step-1" element={<Step1 />} />
                    <Route exact path="/step-3" element={<Step3 />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
