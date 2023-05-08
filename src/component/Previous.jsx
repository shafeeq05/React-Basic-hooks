import React from 'react';
import { useState } from 'react';

const Previous = () => {
    const [state,setSate]= useState({
        count:0
    })
    const change = ()=>{
        // setSate({count:state.count+1})
        cli()
        cli()
     
    }
    const cli = ()=>{
        setSate((Previous,props)=>{
            
            return({count:Previous.count+1})
             
      })
    }

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={change}  >click</button>
        </div>
    );
}

export default Previous;
