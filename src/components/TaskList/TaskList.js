import React from 'react';
import './TaskList.css';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

function TaskList({ todos, toggle_status, remove_todo, set_total_seconds }) {
  const task_list = todos.map((todo) => (
    <li key={todo.id}>
      <Task {...todo} toggle_status={toggle_status} remove_todo={remove_todo} set_total_seconds={set_total_seconds} />
    </li>
  ));
  return (
    <section className="main">
      <ul className="todo-list">{task_list}</ul>
    </section>
  );
}

TaskList.defaultProp = {
  todos: [],
  toggle_status: () => {},
  id: Math.random() * 784,
};
TaskList.propTypes = {
  remove_todo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf.isRequired,
  toggle_status: PropTypes.string.isRequired,
  set_total_seconds: PropTypes.func.isRequired,
};
export default TaskList;
