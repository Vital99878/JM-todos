import React from 'react';
import './TaskList.css';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

function TaskList({ list_arr, toggle_status, remove_todo }) {
  const task_list = list_arr.map((todo) => (
    <li key={todo.id}>
      <Task {...todo} toggle_status={toggle_status} remove_todo={remove_todo} />
    </li>
  ));
  return (
    <section className="main">
      <ul className="todo-list">{task_list}</ul>
    </section>
  );
}

TaskList.defaultProp = {
  list_arr: [],
  toggle_status: () => {},
  id: Math.random() * 784,
};
TaskList.propTypes = {
  remove_todo: PropTypes.func.isRequired,
  list_arr: PropTypes.arrayOf.isRequired,
  toggle_status: PropTypes.string.isRequired,
};
export default TaskList;
