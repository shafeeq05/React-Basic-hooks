import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
        
        <div className='navBar'>
        <NavLink to='/todo'>Todo</NavLink>
        <NavLink to='/context'>Context</NavLink>
        <NavLink to='/greet'>Greet</NavLink>
        <NavLink to='/counter' >Counter</NavLink>
        <NavLink to='/login' >Login</NavLink>
        <NavLink to='/register' >Register</NavLink>
        <NavLink to='/createvlog'>create vloge</NavLink>
        <NavLink to='/vlogetitle'>show vloge title</NavLink>
        </div>
        </>
    );
}

export default Home;
