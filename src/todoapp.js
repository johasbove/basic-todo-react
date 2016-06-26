import List from './list.js'

class TodoApp extends React.Component {
  constructor(props){
    super(props);
  }
  saveTodo = this.saveTodo.bind(this);
  deleteTodo = this.deleteTodo.bind(this);
  updateTodo = this.updateTodo.bind(this);
  visibleTodos = this.visibleTodos.bind(this);
  updateFilter = this.updateFilter.bind(this);
  todoCount = this.todoCount.bind(this);

  saveTodo(todo_text){
    // SALVAR TODO
  }
  deleteTodo(id){
    // BORRAR TODO
  }
  updateTodo(id){
    // UPDATE TODO
  }
  visibleTodos(){
    // HACER UPDATE DEL ARREGLO props.todos
    // LLAMAR AL RENDER SEGUN props.filter_option
  }
  updateFilter(){
    // HACER UPDATE DEL props.filter_option
  }
  todoCount(){
    // CONTAR LOS TODOs Y DEVOLVER UN NUMERO
  }
}

TodoApp.propTypes = {
  todos: React.PropTypes.array,
  // todos: React.PropTypes.arrayOf(React.Component.Todo), Imprimir React.Component
  filter_option: React.PropTypes.number
};