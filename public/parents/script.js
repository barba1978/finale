


function display(){
    const query=document.getElementById('search').value
    fetch(`http://localhost:5000/search?search=${query}`)
    .then(res=> res.json())
    .then(data=>{console.log(data)})
    // .then(data => {
    // renderProducts(data)})
    // .catch(err=>{console.log(err)})
    
    }