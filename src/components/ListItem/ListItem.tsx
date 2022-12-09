import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ListItemProps, Task } from '../../interfaces';
import './ListItem.css';

export const ListItem: FC<ListItemProps> = ({
  id,
  completed,
  title,
  tasks,
  setTasks
}) => {
  const setCompleted = () => {
    let temp: Task[] = [];

    tasks.forEach(el => {
      if (el.id === id) {
        temp.push({id: id, completed: true, title: el.title});
      } else {
        temp.push(el);
      }
    });

    setTasks(temp);
  };

  return (
    <div className={`list_item ${completed ? 'completed' : ''}`}>
        <button
          className="list_item_check"
          onClick={setCompleted}
        >
            <FontAwesomeIcon
                icon={faCheck}
                className="list_item_icon"
            />
        </button>
        <span className="list_item_title">
            {title}
        </span>
    </div>
  );
}
