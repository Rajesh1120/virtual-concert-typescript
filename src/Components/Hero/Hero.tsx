import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeroProps {
  setActiveLink: React.Dispatch<React.SetStateAction<activeLinks>>;
}

interface activeLinks {
  Home: boolean;
  Events: boolean;
  About: boolean;
  Login: boolean;
  Artists: boolean;
}

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
`;

const HeroContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const CTAButton = styled(Link)`
  background-color: #f13b92;
  color: #fff;
  padding: 1rem 2rem;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: #f13b92;
  }
`;

const Hero: React.FC<HeroProps> = ({ setActiveLink }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "/heroimages/herovideo.mov",
    "/heroimages/secondvideo.mov",
    
  ];

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };


  const handleClick = () => {
    setActiveLink({
      Home: false,
      Events: true,
      About: false,
      Login: false,
      Artists: false,
    });
  };

  return (
    <HeroContainer>
      {/* Video Background - Plays one after another */}
      <VideoBackground
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        loop={true}
        onEnded={handleVideoEnd}
      />

      <HeroContent>
        <HeroTitle>Experience Live Music Like Never Before</HeroTitle>
        <HeroSubtitle>
          Join thousands of music lovers in immersive virtual concerts from the
          comfort of your home.
        </HeroSubtitle>
        <CTAButton onClick={handleClick} to={`/events`}>
          See Upcoming Shows
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
