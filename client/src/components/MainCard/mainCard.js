import React from 'react';
import InputBox from '../InputBox/inputBox.js';
import moon from '../images/icon-moon.svg';
import './mainCard.css';

const MainCard = (props) => {
  return (
    <div>
      <div className='container' id='main-wrapper'>
        <div className='row'>
          <div className='col'>
            <div id='heading'>TODO</div>
          </div>
          <div className='col'>
            <img src={moon} alt='moon icon' id='moon' />
          </div>
        </div>
        <div className='row'>
          <InputBox />
        </div>
        <div className='main-input-area'>
          <InputBox />
          <InputBox />
          <InputBox />
        </div>
      </div>
    </div>
  );
};
export default MainCard;
