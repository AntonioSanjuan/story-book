import React from 'react';
import Icons from '../../../models/internal/styled-components/Icons/Icons.model';
import SCIcon, { ButtonStyleProps } from './icon.style';

interface IconProps extends ButtonStyleProps {
    icon: keyof Icons,
    title?: string
}

const iconParser: Icons = {
  none: 'bi',
  alarm: 'bi bi-alarm',
  apple: 'bi bi-apple',
  award: 'bi bi-award',
  chevronUp: 'bi bi-chevron-up',
  chevronDown: 'bi bi-chevron-down',
};

function Icon({
  icon, title, size, color,
}: IconProps) {
  return (
    <SCIcon
      size={size}
      color={color}
    >
      <i className={iconParser[icon]} title={title} />
    </SCIcon>
  );
}

export default Icon;
