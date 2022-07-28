import './App.css';
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Login/LogoutButton";
import Profile from "../Login/Profile";
import {Routes, Route} from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import ParentHomepage from '../../routes/ParentHomepage/ParentHomepage';
import ChildHomepage from '../../routes/ChildHomepage/ChildHomepage';
import ExpeditionPage from '../../routes/ExpeditionPage/ExpeditionPage';
import ActivityPage from '../../routes/ActivityPage/ActivityPage';
import ResultsPage from '../../routes/ResultsPage/ResultsPage';


function App() {

  return (
    <div className="App">
    
     <h1> Welcome to Jungle Sums! </h1>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="signup" element={<SignupPage/>} />
        <Route path="parent" element={<ParentHomepage/>} />
        <Route path="child" element={<ChildHomepage/>} />
        <Route path="expedition" element={<ExpeditionPage/>} />
        <Route path="activity" element={<ActivityPage/>} />
        <Route path="results" element={<ResultsPage/>} />
      </Routes>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;