import React from 'react';
import './TasksFilter.css';
import PropTypes from 'prop-types';

const TaskFilter = ({ toggle_filter, filter }) => {
  const clazz_1 = filter !== 'all' ? '' : 'selected';
  const clazz_2 = filter !== 'active' ? '' : 'selected';
  const clazz_3 = filter !== 'completed' ? '' : 'selected';
  const get_filter = (event) => {
    toggle_filter(event.target.innerText.toLowerCase());
  };

  return (
    <ul className="filters">
      <li>
        <button className={clazz_1} onClick={get_filter} type="button">
          All
        </button>
      </li>
      <li>
        <button className={clazz_2} onClick={get_filter} type="button">
          Active
        </button>
      </li>
      <li>
        <button className={clazz_3} onClick={get_filter} type="button">
          Completed
        </button>
      </li>
    </ul>
  );
};

TaskFilter.defaultProps = {
  filter: 'all',
};

TaskFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
  toggle_filter: PropTypes.func.isRequired,
};

export default TaskFilter;
