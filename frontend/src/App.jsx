import { Route, BrowserRouter as Router, Routes ,Link} from 'react-router-dom';
import LandingPage from "./pagecomponents/landing.jsx";
import RegisterPage from './pagecomponents/Register.jsx';
import LoginPage from './pagecomponents/LoginPage.jsx';
import Quiz from './pagecomponents/quiz.jsx';
import Home from './pagecomponents/home.jsx';
import FinanceStories from './pagecomponents/Book.jsx';
import VideoPage from './pagecomponents/video.jsx';
import RoomPage from './pagecomponents/Room.jsx';
import SIPCalculator from './pagecomponents/sipcalc.jsx';
import DashboardAgri from './pagecomponents/Boardagri.jsx';
import FamilyDashboard from './pagecomponents/FamilyDash.jsx';
import HealthDashboard from './pagecomponents/Healthdash.jsx';
import Account from './pagecomponents/Account.jsx';
import AboutUs  from './pagecomponents/Aboutus.jsx';
import HelpSection from './pagecomponents/help.jsx';
import Services from "./pagecomponents/services.jsx";
import PizzaChefGame from './pagecomponents/rewards.jsx';



const Help = () => <h2>Help Page</h2>;

function App() {
    const isAuthenticated = !!localStorage.getItem("token");
    return (
        <Router>
            
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path='/home/quiz' element={<Quiz />} />
                <Route path='/home/ebook' element={<FinanceStories />} />
                <Route path="/home/mentor" element={<VideoPage />} />
                <Route path="/home/mentor/room/:roomId" element={<RoomPage />} />
                <Route path="/home/calculator" element={<SIPCalculator/>}/>
                <Route path="/home/agriculture" element={<DashboardAgri/>}/>
                <Route path="/home/family" element={<FamilyDashboard/>}/>
                <Route path="/home/health" element={<HealthDashboard/>}/>
                <Route path="/home/accounts" element={<Account/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/help" element={<HelpSection/>}/>
                <Route path="/home/services" element={<Services/>}/>
                <Route path="/home/rewards" element={<PizzaChefGame/>}/>
            </Routes>
          
        </Router>
    );
}

export default App;
