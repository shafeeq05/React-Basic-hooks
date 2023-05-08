import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'

export default function Contentvlog() {
    const {frmdata} = useContext(AppContext)
    const {id}= useParams()
    
   
  return (
    <>

        {frmdata.map((data)=>{
            if(data.id==id)
            return(
                <ul key={data.id}>
                <h2> <u>  {data.vlogtitile}</u></h2>
                <h3>  {data.vloge} </h3>
                </ul>
            )
        })}

    </>
  )
}
