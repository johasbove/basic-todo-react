import React from 'react'
import Todo from './todo.js'

class List extends React.Component{
  constructor(props){
    super(props);
  },
  render(){
    var styles = {'backgroundColor': '#E3D324'}
    return{
      <div style={styles}>
        {this.props.todos.map((todo) =>
          <div key={todo.id}>
            {todo.render()}
          </div>
        )}
      </div>
    }
  }
}

List.propTypes: {
  todos.propTypes: React.propTypes.array
};