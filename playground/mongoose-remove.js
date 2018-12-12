const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
})

Todo.findOneAndRemove({text : "Something to do"}).then(todo=>{
  console.log(todo);
})
Todo.findByIdAndRemove('5c1111ba6c6d98e2da6d2545').then((todo) => {
  console.log(todo);
})
