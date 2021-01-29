import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = { label: '' }

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    const {add_new_todo} = this.props
    add_new_todo(label);
    this.setState({ label: '' });
  }

  get_label = (e) => {
    const label = e.target.value;
    this.setState(() => ({ label }));
  }

  render() {
    const {label} = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.get_label}
          value={label}
        />
      </form>
    );
  }
}
