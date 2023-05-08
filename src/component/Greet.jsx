import React from 'react';
import {AppContext} from '../App'
import { useContext } from 'react';
const Greet = () => {
    const {state,setState} = useContext(AppContext)
    return (
        <div>
            <h1>Hello {state} </h1>
            <button onClick={()=>{setState('sha')}}>change</button>
        </div>
    );
}

export default Greet;
