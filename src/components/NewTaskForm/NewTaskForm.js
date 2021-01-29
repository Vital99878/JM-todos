import React, { Component } from 'react'
import './NewTaskForm.css'


export default class NewTaskForm extends Component {
  state = {label: ''}
  onSubmit = ( e ) => {
    e.preventDefault()
    let label = this.state.label
    this.props.add_new_todo( label )
    this.setState( {label: ''} )
  }
  get_label = ( e ) => {
    let label = e.target.value;
    this.setState( () => {
      return {label: label}
    } )
  }

  render() {
    return (
    <form onSubmit={this.onSubmit}>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus
             onChange={this.get_label}
             value={this.state.label}/>
    </form>
    )
  }
}