import React from 'react';
import Colors from '../../../models/internal/Colors/Colors.model';
import Sizes from '../../../models/internal/Sizes/Sizes.model';
import SCButton from './button.style';

interface ButtonProps {
    text: string
    color?: keyof Colors
    size?: keyof Sizes
    icon?: string|undefined
    props?: unknown
}

function Button({
  text,
  color = 'primary',
  size = 'small',
  icon = undefined,
  props = undefined,
}:
    ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <SCButton
      buttonColor={color}
      buttonSize={size}
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
