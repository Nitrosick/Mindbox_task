import { useState, FC, useMemo } from 'react';
import { FiltersProps, FilterValues } from '../../interfaces';
import './Filters.css';

export const Filters: FC<FiltersProps> = ({
  filter,
  setFilter,
  tasks,
  setTasks
}) => {
  const [opened, setOpened] = useState<number>(0);

  const clearCompleted = () => {
    const result = tasks.filter(task => !task.completed);
    setTasks(result);
  };

  useMemo(() => {
    let count = 0;

    tasks.forEach(el => {
      if (!el.completed) count++;
    });

    setOpened(count);
  }, [tasks]);

  return (
    <div className="filters">
        <span className="filters_left_tasks">{opened} items left</span>
        <div className="filters_states">
            <button
              className={`filters_states_item ${filter === FilterValues.All ? 'selected' : ''}`}
              onClick={() => {setFilter(FilterValues.All)}}
            >All</button>
            <button
              className={`filters_states_item ${filter === FilterValues.Active ? 'selected' : ''}`}
              onClick={() => {setFilter(FilterValues.Active)}}
            >Active</button>
            <button
              className={`filters_states_item ${filter === FilterValues.Completed ? 'selected' : ''}`}
              onClick={() => {setFilter(FilterValues.Completed)}}
            >Completed</button>
        </div>
        <button
          className="filters_clear"
          onClick={clearCompleted}
        >Clear completed</button>
    </div>
  );
}
