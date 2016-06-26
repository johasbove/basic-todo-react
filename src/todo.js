import React from 'react'

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: props.todo_text,
      date: props.due_date,
      done: props.done
    };
    this.onCheck = this.onCheck.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onCheck(){
    this.setState(function(previousState, currentProps){
      return {done: previousState.state!};
    });
  }

  // OJOO!!!
  onDelete(){
    this.setState(function(previousState, currentProps){
      return {this.defaultProps};
    });
  }
  render(){
    var styles = {'width': '50px', 'height': '50px', 'backgroundColor' : '#DFDFDF'}
    if(this.done){
      Object.assign(styles, {'backgroundColor' : '#ADFF2F'})
    }
    return(
      <div style={styles}>
        <h3> {this.todo_text} </h3>
        <p> Due Date: {this.due_date} </p>
        <p> Done: {this.done} </p>
      </div>
    )
  }
}

Todo.propTypes = {
  todo_text: React.propTypes.string,
  due_date: React.propTypes.string,
  done: React.propTypes.bool
};

Todo.defaultProps = {
  todo_text = "",
  due_date = "",
  done = false
};