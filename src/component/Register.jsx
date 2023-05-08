import React from 'react';
import { Button,Form,InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    function formSubmit(){
        event.preventDefault()
        const formdata = new FormData(event.target)
        const jsondata = Object.fromEntries(formdata.entries())
        console.log(jsondata);
        navigate('/login')
    }
    return (
        <div className='regdiv'>
            <div className='formsubdiv'>
            <Form onSubmit={formSubmit}>
              <Form.Control  type='text' placeholder='name' required />
              <Form.Control  type='password' name='password' placeholder='password' required />
              <Form.Control  type='password' name='repassword' placeholder='re-enterpassword' required />
              <Form.Control  type='email' name='e-mail'  placeholder='e-mail' required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' />
              <Form.Control  type='tel' name='phone'  placeholder='Phne number' required pattern='^[7-9][0-9]{9}$' />
              <Button type='submit'>Register</Button>
              <Button variant='info' onClick={()=>navigate('/login')}>Login</Button>
            </Form>
            </div>
        </div>
    );
}

export default Register;
