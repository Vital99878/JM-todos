import React              from 'react'
import './Task.css'
import { formatDistance } from "date-fns"


function Task( {label, created} ) {
  created = `created ${formatDistance( created, Date.now() )} ago`
  return (
  <div className="view">
    <input className="toggle" type="checkbox"/>
    <label>
      <span className="description">{label}</span>
      <span className="created">{created}</span>
    </label>
    <button className="icon icon-edit"/>
    <button className="icon icon-destroy"/>
  </div>
  )
}

export default Task