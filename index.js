const express =require('express')
const res = require('express/lib/response')
const app =express()
const port = 5000
const {User} = require("./models/User");
const bodyParser = require('body-parser')

 const config =require("./config/key")
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

const mongoose =require('mongoose')
mongoose.connect(config.mongoURI,
{

}).then(()=>console.log('mongoDB connected...'))
.catch(err=>console.log(err))



app.get('/',(req,res) => res.send('hello World'));

app.post('/register',(req,res)=>{
    //회원가입할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.

    const user =new User(req.body)
    user.save((err,userInfo)=>{
        if(err) return res.json({sucess:false,err})
        return res.status(200).json({
            success:true
        })

    })
})
app.listen(port,()=>console.log(`example app listening on port ${port}!`))