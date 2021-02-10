import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import Time_Manager from '../TitmeManager';

function Task({ label, created, toggle_status, remove_todo, status, id }) {
  const create = `created ${formatDistance(created, Date.now())} ago`;
  const checked = status === 'completed' ? 'checked' : '';

  return (
    <div className={`view ${status}`}>
      <input className="toggle" type="checkbox" defaultChecked={checked} onClick={() => toggle_status(id)} />
      <label className="view__description">
        <span className="description">{label}</span>
        <Time_Manager />
        <span className="created">{create}</span>
      </label>
      <button className="icon icon-edit" type="button" aria-label="Edit" />
      <button aria-label="Delete" type="button" className="icon icon-destroy" onClick={() => remove_todo(id)} />
    </div>
  );
}

Task.defaultProp = {
  label: '',
  created: 'ett',
  status: '',
  id: Math.random() * 784,
};
Task.propTypes = {
  label: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  toggle_status: PropTypes.func.isRequired,
  remove_todo: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Task;
