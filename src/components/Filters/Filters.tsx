import React, { useState, useEffect, FC } from 'react';
import { FiltersProps } from '../../interfaces';
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

  useEffect(() => {
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
              className={`filters_states_item ${filter === 'all' ? 'selected' : ''}`}
              onClick={() => {setFilter('all')}}
            >All</button>
            <button
              className={`filters_states_item ${filter === 'active' ? 'selected' : ''}`}
              onClick={() => {setFilter('active')}}
            >Active</button>
            <button
              className={`filters_states_item ${filter === 'completed' ? 'selected' : ''}`}
              onClick={() => {setFilter('completed')}}
            >Completed</button>
        </div>
        <button
          className="filters_clear"
          onClick={clearCompleted}
        >Clear completed</button>
    </div>
  );
}
