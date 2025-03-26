import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginForm= styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    width : 500px;
    height: 550px;
    border: 2px solid white;
    justify-content : center;
    padding: 4rem;
    
    
    
`;


const Input= styled.input`
    width:100%;
    padding:5px;
    margin: 10px 0;

`;

const SubmitButton = styled(Link)`
    text-decoration: none;
    background-color: pink;
    text-align: center;
    border-radius: 5px;
`;
const Login = () =>{
    return (
        <LoginForm>
            <h2>Login</h2>
            <label>Email: </label>
            <Input></Input>
            <label>Password: </label>
            <Input></Input>
            <SubmitButton to={"/"}>Login</SubmitButton>
            
        </LoginForm>

    )
}
export default Login;