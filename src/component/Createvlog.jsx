import React,{useContext} from 'react'
import { Form,Button } from 'react-bootstrap'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

export default function Createvlog() {
    const navigate = useNavigate()
    const {frmdata,setFrmdata}=useContext(AppContext)
    function formSubmit(){
    event.preventDefault()
    const frmdatas = new FormData(event.target)
    const formobj = Object.fromEntries(frmdatas.entries())
    formobj.id=Date.now()
    setFrmdata(()=>[...frmdata,formobj])
    
    navigate('/')
    }
  return (
   <>
   <Form onSubmit={formSubmit}>
    <input type='text' name='vlogtitile' placeholder='vloge title' required />
    <textarea required name='vloge' placeholder='type your vlog' />
    <Button type='submit'>Submit</Button>
   </Form>
   </>
  )
}
