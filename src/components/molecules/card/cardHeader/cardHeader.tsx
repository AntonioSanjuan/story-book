import Icons from '../../../../models/internal/styled-components/Icons/Icons.model';
import Icon from '../../../atoms/icons/icon';
import SCCardHeader from './cardHeader.style';
import Text from '../../../atoms/text/text';

interface CardHeaderProps {
    title: string,
    subtitle?: string,
    icon?: keyof Icons
}

function CardHeader({ title, subtitle, icon }: CardHeaderProps) {
  return (
    <SCCardHeader>
      {icon && (
      <div className="CardHeader_icon">
        <Icon icon={icon} />
      </div>
      )}
      <div className="CardHeader_text">
        <b>{title}</b>
        <Text data={subtitle} />
      </div>
    </SCCardHeader>
  );
}

export default CardHeader;
