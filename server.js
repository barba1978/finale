const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path')
const cors = require('cors')
dotenv.config();

const {getAlldetails,createDetail,deleteDetail,getAllnames,updatedetails,searchAlldetails}= require('./modules/details.js');


// when i neee to use the post method i need to add :
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())




app.listen(process.env.PORT||8080, ()=>{
    console.log(`listen carefully on port ${process.env.PORT||8080}`);
  })

//connect the index file as a static file 
app.use('/home' , express.static(__dirname + '/public/nursery'))

app.use('/parents' , express.static(__dirname + '/public/parents'))

//get all the details from database 

 app.get('/details',(req,res)=>{
    getAlldetails()
    .then(elem=>{res.json(elem)})
    .catch(err=>{
        console.log(err);
    res.json({message:err.message})})

  })

  //get all the names 

  app.get('/names',(req,res)=>{
    getAllnames()
    .then(elem=>{res.json(elem)})
    .catch(err=>{
        console.log(err);
    res.json({message:err.message})})

  })

  //searching by the name of the kid :


  app.get('/parents/search',(req,res)=>{
    searchAlldetails(req.query.q)
    .then(data=> {res.json(data)})
    .catch(err=>{console.log(err)})
    
    })
    

  //post request to create a new element in the database 
  app.post('/addNew',(req,res)=>{
    createDetail(req.body)
    .then(elem=>{res.json(elem)})
    .catch(err=>{
        console.log(err);
    res.json({message:err.message})

  })})

// delete a database line based on the name 
app.delete('/addNew/:id',(req,res)=>{
    console.log(req.params.id);
    deleteDetail(req.params.id)
    .then(data=>{
        res.json(data)})
    .catch(err=>{
        console.log(err);
        res.json({message:err.message})})
})

// put request to update a the line 
app.put('/addNew/:id',(req,res)=>{
    console.log( req.params.id ,req.body);
    updatedetails(req.params.id,req.body)
    .then(elem=>{res.json(elem)})
    .catch(err=>{
        console.log(err);
    res.json({message:err.message})

  })})

  //

  app.use('/',express.static(path.join(__dirname,'client/build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
  })