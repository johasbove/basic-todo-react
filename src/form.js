import React from 'react'

class Form extends React.Component{
  getInitialState: function() {
    return {
      todo_text: 'Enter your task',
      due_date: '',
      done: false
    };
  },
  handleChange: function(event) {
    this.setState({
      todo_text: event.target.todo_text,
      due_date: event.target.due_date,
      done: event.target.done
    });
  },
  render: function() {
    return (
      <input
        type="text"
        todo_text={this.state.todo_text}
        onChange={this.handleChange}
      />
      <input
        type="text"
        due_date={this.state.due_date}
        onChange={this.handleChange}
      />
      <input
        type="text"
        done={this.state.done}
        onChange={this.handleChange}
      />
    );
  }
}