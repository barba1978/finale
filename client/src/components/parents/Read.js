
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Camera from './Camera.js'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


const Read=()=>{

const [full_name,setName]=useState('')
const [data,setData]=useState([])


const handleClick=(e)=>{
    e.preventDefault()
fetch(`/parents/search?q=${full_name}`)
.then(elem=>elem.json())
.then(info=>{
    console.log(data)
    setData(info)})
.catch(err=>{console.log(err)})

}

 return(
     <div >
     <h2>With the webcam the parents can see the kids all the time.</h2>
     <Camera />
<div className='top'>


<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search by Name</Form.Label>
        <Form.Control onChange={(e)=>{setName(e.target.value)}} placeholder="Baby's name" />
        </Form.Group>
      
      <Button variant="primary" onClick={handleClick} type="submit">
        GO
      </Button>
    </Form>
</div>
<div>


</div>


{
    data.map(elem=>{
        return(
            <div className='outside'>
            <ListGroup>
            {elem.id}
      <ListGroup.Item>{elem.full_name}</ListGroup.Item>
      <ListGroup.Item>1° nap: {elem.sleep_start}</ListGroup.Item>
      <ListGroup.Item>1° nap (wake-up):{elem.sleep_end}</ListGroup.Item>
      <ListGroup.Item>2° nap: {elem.second_sleep_start}</ListGroup.Item>
      <ListGroup.Item>2° nap (wake-up): {elem.second_sleep_end}</ListGroup.Item>
      <ListGroup.Item>1° meal(time): {elem.eat_time}</ListGroup.Item>
      <ListGroup.Item>1° meal(ml): {elem.eat_quantity}</ListGroup.Item>
      <ListGroup.Item>2° meal(time): {elem.second_eat_time}</ListGroup.Item>
      <ListGroup.Item>2° meal(ml): {elem.second_eat_quantity}</ListGroup.Item>
      <ListGroup.Item>1° change: {elem.change}</ListGroup.Item>
      <ListGroup.Item>2° change: {elem.second_change}</ListGroup.Item>
      <ListGroup.Item>3° change: {elem.third_change}</ListGroup.Item>
      <ListGroup.Item>Note: {elem.note}</ListGroup.Item>

    </ListGroup>
            
        
            </div>
        )
    })
}

</div>)   
}

export default Read

