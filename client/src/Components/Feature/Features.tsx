import { FaVideo, FaComments, FaStar, FaTicket } from 'react-icons/fa6';
import React from 'react';
import styled from 'styled-components'

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Feature = styled.div`
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background 0.3s ease;
 &:hover {
    transform: scale(1.05);
   
  }
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const FeatureTitle = styled.h3`
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const IconWrapper = ({ icon: Icon }: { icon: React.ElementType }) => {
  return Icon ? <Icon /> : null;
};

const Features = () => {
  return (
    <FeaturesSection>
      <Title>Features</Title>
      <FeaturesGrid>
        <Feature>
          <IconWrapper icon={FaVideo as React.ElementType} />
          <FeatureTitle>Live Concert Streaming</FeatureTitle>
          <FeatureDescription>
            Watch concerts in real-time with high-quality audio and video
          </FeatureDescription>
        </Feature>
        <Feature>
          <IconWrapper icon={FaComments as React.ElementType} />
          <FeatureTitle>Interactive Chat</FeatureTitle>
          <FeatureDescription>
            Chat with artists and fans during live shows
          </FeatureDescription>
        </Feature>
        <Feature>
          <IconWrapper icon={FaStar as React.ElementType} />
          <FeatureTitle>Exclusive Content</FeatureTitle>
          <FeatureDescription>
            Get access to behind-the-scenes content and virtual meet-and-greets
          </FeatureDescription>
        </Feature>
        <Feature>
          <IconWrapper icon={FaTicket as React.ElementType } />
          <FeatureTitle>Easy Ticketing</FeatureTitle>
          <FeatureDescription>
            Easy, secure ticket purchasing for concerts
          </FeatureDescription>
        </Feature>
      </FeaturesGrid>
    </FeaturesSection>
  );
};
export  default  Features;