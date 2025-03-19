import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


interface activeLinks{
    "Home": boolean,
    "Events": boolean,
    "About": boolean,
    "Login": boolean,
    "Artists": boolean
}
const App: React.FC = () => {
  const [activeLink, setActiveLink] = useState<activeLinks>({
    "Home": true,
    "Events": false,
    "About": false,
    "Login": false,
    "Artists": false,
  })
  return (
    <ThemeProvider theme={theme}> 
      <Router>
        <GlobalStyle theme={theme} />
        <Header activeLink={activeLink} setActiveLink={setActiveLink}/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero setActiveLink={setActiveLink}/>
              <Features />
              <HowItWorks />
              <UpcomingConcerts setActiveLink={setActiveLink}/>
            </>
          } />
          <Route path="/events" element={<EventListing />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/artists" element={<ArtistsList />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App; 