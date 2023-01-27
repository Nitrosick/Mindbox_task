import { useState, FC, useMemo } from 'react';
import { Filters } from '../components/Filters/Filters';
import { Form } from '../components/Form/Form';
import { ListItem } from '../components/ListItem/ListItem';
import { FilterValues, Task } from '../interfaces';
import './App.css';

export const initialState: Task[] = [
  { id: 1, completed: false, title: "Тестовое задание" },
  { id: 2, completed: true, title: "Прекрасный код" },
  { id: 3, completed: false, title: "Покрытие тестами" },
]

export const App: FC = () => {
  const [filter, setFilter] = useState<string>(FilterValues.All);
  const [tasks, setTasks] = useState<Task[]>(initialState);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const addTask = (value: string) => {
    if (!tasks.length) {
      setTasks([{ id: 1, completed: false, title: value }]);
    } else {
      setTasks([...tasks, { id: (tasks[tasks.length - 1].id + 1), completed: false, title: value }]);
    }
  };

  const setCompleted = (id: number) => {
    let temp: Task[] = [];

    tasks.forEach(el => {
      if (el.id === id) {
        temp.push({ id: id, completed: true, title: el.title });
      } else {
        temp.push(el);
      }
    });

    setTasks(temp);
  };

  useMemo(() => {
    let result = [];

    switch (filter) {
      case FilterValues.Active:
        result = tasks.filter(task => !task.completed);
        break;
      case FilterValues.Completed:
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
        <Form addTask={addTask}/>
        <div className="todo_list">
          {filteredTasks.map((task) => (
            <ListItem
              key={task.id}
              id={task.id}
              completed={task.completed}
              title={task.title}
              setCompleted={setCompleted}
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
