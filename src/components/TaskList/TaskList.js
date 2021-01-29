import React from 'react'
import './TaskList.css'
import Task  from '../Task/Task'


function TaskList( {list_arr, toggle_status, remove_todo} ) {
  let task_list = list_arr.map( ( todo ) => {
    return <li key={todo.id}>
      <Task  {...todo}
             toggle_status={toggle_status}
             remove_todo={remove_todo}/>
    </li>
  } )
  return (
    <section className='main'>
    <ul className="todo-list">
      {task_list}
    </ul>
  </section>
  )
}

export default TaskList