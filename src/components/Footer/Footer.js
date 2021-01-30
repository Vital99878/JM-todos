import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import TaskFilter from '../TasksFilter/TasksFilter';

const Footer = ({ toggle_filter, filter, clear_completed, active_todos_count }) => (
  <footer className="footer">
    <span className="todo-count">{active_todos_count} items left</span>
    <TaskFilter toggle_filter={toggle_filter} filter={filter} />
    <button onClick={clear_completed} className="clear-completed" type="button">
      Clear completed
    </button>
  </footer>
);

Footer.propTypes = {
  active_todos_count: PropTypes.number.isRequired,
  clear_completed: PropTypes.func.isRequired,
  toggle_filter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

Footer.defaultProp = {
  filter: 'all',
};

export default Footer;
