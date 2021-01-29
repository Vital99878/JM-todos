import React              from 'react'
import './Task.css'
import { formatDistance } from "date-fns"


function Task( {label, created, toggle_status,remove_todo,  status, id} ) {

  created = `created ${formatDistance( created, Date.now() )} ago`

  return (
  <div className={`view ${status}`}>
    <input className="toggle" type="checkbox"
           onClick={() => toggle_status(id)}/>
    <label>
      <span className="description">{label}</span>
      <span className="created">{created}</span>
    </label>
    <button className="icon icon-edit"/>
    <button className="icon icon-destroy"
    onClick={ () => remove_todo(id)}/>
  </div>
  )
}

export default Task