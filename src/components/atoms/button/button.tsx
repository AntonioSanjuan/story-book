import React from 'react';
import Icons from '../../../models/internal/styled-components/Icons/Icons.model';
import Icon from '../icons/icon';
import SCButton, { ButtonStyleProps } from './button.style';

interface ButtonProps extends ButtonStyleProps {
    text: string,
    icon?: keyof Icons
}

function Button(
  {
    text,
    color,
    size,
    icon,
    noBorder,
    ...props
  }: ButtonProps
& React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <SCButton
      color={color}
      size={size}
      noBorder={noBorder}
    >
      <button
        title={text}
        type="button"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <div className="button_Container">
          {icon && (
            <div className="button_icon">
              <Icon icon={icon} />
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
