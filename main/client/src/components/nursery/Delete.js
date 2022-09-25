import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form';



const Delete =()=>{
const [full_name,setName]=useState('')

const delData=(e)=>{
    e.preventDefault()
    fetch(`/addNew/${full_name}`,{
        method:'DELETE',
      })
      .then(res=> res.json())
      .then(data => {console.log(data);
      })
      .catch(err=>{
        console.log(err);
      })


}

return(
<div>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name : </Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)}  placeholder="Enter name ..." />
        <Form.Text className="text-muted">
          Type the name that you want to delete.
        </Form.Text>
      </Form.Group>

      <Button onClick={delData} variant="danger" type="submit">
        Submit
      </Button>
    </Form>

</div>
)}

export default Delete 