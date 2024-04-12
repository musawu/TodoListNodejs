const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel=require("./models/todo")

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://syntichemusawu645:a7zd5djDLNCdmdnJ@cluster0.jdaijlu.mongodb.net/")

app.get('/get', (req, res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.post('/add', (req, res)=>{

    const task = req.body.task;
    TodoModel.create({
        task:task
}).then(result =>res.json(result))
.catch(err =>res.json(err))


})

app.put('/update/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    TodoModel.findByIdAndUpdate({_id: id}, {done : true})
    .then(result=>res.json(result))
    .catch(err => res.json(err))
})


app.delete('/Delete/:id', (req, res)=>{
    const {id} = req.params;
    //console.log(id);
    TodoModel.findByIdAndDelete({_id: id})
    .then(result=>res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is Running");
});


