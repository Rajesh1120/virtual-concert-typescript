import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.text};
  padding: 4rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
    
    a {
      color: ${({ theme }) => theme.colors.textSecondary};
      text-decoration: none;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.5rem;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  flex: 1;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Quick Links</h3>
          <LinkList>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Services</a></li>
            <li><a href="/help">Help Center</a></li>
          </LinkList>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: support@virtualconcert.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <SocialLinks>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Newsletter</h3>
          <p>Subscribe for concert updates and exclusive offers</p>
          <NewsletterForm>
            <Input type="email" placeholder="Enter your email" />
            <Button type="submit">Subscribe</Button>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
