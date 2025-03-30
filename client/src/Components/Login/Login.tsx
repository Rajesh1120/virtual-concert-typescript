import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React , { useState, FormEvent, useContext }from "react";


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
     const [userData, setUserData] = useState<UserDataLogin>({
             email:"rajeshn@gmail.com",
             password:"Rajesh@035"
         })
        // console.log(Loggedin)
         const handleSubmit= async (e:FormEvent)=>{
             e.preventDefault();
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
                const data=await response.json()
                // console.log(data)
                if (data.message === "Login successful"){
                    // console.log(data.token)
                    // localStorage.setItem("token",data.token)
                    LoggingFunc();
                    navigate("/home")
                }
                // 
                // <Navigate to ="/home" />

            }catch(error){
                console.error(error)
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