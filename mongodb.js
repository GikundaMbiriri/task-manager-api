// const mongodb=require('mongodb');
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID
const {MongoClient,ObjectID}=require('mongodb');
const connectionURL='mongodb://127.0.0.1:27017';
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
if(error){
    return console.log('unable to connect to database');
}
const db =client.db(databaseName);
// db.collection('users').updateOne({_id:new ObjectID("5e86ee4c66390223e4e9bebf")},
// {
//     $inc:{
//         age:1
//     }
// }
// ).then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)
// })
db.collection('tasks').deleteOne({task:"swimming"}).then((result)=>{
    console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
// db.collection('users').deleteMany({age:20}).then((result)=>{
// console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
// db.collection('tasks').updateMany({
//     completed:false
// },{
//     $set:{
//         completed:true
//     }
// }
// ).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
//})
// db.collection('users').findOne({_id:new ObjectID("5e86f7dc84d8b02aacec7d17")},(error,result)=>{
// if(error){
//     return console.log('unable to find the user')
// }
// console.log(result)
// })
// db.collection('users').find({age:"21"}).toArray((error,use)=>{
//     if(error){
//         return console.log('oops!An error occured!')
//     }
//     console.log(use)
// })
// db.collection('tasks').findOne({_id:new ObjectID("5e86effef5161d28d4d50867")},(error,use)=>{
//     if(error){
//         return console.log('oops!An error occured!')
//     }
//     console.log(use)
// })
// db.collection('tasks').find({completed:false}).toArray((error,use)=>{
//     if(error){
//         return console.log('oops!An error occured!')
//     }
//     console.log(use)
// })

// db.collection('users').insertOne({
//     _id:id,
//     name:'code guru',
//     age:'21'
// },(error,result)=>{
// if (error){
//     return console.log('Unable to insert user')
// }
// console.log(result.ops)
// })
// db.collection('users').insertMany([{name:'peter',age:'21'},{name:'mbiriri',age:20}],(error,result)=>{
// if(error){
//     return console.log('unable to insert the data');
// }
// console.log(result.ops)
//})
// db.collection('tasks').insertMany([{task:'reading',completed:true},
// {task:'coding',completed:false},{task:'swimming',completed:true}],(error,result)=>{
// if(error){
//     return console.log('unable to insert tasks')
// }
// console.log(result.ops)
//})
})