import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

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
const SubmitButton = styled(Link)`
    text-decoration: none;
    background-color: #e31c79;
    text-align: center;
    color: white;
    border-radius: 10px;
    padding : 1rem;

`;
const Login = () =>{
    return (
        <LoginForm>
            <Header2>Login</Header2>
            <label>Email: </label>
            <Input></Input>
            <label>Password: </label>
            <Input></Input>
            <SubmitButton to={"/"}>Login</SubmitButton>
            <label>Don't have an account? <Anchor style={{ color: '#e31c79' }} to={"/register"}>Register</Anchor></label>
        </LoginForm>

    )
}
export default Login;