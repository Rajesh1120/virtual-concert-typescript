import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import React , { useState, FormEvent } from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface UserDataLogin{
    email:string,
    password:string,
    
}
const LoginForm = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    width : 500px;
    height: 550px;
    border: 2px solid white;
    justify-content : center;
    padding: 4rem;
    position : absolute;
    top:15%;
    left:35%;
`;
const  Anchor=styled(Link)`
color : white;
`

const Input= styled.input`
    width:100%;
    padding:10px;
    margin: 10px 0;

`;
const Header2= styled.h1`
    text-align : center;
    color: #e31c79;
    text
`;
const SubmitButton = styled.button`
    text-decoration: none;
    background-color: #e31c79;
    text-align: center;
    color: white;
    font-size:1rem;
    border-radius: 10px;
    padding : 1rem;

`;
interface LoggedinProps{
    Loggedin:boolean;
    LoggingFunc:() => void;
}
const Login:React.FC<LoggedinProps> = ({Loggedin, LoggingFunc}) =>{
    const navigate=useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    
     const [userData, setUserData] = useState<UserDataLogin>({
             email:"virtualconcert@gmail.com",
             password:"Rajesh@035"
         })
        // console.log(Loggedin)
         const handleSubmit= async (e:FormEvent)=>{
             e.preventDefault();
             
             // Basic validation
             if (!userData.email || !userData.password) {
                 toast.error("Please enter both email and password");
                 return;
             }
             
             // Email format validation
             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             if (!emailRegex.test(userData.email)) {
                 toast.error("Please enter a valid email address");
                 return;
             }
             
             // console.log(userData)
            try{
                const response= await fetch("http://localhost:5001/api/login",{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                        email:userData.email,
                        password:userData.password
                    })
                })
                
                // Check if response is not ok (status code >= 400)
                if (!response.ok) {
                    const errorData = await response.json();
                    if (response.status === 400) {
                        toast.error(errorData.message || "Invalid email or password. Please try again.");
                    } else {
                        toast.error(errorData.message || `Server error (${response.status}). Please try again later.`);
                    }
                    return;
                }
                
                const data = await response.json();
                
                // console.log(data)
                if (data.message === "Login successful"){
                    // console.log(data.token)
                    // localStorage.setItem("token",data.token)
                    localStorage.setItem("token", data.token);
                    toast.success("Login Successfully");
                    LoggingFunc();
                    
                    // Navigate to the page the user was trying to access, or home if none
                    navigate(from, { replace: true });
                } else {
                    // Show error message from the server
                    toast.error(data.message || "Login failed. Please check your credentials.");
                }

            }catch(error){
                // console.error("Something went wrong", error);
                toast.error("Server error. Please try again later.");
            }
             // after the validating the form then only u have to store the userdata in database
         }
         const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
             const {name , value}= e.target;
             setUserData(prevUserData=> ({
                 ...prevUserData,
                 [name]:value}))
         }
    return (
        <LoginForm>
            <Header2>Login</Header2>
            <label>Email: </label>
            <Input type="text" value={userData.email} onChange={handleChange} name="email" placeholder=" Enter Email " required></Input>
            <label>Password: </label>
            <Input type="password" value={userData.password} onChange={handleChange} name="password" placeholder=" Enter password " required></Input>
            <SubmitButton onClick={handleSubmit}>Login</SubmitButton>
            <label>Don't have an account? <Anchor style={{ color: '#e31c79' }} to={"/register"}>Register</Anchor></label>
        </LoginForm>
        
   
    )
}
export default Login;