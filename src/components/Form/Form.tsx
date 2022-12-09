import React, { useState, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FormProps } from '../../interfaces';
import './Form.css';

export const Form: FC<FormProps> = ({ tasks, setTasks }) => {
  const [value, setValue] = useState<string>('');

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([...tasks, {id: (tasks[tasks.length-1].id + 1), completed: false, title: value}]);
    setValue('');
  };

  return (
    <form
      action="#"
      className="form"
      onSubmit={(e) => {addTask(e)}}
    >
      <FontAwesomeIcon
        icon={faChevronDown}
        className="form_icon"
      />
      <input
        type="text"
        placeholder="What needs to be done?"
        className="form_input"
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
      />
    </form>
  );
}
