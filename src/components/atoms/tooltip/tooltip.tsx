import { ReactElement } from 'react';
import SCTooltip, { TooltipStyleProps } from './tooltip.style';

interface TooltipProps extends TooltipStyleProps {
    children: ReactElement
    tooltip: ReactElement
}

function Tooltip({
  tooltip, children, position, forceDisplay,
}: TooltipProps) {
  return (
    <SCTooltip position={position} forceDisplay={forceDisplay}>
      {children}
      <div className="tooltip">
        {tooltip}
      </div>
    </SCTooltip>
  );
}

export default Tooltip;
