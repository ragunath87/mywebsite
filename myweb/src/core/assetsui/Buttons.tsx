import React from 'react';

type Props = {
  text?: string,
  children?: React.ReactNode, //Allow any content to pass inside the button tag
  className? : string,
  onClick?: () => void,
}

const Button = ({ text, onClick, children, className }: Props) => {
  const buttonClass = `button ${className || ''}`;
  const handleClick = onClick ? onClick : () => {};
  return(
  <button className={buttonClass.trim()} onClick={handleClick}>
    {text ? text : children}
  </button>
  );
}

export default Button;

