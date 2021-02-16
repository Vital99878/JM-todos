import React, { Component, useState } from 'react';
import './App.css';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

const App = () => {
  const [todo_list, setTodos] = useState([
    {
      label: 'Completed task',
      created: new Date(2021, 0, 25, 14, 55),
      id: 11,
      status: 'active',
      min: 10,
      sec: 30,
    },
    {
      label: 'Editing task',
      created: new Date(2020, 11, 12, 14, 55),
      id: 52,
      status: 'completed',
      min: 8,
      sec: 30,
    },
    {
      label: 'Active task',
      created: new Date(2021, 0, 20, 10, 55),
      id: 3,
      status: 'active',
      min: 0,
      sec: 3,
    },
  ]);
  const [filter, setFilter] = useState('all');

  const toggle_status = (id) => {
    const updated_todo_list = todo_list.map((todo) => {
      if (todo.id === id) {
        todo.status = todo.status === 'active' ? (todo.status = 'completed') : 'active';
      }
      return todo;
    });
    setTodos(updated_todo_list);
  };

  const add_new_todo = (label, min, sec) => {
    if (label.length > 2 && ((min === 0 && sec > 2) || min > 0)) {
      const new_todo = {
        label,
        created: Date.now(),
        id: Math.random() * 15875,
        status: 'active',
        min,
        sec,
      };
      setTodos([...todo_list, new_todo]);
    }
  };

  const remove_todo = (id) => {
    setTodos(todo_list.filter((todo) => todo.id !== id));
  };

  // eslint-disable-next-line no-shadow
  const toggle_filter = (filter) => {
    setFilter(filter);
  };

  const clear_completed = () => {
    setTodos(todo_list.filter((item) => item.status !== 'completed'));
  };

  // eslint-disable-next-line no-shadow
  const filtered = (todos, filter) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((item) => item.status === 'active');
      case 'completed':
        return todos.filter((item) => item.status === 'completed');
      default:
        return todos;
    }
  };

  const set_total_seconds = (secs, id) => {
    // eslint-disable-next-line no-shadow
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          todo.min = secs % 60;
          todo.sec = secs - (secs % 60) * 60;
        }
        return todo;
      })
    );
  };

  const visibleList = filtered(todo_list, filter);
  const active_todos_count = todo_list.reduce((count, todo) => {
    if (todo.status === 'active') {
      count += 1;
    }
    return count;
  }, 0);

  return (
    <section className="todoapp">
      <Header add_new_todo={add_new_todo} />
      <TaskList
        todos={visibleList}
        toggle_status={toggle_status}
        remove_todo={remove_todo}
        set_total_seconds={set_total_seconds}
      />
      <Footer
        filter={filter}
        clear_completed={clear_completed}
        toggle_filter={toggle_filter}
        active_todos_count={active_todos_count}
      />
    </section>
  );
};

export default App;
