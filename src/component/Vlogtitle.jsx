import React,{useContext} from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom';

export default function Vlogtitle() {
   
    const {frmdata,setFrmdata}=useContext(AppContext)
    console.log(frmdata);
    const vlog = frmdata[0].vloge
  return (
    <>
    <div>Vlogtitle</div>
    {frmdata.map((data)=>{
        return(
            <Link to={`/content/${data.id}`}><p key={data.id}>{data.vlogtitile}</p></Link>
        )
    })}
    </>
  )
}
