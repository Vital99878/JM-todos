import React         from 'react'
import './Header.css'
import NewTaskForm from '../NewTaskForm/NewTaskForm'


function Header({add_new_todo}) {
  return (
  <header className='header'>
    <h1>todos</h1>
    <NewTaskForm add_new_todo={add_new_todo}/>
  </header>
  );
}

export  default Header;