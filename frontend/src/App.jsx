import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from "./landing.jsx";
import RegisterPage from './Register.jsx';
import LoginPage from './LoginPage'; 
import './App.css';
import Home from './pages/home';
import Quiz from './quiz.jsx';
import FinanceStories from './pages/Book.jsx';

//const Home = () => <h2>Home Page</h2>;
const AboutUs = () => <h2>About Us Page</h2>;
const Help = () => <h2>Help Page</h2>;

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<Home />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path='/home/quiz' element={<Quiz />} />
                <Route path='/home/ebook' element={<FinanceStories />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </Router>
    );
}

export default App;
