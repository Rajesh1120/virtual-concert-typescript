// Header.tsx
import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;
interface activeLinks {
  "Home":boolean,
  "Events": boolean,
  "About": boolean,
  "Logout": boolean,
  "Artists": boolean
  
}

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #e31c79;
  }

  &.active {
    text-decoration: underline;
    color: #e31c79;
  }
`;

const CTAButton = styled(Link)`
  background: #e31c79;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #f13b92;
  }
  &:active {
    background: rgb(150, 59, 241);
  }
`;

interface HeaderProps {
  activeLink: activeLinks;
  setActiveLink: React.Dispatch<React.SetStateAction<activeLinks>>;
  Loggedout:()=> void;
}

const Header: React.FC<HeaderProps> = ({ activeLink, setActiveLink, Loggedout }) => {
  const navigate=useNavigate();
  const handleLinkClick = (link: keyof activeLinks) => {
    setActiveLink({
      Home: link === "Home",
      Events: link === "Events",
      About: link === "About",
      Logout: link === "Logout",
      Artists: link === "Artists",
    });
    // console.log("inside")
    if (link === "Logout"){
      setActiveLink({
        Home: true,
        Events: false,
        About: false,
        Logout: false,
        Artists: false
      });
      toast.success("You logged successfully")
      Loggedout();

      navigate("/login")

    }
  };

  return (
    <HeaderContainer>
      <Logo to="/">VirtualConcert</Logo>
      <Nav>
      <NavLink
          to="/home"
          className={activeLink.Home ? 'active' : ''}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/events"
          className={activeLink.Events ? 'active' : ''}
          onClick={() => handleLinkClick("Events")}
        >
          Events
        </NavLink>

        <NavLink
          to="/artists"
          className={activeLink.Artists ? 'active' : ''}
          onClick={() => handleLinkClick("Artists")}
        >
          Artists
        </NavLink>
        <NavLink
          to="/about"
          className={activeLink.About ? 'active' : ''}
          onClick={() => handleLinkClick("About")}
        >
          About
        </NavLink>
        <NavLink
          to="/"
          className={activeLink.Logout ? 'active' : ''}
          onClick={()=>{handleLinkClick("Logout")}}
        >
          Logout
        </NavLink>
        <CTAButton to="/join-concert">Join Concert Now</CTAButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
