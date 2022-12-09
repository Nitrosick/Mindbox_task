import React, { useState, useEffect, FC } from 'react';
import { Filters } from '../components/Filters/Filters';
import { Form } from '../components/Form/Form';
import { ListItem } from '../components/ListItem/ListItem';
import { Task } from '../interfaces';
import './App.css';

export const initialState: Task[] = [
  {id: 1, completed: false, title: "Тестовое задание"},
  {id: 2, completed: true, title: "Прекрасный код"},
  {id: 3, completed: false, title: "Покрытие тестами"},
]

export const App: FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [tasks, setTasks] = useState<Task[]>(initialState);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    let result = [];

    switch (filter) {
      case 'active':
        result = tasks.filter(task => !task.completed);
        break;
      case 'completed':
        result = tasks.filter(task => task.completed);
        break;
      default:
        result = tasks;
        break;
    }

    setFilteredTasks(result);
  }, [filter, tasks]);

  return (
    <div
      className="app"
      data-testid="app_test"
    >
      <h1 className="app_title">todos</h1>
      <div className="todo">
        <Form
          tasks={tasks}
          setTasks={setTasks}
        />
        <div className="todo_list">
          {filteredTasks.map((task) => (
            <ListItem
              key={task.id}
              id={task.id}
              completed={task.completed}
              title={task.title}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div>
        <Filters
          filter={filter}
          setFilter={setFilter}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}
