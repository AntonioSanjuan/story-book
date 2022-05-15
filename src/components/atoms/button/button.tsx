import React from 'react';
import SCButton, { ButtonStyleProps } from './button.style';

interface ButtonProps extends ButtonStyleProps {
    text: string
    icon?: string|undefined
}

function Button(
  {
    text,
    color,
    size,
    icon,
    ...props
  }: ButtonProps
& React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <SCButton
      color={color}
      size={size}
    >
      <button
        type="button"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <div className="button_Container">
          {icon && (
            <div className="button_icon">
              icon
            </div>
          )}
          <div className="button_text">
            {text}
          </div>
        </div>
      </button>
    </SCButton>
  );
}
export default Button;
