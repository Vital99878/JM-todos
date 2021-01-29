import React      from 'react'
import './Footer.css'
import TaskFilter from '../TasksFilter/TasksFilter'
import PropTypes  from 'prop-types'


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

Footer.propTypes = {
  active_todos_count: PropTypes.number.isRequired,
  clear_completed: PropTypes.func.isRequired,
  toggle_filter: PropTypes.func.isRequired
}

export default Footer;