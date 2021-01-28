import React      from 'react'
import './Footer.css'
import TaskFilter from '../TasksFilter/TasksFilter'


const Footer = ( {filters, active_todos_count} ) => {
  return (
  <footer className="footer">
    <span className="todo-count">{active_todos_count} items left</span>
    <TaskFilter filters={filters}/>
    <button onClick={filters.clear_completed} className="clear-completed">Clear completed</button>
  </footer>
  )
}

export default Footer;