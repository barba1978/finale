import React from 'react'
import Table from 'react-bootstrap/Table'

function TableDetails(props){
return(
<tbody>
    <tr>
      <td>{props.date}</td>
      <td>{props.name}</td>
      <td>{props.sleep1}</td>
      <td>{props.sleep1a}</td>
      <td>{props.sleep2}</td>
      <td>{props.sleep2a}</td>
      <td>{props.first_bottle_time}</td>
      <td>{props.first_bottle_quantity}</td>
      <td>{props.second_bottle_time}</td>
      <td>{props.second_bottle_quantity}</td>
      <td>{props.first_change}</td>
      <td>{props.second_change}</td>
      <td>{props.third_change}</td>
      <td>{props.notes}</td>
      </tr>
</tbody>)    
}


export default TableDetails