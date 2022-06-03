import React, { ReactElement } from 'react';
import Icons from '../../../models/internal/styled-components/Icons/Icons.model';
import SCCard from './card.style';
import CardHeader from './cardHeader/cardHeader';

interface CardProps {
    title: string,
    subtitle?: string,
    icon?: keyof Icons
    children: ReactElement
}

function Card({
  title, subtitle, icon, children,
}: CardProps) {
  return (
    <SCCard>
      <div className="Card_Header">
        <CardHeader
          title={title}
          subtitle={subtitle}
          icon={icon}
        />
      </div>
      <div className="Card_content">
        {children}
      </div>
    </SCCard>
  );
}

export default Card;
