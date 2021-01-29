import React              from 'react';
import './Task.css';
import { formatDistance } from 'date-fns';


function Task( {label, created, toggle_status, remove_todo, status, id} ) {
  const create = `created ${formatDistance( created, Date.now() )} ago`;
  const checked = status === 'completed' ? 'checked' : '';

  return (
  <div className={`view ${status}`}>
    <input
    className="toggle"
    type="checkbox"
    defaultChecked={checked}
    onClick={() => toggle_status( id )}
    />
    <label>
      <span className="description">{label}</span>
      <span className="created">{create}</span>
    </label>
    <button className="icon icon-edit" type='button' aria-label="Edit"/>
    <button
    aria-label="Delete"
    type="button"
    className="icon icon-destroy"
    onClick={() => remove_todo( id )}
    />
  </div>
  );
}

export default Task;
