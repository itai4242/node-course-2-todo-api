// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID("5c0cf4c06c6d98e2da6c7ff6"),
  // },{
  //   $set: {
  //     completed:true
  //   }
  // })

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID("5c093652a5db010dac100278"),
  },  {
      $set: {
        name: 'itai',
        isSingle:false
      },
      $inc: {
        age:1
      }
    }, {
      returnOriginal:false
    }).then((result) => {
      console.log(result);
    })

//   // db.close();
});
