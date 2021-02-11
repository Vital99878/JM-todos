import React, { Component } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = { label: '', min: '', sec: '' };

  onSubmit = (event) => {
    event.preventDefault();
    const { label, min, sec } = this.state;
    const { add_new_todo } = this.props;
    add_new_todo(label, +min, +sec);
    this.setState({ label: '', min: '', sec: '' });
  };

  get_label = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  };

  render() {
    const { label, min, sec } = this.state;
    return (
      <form className="new-task" onSubmit={this.onSubmit}>
        <input className="new-todo" name="label" placeholder="Task" onChange={this.get_label} value={label} />
        <input className="new-todo" name="min" type="number" placeholder="Min" onChange={this.get_label} value={min} />
        <input className="new-todo" name="sec" type="number" placeholder="Sec" onChange={this.get_label} value={sec} />
        <input className="new-todo__submit" type="submit" />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  add_new_todo: PropTypes.func.isRequired,
};
