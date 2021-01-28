import React, { Component } from 'react'
import '../TasksFilter/TasksFilter.css'


export default class TaskFilter extends Component {

  render() {
    const {show_all, show_active, show_completed, filter} = this.props.filters;
    const clazz_1 = filter !== 'all' ? '' : 'selected'
    const clazz_2 = filter !== 'active' ? '' : 'selected'
    const clazz_3 = filter !== 'completed' ? '' : 'selected'

    return (
    <ul className="filters">
      <li>
        <button className={clazz_1} onClick={show_all}>All</button>
      </li>
      <li>
        <button className={clazz_2} onClick={show_active}>Active</button>
      </li>
      <li>
        <button className={clazz_3} onClick={show_completed}>Completed</button>
      </li>
    </ul>
    )
  }
}