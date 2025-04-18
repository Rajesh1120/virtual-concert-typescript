import styled from 'styled-components';
import { FaMusic, FaUsers, FaGlobe, FaHeadphones } from 'react-icons/fa6';
import React from 'react';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: white;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor};
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const StatBox = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.mainColor};
    margin-bottom: 1rem;
  }
`;

const StatNumber = styled.h3`
  color: black;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ContentSection = styled.div`
  margin: 4rem 0;
`;

const SectionTitle = styled.h2`
  color: black;
  margin-bottom: 2rem;
  text-align: center;
`;

const MissionText = styled.p`
  color: white;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const IconWrapper = ({ icon: Icon }: { icon: React.ElementType }) => {
  if (!Icon) return null;
  return <Icon />;
};

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <Title>About Virtual Concert</Title>
        <Subtitle>
          Bringing live music experiences to audiences worldwide through cutting-edge virtual concert technology
        </Subtitle>
      </AboutHeader>

      <StatsContainer>
        <StatBox>
          <IconWrapper icon={FaMusic as React.ElementType} />
          <StatNumber>500+</StatNumber>
          <StatLabel>Concerts Hosted</StatLabel>
        </StatBox>
        <StatBox>
          <IconWrapper icon={FaUsers as React.ElementType} />
          <StatNumber>1M+</StatNumber>
          <StatLabel>Happy Viewers</StatLabel>
        </StatBox>
        <StatBox>
          <IconWrapper icon={FaGlobe as React.ElementType} />
          <StatNumber>100+</StatNumber>
          <StatLabel>Countries Reached</StatLabel>
        </StatBox>
        <StatBox>
          <IconWrapper icon={FaHeadphones as React.ElementType} />
          <StatNumber>200+</StatNumber>
          <StatLabel>Artists Featured</StatLabel>
        </StatBox>
      </StatsContainer>

      <ContentSection>
        <SectionTitle>Our Mission</SectionTitle>
        <MissionText>
          At Virtual Concert, we believe that music has the power to connect people across borders and cultures. 
          Our mission is to make live music experiences accessible to everyone, everywhere. Through our platform, 
          we bring together artists and audiences in an immersive virtual environment, creating unforgettable 
          moments and fostering a global community of music lovers.
        </MissionText>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Why Choose Virtual Concert?</SectionTitle>
        <MissionText>
          We offer high-quality streaming, interactive features, and a diverse range of musical performances. 
          Our platform provides an intimate concert experience from the comfort of your home, with crystal-clear 
          audio and stunning visuals. Join us in revolutionizing the way people experience live music in the 
          digital age.
        </MissionText>
      </ContentSection>
    </AboutContainer>
  );
};

export default About; 