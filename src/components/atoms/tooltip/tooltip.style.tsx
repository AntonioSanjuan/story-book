import styled, { css } from 'styled-components';
import Colors from '../../../models/internal/styled-components/Colors/Colors.model';
import Positions from '../../../models/internal/styled-components/Positions/Positions.model';
import Triggers from '../../../models/internal/styled-components/Triggers/Triggers.model';

export interface TooltipStyleProps {
  color?: keyof Colors;
  position?: keyof Positions;
  trigger?: keyof Triggers;
  forceDisplay?: boolean;
}

const leftPosition = () => css`
  top: -50%;
  right: 100%;
  margin-right: 5px;
`;

const rightPosition = () => css`
  top: -50%;
  left: 100%;
  margin-left: 5px;
`;

const topPosition = () => css`
  bottom: 100%;
  margin-bottom: 5px;
`;

const bottomPosition = () => css`
  top: 100%;
  margin-top: 5px;
`;

const tooltipPosition: Partial<Positions> = {
  left: leftPosition,
  right: rightPosition,
  top: topPosition,
  bottom: bottomPosition,
};

const backgroundColors: Partial<Colors> = {
  black: 'var(--app-black-color)',
  primary: 'var(--app-primary-color)',
  secondary: 'var(--app-secondary-color)',
  accent: 'var(--app-accent-color)',
};

const SCTooltip = styled.div.attrs<
  TooltipStyleProps, // What is consumed by .attrs()
  Required<TooltipStyleProps> // What comes out of .attrs()
>(
  (props: TooltipStyleProps) => ({
    color: props.color ?? 'primary',
    position: props.position ?? 'bottom',
    trigger: props.trigger ?? 'onHover',
  } as Required<TooltipStyleProps>),
)`
  position: relative;
  width: fit-content;

  .tooltip {
    min-width: 100%;
    width: fit-content;
    position: absolute;
    ${(props) => tooltipPosition[props.position]};
    background-color: white;
    border: 2px solid ${(props) => backgroundColors[props.color]};
    display: ${(props) => (props.forceDisplay ? 'inherit' : 'none')};
    z-index: 10;
  }

  :hover {
    .tooltip {
      display: inherit;
    }
  }
`;

export default SCTooltip;
