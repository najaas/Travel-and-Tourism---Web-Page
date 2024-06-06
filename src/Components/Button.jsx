import React from 'react';

const Button = (props) => {
  return (
    <button
      className="w-[120px] h-[120px] rounded-full"
      style={{ backgroundColor: props.color || 'white' }}
    >
      {props.arrows}
    </button>
  );
};

export default Button;
