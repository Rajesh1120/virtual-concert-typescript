import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 4rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.mainColor};
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.background};
  color: black;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`;

interface JoinConcertFormData {
  username: string;
  email: string;
  token: string;
}

const JoinConcert = () => {
  const [formData, setFormData] = useState<JoinConcertFormData>({
    username: '',
    email: '',
    token: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate token (you would typically do this on the server)
    // For now, just show a success message
    toast.success('Successfully joined the concert!');
    // You could redirect to a waiting room or directly to the concert stream
    navigate('/concert-room'); // You'll need to create this route
  };

  return (
    <FormContainer>
      <Title>Join Concert</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="token">Access Token</Label>
          <Input
            type="text"
            id="token"
            name="token"
            value={formData.token}
            onChange={handleChange}
            required
            placeholder="Paste your access token here"
          />
        </InputGroup>

        <SubmitButton type="submit">
          Join Concert
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default JoinConcert; 