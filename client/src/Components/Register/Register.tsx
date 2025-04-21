import { Link } from "react-router-dom";
import React, {FormEvent, useState} from 'react'
import styled from "styled-components";
import { toast } from 'react-toastify'


interface UserDataRegister{
    email:string,
    password:string,
    conformpassword:string,
}
const LoginForm = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    width : 500px;
    height: 550px;
    border: 4px solid white;
    justify-content : center;
    padding: 4rem;
    position : absolute;
    top:15%;
    border-radius: 10px;
    left:35%;
`;
const  Anchor=styled(Link)`
color: #e31c79;
`

const Input= styled.input`
    width:100%;
    padding:10px;
    margin: 10px 0;
    type:

`;
const HelperText = styled.p`
    color: #e31c79;
    font-size: 0.8rem;
    margin-top: -5px;
    margin-bottom: 10px;
`;
const Header2= styled.h1`
    text-align : center;
    color: #e31c79;
    
`;
const SubmitButton = styled.button`
    text-decoration: none;
    background-color: #e31c79;
    text-align: center;
    color: white;
    border-radius: 10px;
    padding: 1rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    
    &:hover {
        background-color: #c41867;
    }
`;
const Register = () =>{
    const [userData, setUserData] = useState<UserDataRegister>({
        email:"",
        password:"",
        conformpassword:"",
    })
    const handleSubmit= async (e:FormEvent)=>{
        e.preventDefault();
        
        // Basic validation
        if (userData.email === "" || userData.password === "" || userData.conformpassword === ""){
            toast.error("Please fill all the fields");
            return;
        }
        
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        
        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(userData.password)) {
            toast.error("Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character");
            return;
        }
        
        // Password match validation
        if (userData.password !== userData.conformpassword){
            toast.error("Passwords do not match");
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password
                })
            });
            
            const data = await response.json();
            
            // Check if response is not ok (status code >= 400)
            if (!response.ok) {
                if (response.status === 400) {
                    toast.error(data.message || "Registration failed. Email may already be in use.");
                } else {
                    toast.error(data.message || `Server error (${response.status}). Please try again later.`);
                }
                return;
            }
            
            // Clear form data on success
            setUserData({
                email: "",
                password: "",
                conformpassword: "",
            });
            
            toast.success("Registration successful! Please login.");
        } catch (error) {
            console.error("Registration Error: ", error);
            toast.error("Something went wrong. Please try again later.");
        }
    }
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value}= e.target;
        setUserData(prevUserData=> ({
            ...prevUserData,
            [name]:value}))
    }
    return (
        <LoginForm>
            <Header2>Register</Header2>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <Input type="text" value={userData.email} onChange={handleChange} name="email" placeholder=" Enter Email " required></Input>
                <label>Password: </label>
                <Input type="password" value={userData.password} onChange={handleChange} name="password" placeholder=" Enter password " required></Input>
                <HelperText>Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character</HelperText>
                <label>Conform Password: </label>
                <Input type="password" value={userData.conformpassword} onChange={handleChange} name="conformpassword" placeholder=" Enter password " required></Input>
                <SubmitButton type="submit">Register</SubmitButton>
            </form>
            <label>Already have an account?{' '}
                <Anchor to={'/'} style={{ color: '#e31c79' }}>
                    Login Here
                </Anchor></label>
        </LoginForm>
    )
}
export default Register;