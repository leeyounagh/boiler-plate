const express =require('express')
const res = require('express/lib/response')
const app =express()
const port = 5000


const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://admin:qwer1234@cluster0.l9bb7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{

}).then(()=>console.log('mongoDB connected...'))
.catch(err=>console.log(err))



app.get('/',(req,res) => res.send('hello World'));
app.listen(port,()=>console.log(`example app listening on port ${port}!`))