// import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap';
// import axios from 'axios'    
const Login = () => {
    const navigate = useNavigate()
//    useEffect(()=>{
//     axios.get('http://localhost:3000/adminlogin')
//     .then((res)=>console.log(res.data,"respos....................."))
//     .catch((err)=>console.log(err))
//    },[])
    
    const formSubmit = ()=>{
        event.preventDefault()
        const formdata= new FormData(event.target)
        const formdatajson = Object.fromEntries(formdata.entries())
        console.log(formdatajson);
        navigate('/')
    }
    return (
        <div>
            <Form  className='login'  onSubmit={formSubmit} method='post'>
                <input type="text" name='username' placeholder='Username' required />
                <input type="password" name='password' placeholder='password' required/>
                <Button variant='success' type='submit'>Login</Button>
                <Button variant='primary' onClick={()=>navigate('/register')}>Register</Button>
            </Form>
        </div>
    );
}

export default Login;
