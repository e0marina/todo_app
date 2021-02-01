import React, { useState } from 'react';
import './inputBox.css';

const InputBox = (props) => {
  const [task, setTask] = useState('');
  const [num, setNum] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting task ${task}`);
    setNum(num + 1);
    localStorage.setItem(num, `${task}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='inputWrapper'>
          <input
            id='text-input'
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <input id='check-box' type='checkbox'></input>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
