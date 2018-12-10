var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

// var express = require('express');
// var bodyParser = require('body-parser');
//
// var {mongoose} = require('./db/mongoose');
// var {Todo} = require('./models/todo');
// var {User} = require ('./models/User');
//
// var app = express();
//
// app.use(bodyParser.json());
//
// app.post('/todos',(req,res) =>{
//   var todo = new Todo({
//     text: req.body.text
//   })
//
//   Todo.save().then((doc)=>{
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   })
// })
//
// app.listen(3000, () => {
//   console.log('stated on port 3000')
// })


//
// // var newTodo = new Todo({
// //   text: 'Cook dinner'
// // });
// //
// // newTodo.save().then((doc) => {
// //   console.log('Saved todo', doc);
// // }, (e) => {
// //   console.log('Unable to save todo')
// // });
//
// var otherTodo = new Todo({
//   text: true
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });
//
// var newUser = new User({
//   email: 'dkfkr@fotlot'
// })
// newUser.save().then((doc) => {
//   console.log('Saved User', doc);
// }, (e) => {
//   console.log('Unable to save User', e)
// });
