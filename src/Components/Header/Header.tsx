import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
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

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
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
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo to="/">VirtualConcert</Logo>
      <Nav>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/artists">Artists</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <CTAButton to="/signup">Join Concert Now</CTAButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;