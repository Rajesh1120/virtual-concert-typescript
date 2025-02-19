import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import EventListing from './Components/EventListing/EventListing';
import EventDetail from './Components/EventDetails/EventDetails';
import GlobalStyle from './Components/styles/GlobalStyle';
import { theme } from './Components/styles/theme';
import HowItWorks from './Components/HowItWorks';
import Features from './Components/Feature/Features';
import UpcomingConcerts from './Components/UpcomingConcerts/UpcomingConcerts';
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}> 
      <Router>
        <GlobalStyle theme={theme} />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <UpcomingConcerts />
            </>
          } />
          <Route path="/events" element={<EventListing />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App; 