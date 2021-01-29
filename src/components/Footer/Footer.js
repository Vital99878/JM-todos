import React      from 'react'
import './Footer.css'
import TaskFilter from '../TasksFilter/TasksFilter'


const Footer = ( {toggle_filter, filter, clear_completed, active_todos_count} ) => {
  return (
  <footer className="footer">
    <span className="todo-count">{active_todos_count} items left</span>
    <TaskFilter toggle_filter={toggle_filter}
                filter={filter}/>
    <button onClick={clear_completed} className="clear-completed">Clear completed</button>
  </footer>
  )
}

export default Footer;