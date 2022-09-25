
function add(){
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; 
let dd = today.getDate();


let full_name = document.getElementById('name').value
let today_date= yyyy+'-'+mm+'-'+dd

fetch('http://localhost:5000/addNew',{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({full_name,today_date})
})
.then(elem=>elem.json())
.then(data=>{
    console.log(data)
alert('The details has been uploads succesully!')})
.catch(err=>{console.log(err)})


}

function deleteD(){
const full_name = document.getElementById('full_name').value
fetch(`http://localhost:5000/addNew/${full_name}`,{
    method:'DELETE'
})
.then(elem=>elem.json())
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})


}



function mychange(e){
    let full_name = document.getElementById('update_name').value
   

    fetch(`http://localhost:5000/addNew/${full_name}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({full_name:full_name,[e.name]:e.value })
    })
    .then(elem=>elem.json())
    .then(data=>{
        console.log(data)
    alert('The details has been update succesully!')})
    .catch(err=>{console.log(err)})
    
}










