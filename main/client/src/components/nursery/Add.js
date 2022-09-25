import React from 'react'
import {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


const Add =()=>{

const [full_name,setName]=useState(null)


const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; 
let dd = today.getDate();

let today_date= yyyy+'-'+mm+'-'+dd



const addData=(e)=>{
    e.preventDefault()
    fetch('/addNew',{
        method:'POST',
        headers:{
        'Content-type':'application/json'
        },
    body:JSON.stringify({full_name,today_date})})
    .then(elem=>elem.json())
    .then(data=>{console.log(data);
    alert('The details has been uploads succesully!')})
    .catch(err=>{console.log(err)})
   


}
       
   

return(
<>

<div className='addDetails'>

<Form>
      <fieldset >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Type each name </Form.Label>
          <Form.Control onChange={(e)=>setName(e.target.value)}  id="disabledTextInput" placeholder="Baby's name ..." />
        </Form.Group>
        
        
        <Button type="submit" variant="light" onClick={addData} > Submit</Button>
      </fieldset>
    </Form>


</div>

</>
)
}

export default Add

