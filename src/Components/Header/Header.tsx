// Header.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  setActiveLink: (link: string) => void;
}

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
  "Login": boolean,
  "Artists": boolean
  
}

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e31c79;
  }

  ${(props) =>
    props.isActive &&
    `
    text-decoration: underline;
    color: #e31c79;
  `}
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
}

const Header: React.FC<HeaderProps> = ({ activeLink, setActiveLink }) => {
  const handleLinkClick = (link: keyof activeLinks) => {
    setActiveLink({
      Home: link === "Home",
      Events: link === "Events",
      About: link === "About",
      Login: link === "Login",
      Artists: link === "Artists",
    });
  };

  return (
    <HeaderContainer>
      <Logo to="/">VirtualConcert</Logo>
      <Nav>
      <NavLink
          to="/"
          isActive={activeLink.Home}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/events"
          isActive={activeLink.Events}
          onClick={() => handleLinkClick("Events")}
        >
          Events
        </NavLink>

        <NavLink
          to="/artists"
          isActive={activeLink.Artists}
          onClick={() => handleLinkClick("Artists")}
        >
          Artists
        </NavLink>
        <NavLink
          to="/about"
          isActive={activeLink.About}
          onClick={() => handleLinkClick("About")}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          isActive={activeLink.Login}
          onClick={() => handleLinkClick("Login")}
        >
          Login
        </NavLink>
        <CTAButton to="/signup">Join Concert Now</CTAButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
