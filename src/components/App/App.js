import React from 'react'
import './App.css';

import Header   from '../Header'
import TaskList from '../TaskList'
import Footer   from '../Footer'


function App() {
  const todo_list = [
    {
      label: 'Completed task',
      created: new Date( 2021, 0, 25, 14, 55 ),
      id: 11
    },
    {
      label: 'Editing task',
      created: new Date( 2020, 11, 12, 14, 55 ),
      id: 52
    },
    {
      label: 'Active task',
      created: new Date( 2021, 0, 20, 10, 55 ),
      id: 3
    }
  ]
  return (
  <section className="todoapp">
    <Header/>
    <TaskList list_arr={todo_list}/>
    <Footer/>
  </section>
  );
}

export default App;
