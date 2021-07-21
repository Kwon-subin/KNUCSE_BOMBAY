import React from 'react';

const Input = ({placeholder, type, value, onChange}) => {
  return (
    <div className="Input__box">
      <input
        className="Input__input"
        placeholder={placeholder}
        type={type || 'text'} // 타입을 따로 설정해주지 않는 경우에는 Text로 설정
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
