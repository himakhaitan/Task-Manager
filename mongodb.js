// CRUD Create Read Update Delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length) 
// console.log(id.toHexString().length)


MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, }, (error, client) => {
 if(error) {
     return console.log('Unable to connect')
 } 
 const db = client.db(databaseName)

//  db.collection('Users').insertOne({
//      _id: id,
//      name: 'Vikram',
//      Age: 26
//  }, (error, result) => {
//      if (error) {
//        return  console.log('Insert user Failed')
//      }
// console.log(result.ops)

//  })


// db.collection('Users').insertMany([{
//     name: 'Shreya',
//     age: 18,
// }, {
//     name: 'Umar',
//     age: 19
// }, {
//     name: 'Satyam',
//     age: 18
// }], (error, result)=> {
//     if (error) {
//         return console.log('Unable to insert Users')
//     }
//     console.log(result.ops, result.ops.length)
// })

// db.collection('tasks').insertMany([
//     {
//         discription: 'painting',
//         completed: true,
//     },{
//         discription: 'dancing',
//         completed: false,
//     },{
//         discription: 'coding',
//         completed: true,
//     }
// ], (error, result) => {
//     if (error) {
//         return console.log('Unable to update tasks')
//     }

//     console.log(result.ops)
// })

// db.collection('Users').findOne({ _id: new ObjectID("5fb65f97ced0580c1830cc7b")}, (error, user) => {
//     if (error) {
//         return console.log('unable to fetch')
//     }
//     console.log(user)
// })

// db.collection('tasks').find({ completed: true}).toArray((error, users) =>{
//     console.log(users)
// })
// db.collection('tasks').find({ completed: true}).count((error, count) =>{
//     console.log(count)
// })

// db.collection('tasks').findOne({_id: new ObjectID("5fb65bee21308222b05d7f2c")}, (error, task) => {
//     console.log(task)
// })

// db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
//     console.log(tasks)
// })

// db.collection('Users').updateOne({
//     _id: new ObjectID("5fb6582bfe650f0d4890e159")
// }, {
//     // $set: {
//     //     name: 'Atul'
//     // }
//     $inc: {
//         age: 2,
//     }
// }).then((result) => {
// console.log(result)
// }).catch((error) => {
// console.log(error)
// })

// db.collection('tasks').updateMany({
//     completed: true,
// }, {
//     $set: {
//         completed: false,
//     }
// }).then((result) => {
// console.log(result)
// }).then((error) => {
// console.log(error)
// })

// db.collection('Users').deleteMany({
//     age: 19
// }).then((result) => {
// console.log(result)
// }).catch((error) => {
// console.log(error)
// })

db.collection('tasks').deleteOne({
    discription: 'dancing'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

})