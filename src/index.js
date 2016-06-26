import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './todoapp.js'

require('bootstrap/dist/css/bootstrap.css')

var App = document.getElementById('todo-app');
var todosArray = [{
  text: 'Hacer mercado',
  date: '2-08-2016',
  done: true
},
{
  text: 'Cortar la barba del osito',
  date: '5-08-2016',
  done: false
}];

ReactDOM.render(<TodoApp todos={todosArray} />, App);