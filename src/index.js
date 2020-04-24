const express=require('express')
require('./db/mongoose.js');

const userRouter=require('./routes/user')
const taskRouter=require('./routes/task')
const app=express()

const port =process.env.PORT
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GET requests are disabled')
//     } else{
//         next()
//     }

// })
// app.use((req,res,next)=>{
//     res.status(503).send('our app is under maintanance')
// })
// const multer=require('multer')
// const upload= multer({
//     dest:'images',limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('please upload a PDF'))
//         }
//         cb(undefined,true)

//     }
// })
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })
app.use(express.json())

app.use(taskRouter)
app.use(userRouter)


app.listen(port,()=>{
    console.log('app is running on port '+port)
})

// const jwt=require('jsonwebtoken')
// const myFunction=async ()=>{
//     const token =jwt.sign({_id:'123abc'},'thisismynewcourse',{expiresIn:'7 days'})
  
//     console.log(token)
//     const data = jwt.verify(token,'thisismynewcourse')
//     console.log(data)
// }
// myFunction()