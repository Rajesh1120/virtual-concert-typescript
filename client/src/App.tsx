import React, { createContext, JSX,  useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate, useLocation} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import EventListing from './Components/EventListing/EventListing';
import EventDetail from './Components/EventDetails/EventDetails';
import ArtistsList from './Components/ArtistsList/ArtistsList';
import GlobalStyle from './Components/styles/GlobalStyle';
import { theme } from './Components/styles/theme';
import HowItWorks from './Components/HowItWorks';
import Features from './Components/Feature/Features';
import UpcomingConcerts from './Components/UpcomingConcerts/UpcomingConcerts';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { ToastContainer } from 'react-toastify';
import About from './Components/About/About';
import JoinConcert from './Components/JoinConcert/JoinConcert';


interface activeLinks{
    "Home": boolean,
    "Events": boolean,
    "About": boolean,
    "Logout": boolean,
    "Artists": boolean
}

const AuthContext=createContext<{isLoggedIn: boolean, login:()=>void, logout: ()=> void}>({
  isLoggedIn:false,
  login:()=>{},
  logout:()=>{}
})

const useAuth=()=>useContext(AuthContext)

// Custom ProtectedRouter that maintains the current URL
const ProtectedRouter :React.FC<{ element: JSX.Element }>= ({ element }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  
  // If not logged in, redirect to login page but save the current location
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  
  return element;
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const [activeLink, setActiveLink] = useState<activeLinks>({
    "Home": true,
    "Events": false,
    "About": false,
    "Logout": false,
    "Artists": false,
  })
  
  // Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  // console.log(localStorage);
  const login = () => setIsLoggedIn(true);
  
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };
  
  return (
    <ThemeProvider theme={theme}> 
    <AuthContext.Provider value = {{isLoggedIn, login, logout}}>
      <Router>
        <GlobalStyle theme={theme} />
        <Routes>
          <Route path="/" element={<Login LoggingFunc={login} Loggedin={isLoggedIn}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={
            <ProtectedRouter element={
              <>
                {isLoggedIn && <Header activeLink={activeLink} setActiveLink={setActiveLink} Loggedout={logout}/>}
                <Hero setActiveLink={setActiveLink} />
                <Features />
                <HowItWorks />
                <UpcomingConcerts setActiveLink={setActiveLink}/>
                {isLoggedIn && <Footer />}
              </>
            } />
          } />
          <Route path="/events" element={
            <ProtectedRouter element={
              <>
                {isLoggedIn && <Header activeLink={activeLink} setActiveLink={setActiveLink} Loggedout={logout}/>}
                <EventListing />
                {isLoggedIn && <Footer />}
              </>
            } />
          } />
          <Route path="/event/:id" element={
            <ProtectedRouter element={
              <>
                {isLoggedIn && <Header activeLink={activeLink} setActiveLink={setActiveLink} Loggedout={logout}/>}
                <EventDetail />
                {isLoggedIn && <Footer />}
              </>
            } />
          } />
          <Route path="/about" element={
            <ProtectedRouter element={
              <>
                {isLoggedIn && <Header activeLink={activeLink} setActiveLink={setActiveLink} Loggedout={logout}/>}
                <About />
                {isLoggedIn && <Footer />}
              </>
            } />
          } />
          <Route path="/artists" element={
            <ProtectedRouter element={
              <>
                {isLoggedIn && <Header activeLink={activeLink} setActiveLink={setActiveLink} Loggedout={logout}/>}
                <ArtistsList />
                {isLoggedIn && <Footer />}
              </>
            } />
          } />
          <Route path="/join-concert" element={
            <ProtectedRouter element={
              <>
                {isLoggedIn && <Header activeLink={activeLink} setActiveLink={setActiveLink} Loggedout={logout}/>}
                <JoinConcert />
                {isLoggedIn && <Footer />}
              </>
            } />
          } />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
      </Router>
    </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App; 