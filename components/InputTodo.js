/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
      title: '',
    };

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
        this.setState({
          title: '',
        });
      } else {
        alert('please write item');
      }
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            className="input-text"
            type="text"
            placeholder="Add Todo..."
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          <button className="input-submit">Submit</button>
        </form>
      );
    }
}
export default InputTodo;
