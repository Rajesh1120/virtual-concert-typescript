import { Link } from "react-router-dom";
import React, {FormEvent, useState} from 'react'
import styled from "styled-components";


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
const Header2= styled.h1`
    text-align : center;
    color: #e31c79;
    
`;
const SubmitButton = styled(Link)`
    text-decoration: none;
    background-color: #e31c79;
    text-align: center;
    color: white;
    border-radius: 10px;
    padding : 1rem;

`;
const Register = () =>{
    const [userData, setUserData] = useState<UserDataRegister>({
        email:"",
        password:"",
        conformpassword:"",
    })
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        // console.log(userData)
        if (userData.password !== userData.conformpassword){
            console.log("your password is don't match ")
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
            <Header2>Register</Header2>
            <label>Email: </label>
            <Input type="text" value={userData.email} onChange={handleChange} name="email" placeholder=" Enter Email " required></Input>
            <label>Password: </label>
            <Input type="password" value={userData.password} onChange={handleChange} name="password" placeholder=" Enter password " required></Input>
            <label>Conform Password: </label>
            <Input type="password" value={userData.conformpassword}  onChange={handleChange} name="conformpassword" placeholder=" Enter password " required></Input>
            <SubmitButton type="submit" onClick={handleSubmit}to={"/"}>Register</SubmitButton>
            <label>Already have an account?{' '}
                <Anchor to={'/'} style={{ color: '#e31c79' }}>
                    Login Here
                </Anchor></label>
        </LoginForm>

    )
}
export default Register;