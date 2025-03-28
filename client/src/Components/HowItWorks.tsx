import styled from 'styled-components';
import { FaUserPlus, FaMagnifyingGlass, FaMusic } from 'react-icons/fa6';
import React from 'react';

const HowItWorksSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Step = styled.div`
  text-align: center;
  padding: 2rem;
  
  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const StepTitle = styled.h3`
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const IconWrapper = ({ icon: Icon }: { icon: React.ElementType }) => {
  return Icon ? <Icon /> : null;
};

const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <Title>How It Works</Title>
      <StepsContainer>
        <Step>
          <IconWrapper icon={FaUserPlus as React.ElementType} />
          <StepTitle>Sign Up</StepTitle>
          <StepDescription>Sign up or log in to your account</StepDescription>
        </Step>
        <Step>
          <IconWrapper icon={FaMagnifyingGlass as React.ElementType} />
          <StepTitle>Browse Concerts</StepTitle>
          <StepDescription>Browse upcoming live concerts</StepDescription>
        </Step>
        <Step>
          <IconWrapper icon={FaMusic as React.ElementType} />
          <StepTitle>Enjoy the Show</StepTitle>
          <StepDescription>Join the concert and enjoy live performances</StepDescription>
        </Step>
      </StepsContainer>
    </HowItWorksSection>
  );
};

export default HowItWorks;