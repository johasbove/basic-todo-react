import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './todoapp.js'

require('bootstrap/dist/css/bootstrap.css')

var App = document.getElementById('todo-app')
ReactDOM.render(<TodoApp todos={todosArray} />, App)