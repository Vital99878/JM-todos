import React, { Component } from 'react'
import '../TasksFilter/TasksFilter.css'
import PropTypes            from 'prop-types'


export default class TaskFilter extends Component {
  static defaultProps = {
    filter: 'all'
  }
  static propTypes = {
    filter: PropTypes.oneOf( [ 'all', 'active', 'completed' ] )
  }

  render() {
    const {toggle_filter, filter} = this.props;
    const clazz_1 = filter !== 'all' ? '' : 'selected'
    const clazz_2 = filter !== 'active' ? '' : 'selected'
    const clazz_3 = filter !== 'completed' ? '' : 'selected'
    const get_filter = ( e ) => {
      let filter = e.target.innerText.toLowerCase()
      toggle_filter( filter )
    }

    return (
    <ul className="filters">
      <li>
        <button className={clazz_1} onClick={get_filter}>All</button>
      </li>
      <li>
        <button className={clazz_2} onClick={get_filter}>Active</button>
      </li>
      <li>
        <button className={clazz_3} onClick={get_filter}>Completed</button>
      </li>
    </ul>
    )
  }
}