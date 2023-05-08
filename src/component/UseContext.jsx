import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Container } from 'react-bootstrap';

const UseContext = () => {
    const {state,setState}= useContext(AppContext)
    
    const themeStyle = {
        backgroundColor : state? '#333': '#ccc',
        color: state? '#ccc':'#333',
        padding:'2rem',
        margin: '2rem',  
    }
    function togle(){
        setState(prev=>!prev)
    }
   
    return (
        <Container className='my-4'>
        <button onClick={togle} >togle</button> 
         <div style={themeStyle }>
           useContext 
        </div>
        </Container>
    );
}

export default UseContext;
