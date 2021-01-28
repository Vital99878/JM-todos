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
    ],
    filter: "all" // all, active, completed
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

  remove_todo = id => {
    this.setState( ( {todo_list} ) => {
      return {
        todo_list: todo_list.filter( todo => todo.id !== id )
      }
    } )
  }

  show_all = () => {
    this.setState( {filter: 'all'} )
  }

  show_active = () => {
    this.setState( {filter: 'active'} )
  }

  show_completed = () => {
    this.setState( {filter: 'completed'} )
  }

  clear_completed = () => {
    this.setState( ( {todo_list} ) => {
      return {
        todo_list: todo_list.filter( item => item.status !== 'completed' )
      }
    } )
  }

  filter = ( items, filter ) => {
    switch ( filter ) {
      case "all":
        return items;
      case "active":
        return items.filter( ( item ) => { return item.status === 'active'} );
      case "completed":
        return items.filter( ( item ) => {
          return item.status === 'completed';
        } );
      default:
        return items;
    }
  };

  render() {
    const {todo_list, filter} = this.state;
    let show = {
      show_all: this.show_all,
      show_active: this.show_active,
      show_completed: this.show_completed,
      clear_completed: this.clear_completed,
      filter: this.state.filter
    }
    const visibleList = this.filter( todo_list, filter )
    const active_todos_count = todo_list.reduce( ( count, todo ) => {
      if ( todo.status === 'active' ) {
        count++
      }
      return count
    }, 0 )
    return (
    <section className="todoapp">
      <Header add_new_todo={this.add_new_todo}/>
      <TaskList list_arr={visibleList}
                toggle_status={this.toggle_status}
                remove_todo={this.remove_todo}
      />
      <Footer filters={show}
              active_todos_count={active_todos_count}/>
    </section>
    );
  }
}