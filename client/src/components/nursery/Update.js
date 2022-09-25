import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed , faBaby , faUtensils} from '@fortawesome/free-solid-svg-icons'







const Update=()=>{
  const today = new Date();
  const hours = today.getHours();
  let minutes = today.getMinutes(); 
  let seconds = today.getSeconds();
  let realTime= hours +':'+minutes+':'+seconds


const [newData,setData] = useState([])
const [newName,setName]=  useState(null)

function handleClick(e) {
    e.preventDefault();
    console.log(e.target.name);
    fetch(`/addNew/${newName}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ full_name: newName, [e.target.name]: realTime })
    })
      .then(elem => elem.json())
      .then(data => {
        console.log(data);
        alert('The details has been update successfully!');
      })
      .catch(err => {
        console.log(err);
        alert('something went wrong try again!');
      });

  }

  const handleClick1=(e)=>{
    e.preventDefault();
    fetch('/names')
    .then(elem=>elem.json())
    .then(data=>{setData(data)
    console.log(newData);})
    .catch(err=>{console.log(err)})
    
  
   }
return(
<div>

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Click the button too see the kids in the class</Form.Label>
      </Form.Group>
  <Button onClick={handleClick1} variant="light" type="submit"> Display List </Button>
</Form>

<div className='outDiv'>
{newData.map(elem=>{return(
  <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={require("./baby.jpg")} />
      <Card.Body>
        <Card.Title>{elem.full_name}</Card.Title>
        <Button variant="primary" onClick={()=>setName(elem.full_name)}>click and update</Button>
      </Card.Body>
    </Card>
)})}
   
 
 </div>
 

<div className='upDate' >
  <div className='napDiv center'>
  <FontAwesomeIcon icon={faBed} size="4x"  /><br/>
  <div className='buttons_update'>
  <h5>1°nap :</h5>
  <Button variant="light"  size="sm" onClick={handleClick} name="sleep_start"> Start  </Button>{' '}
  <Button variant="light" size="sm" onClick={handleClick} name="sleep_end"> End </Button><br/>
  <h5>2°nap :</h5>
  <Button variant="light" size="sm" onClick={handleClick} name="second_sleep_start"> Start </Button>{' '}
  <Button variant="light"  size="sm" onClick={handleClick} name="second_sleep_end"> End </Button><br/>
  <h5>3°nap :</h5>
  <Button variant="light" size="sm" onClick={handleClick} name="Third_sleep_start"> Start </Button>{' '}
  <Button variant="light" size="sm" onClick={handleClick} name="Third_sleep_end"> End </Button>
  </div>
  </div>

  <div className='eatDiv center'>
  <FontAwesomeIcon icon={faUtensils} size="4x"  /><br/>
  <div className='buttons_update'>
  <h5>1°feed:</h5>
  <Button variant="light" onClick={handleClick} name="eat_time"> feed </Button>{' '}
  <h5>2°feed:</h5>
  <Button variant="light" onClick={handleClick} name="second_eat_time"> Feeds </Button>{' '}
  <h5>3°feed:</h5>
  <Button variant="light" onClick={handleClick} name="third_eat_time"> Feeds </Button>{' '}

  </div>
  
  

  </div>
  
  <div className='diapDiv center'>
  <FontAwesomeIcon icon={faBaby} size="4x"  /><br/>
  <div className='buttons_update'>
  <h5>1°change:</h5>
  <Button variant="light" onClick={handleClick} name="change"> Change </Button>
  <h5>2°change:</h5>
  <Button variant="light" onClick={handleClick} name="second_change"> Change </Button>
  <h5>3°change:</h5>
  <Button variant="light" onClick={handleClick} name="third_change"> Change </Button>
  <h5>4°change:</h5>
  <Button variant="light" onClick={handleClick} name="fourth_change"> Change </Button>
  </div>
  


  </div>

  
</div>
</div>


)}

export default Update



//Special Notes : <input type="text" onChange={(e)=>setEvent(e)} name="note" id='note' /> <br/>
//<button onClick={handleClick}>Update</button> <br/>