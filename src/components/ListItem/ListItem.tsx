import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ListItemProps } from '../../interfaces';
import './ListItem.css';

export const ListItem: FC<ListItemProps> = ({
  id,
  completed,
  title,
  setCompleted
}) => {

  return (
    <div className={`list_item ${completed ? 'completed' : ''}`}>
        <button
          className="list_item_check"
          onClick={() => {setCompleted(id)}}
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
