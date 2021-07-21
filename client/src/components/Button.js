import React from 'react';

const Button = ({icon, text, onClick, loading}) => {
  return (
    <button className='Button__normal-button' onClick={onClick} disabled={loading}>
      {
        icon && (
          <img className='Button__icon' src={icon} alt='작성하기 아이콘'/>
        )
      }      
      <div className='Button__text'>{text}</div>
    </button>
  );
}

export default Button;
