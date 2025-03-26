import React, { createContext, JSX,  useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
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

const ProtectedRouter :React.FC<{ element: JSX.Element }>= ({ element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/" />;
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
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  return (
    <ThemeProvider theme={theme}> 
    <AuthContext.Provider value = {{isLoggedIn, login, logout}}>
      <Router>
        <GlobalStyle theme={theme} />
        {isLoggedIn && <Header activeLink={activeLink} setActiveLink={setActiveLink}/>}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <ProtectedRouter element={
              <>
              <Hero setActiveLink={setActiveLink} />
              <Features />
              <HowItWorks />
              <UpcomingConcerts setActiveLink={setActiveLink}/>
            </>
            } />
          } />
          <Route path="/events" element={ <ProtectedRouter element={<EventListing />}/>} />
          <Route path="/event/:id" element={<ProtectedRouter element={<EventDetail />} />} />
          <Route path="/artists" element={<ProtectedRouter element={<ArtistsList />} />} />
        </Routes>
        {isLoggedIn && <Footer />}
      </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App; 