import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import NewTaskForm from '../NewTaskForm';

function Header({ add_new_todo }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm add_new_todo={add_new_todo} />
    </header>
  );
}
Header.propTypes = {
  add_new_todo: PropTypes.func.isRequired,
};
export default Header;
