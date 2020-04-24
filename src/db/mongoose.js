const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
})



// const me = new User({
//     name:"MGikunda ",
//     email:"peterMBIRIRI@gmail.com ",
//     password:'passwodfek'
// })
// me.save().then(()=>{
//     console.log(me)
// }).catch((e)=>{
// console.log('error!',e)
// })

// const code=new Task ({
//     task:"coding java     "
// })
// code.save().then(()=>{
//     console.log(code)
// }).catch((e)=>{
//     console.log("error!",e)
// })