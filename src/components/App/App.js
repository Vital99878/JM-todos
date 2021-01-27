import React, { Component } from 'react'
import './App.css';

import Header   from '../Header'
import TaskList from '../TaskList'
import Footer   from '../Footer'


export default class App extends Component {
  state = {
    todo_list: [
      {
        label: 'Completed task',
        created: new Date( 2021, 0, 25, 14, 55 ),
        id: 11,
        status: 'active'
      },
      {
        label: 'Editing task',
        created: new Date( 2020, 11, 12, 14, 55 ),
        id: 52,
        status: 'active'
      },
      {
        label: 'Active task',
        created: new Date( 2021, 0, 20, 10, 55 ),
        id: 3,
        status: 'active'
      }
    ]
  }

  toggle_status = id => {
    this.setState( ( {todo_list} ) => {
      let updated_todo_list = todo_list.map( todo => {
        if ( todo.id === id ) {
          if ( todo.status === 'active' ) {
            todo.status = 'completed'
          }
        }
        return todo
      } )
      return {
        todo_list: updated_todo_list
      }
    } )
  }

  remove_todo = id => {
    this.setState( ( {todo_list} ) => {
      return {
        todo_list: todo_list.filter( todo => {
          if ( todo.id !== id ) {
            return todo
          }
        } )
      }
    } )
  }

  add_new_todo = label => {
    if ( label.length >= 3 ) {
      this.setState( ( {todo_list} ) => {
        let new_todo = {
          label: label,
          created: Date.now(),
          id: Math.random() * 15875,
          status: 'active'
        }
        return {
          todo_list: [ ...todo_list, new_todo ]
        }
      } )
    }
  }

  render() {
    return (
    <section className="todoapp">
      <Header add_new_todo={this.add_new_todo}/>
      <TaskList list_arr={this.state.todo_list}
                toggle_status={this.toggle_status}
                remove_todo={this.remove_todo}
      />
      <Footer/>
    </section>
    );
  }
}
