import styled, { css } from 'styled-components';
import Colors from '../../../models/internal/styled-components/Colors/Colors.model';
import Sizes from '../../../models/internal/styled-components/Sizes/Sizes.model';

export interface ButtonStyleProps {
    size?: keyof Sizes
    color?: keyof Colors
}

const bigSize = () => css`
    font-size: 32px;
`;

const midSize = () => css`
    font-size: 26px;
`;

const smallSize = () => css`
    font-size: 20px;
`;

const iconSizes: Partial<Sizes> = {
  small: smallSize,
  mid: midSize,
  big: bigSize,
};
const iconColors: Partial<Colors> = {
  black: 'var(--app-black-color)',
  primary: 'var(--app-primary-color)',
  secondary: 'var(--app-secondary-color)',
  accent: 'var(--app-accent-color)',
};

const SCIcon = styled.div.attrs<
ButtonStyleProps, // What is consumed by .attrs()
Required<ButtonStyleProps> // What comes out of .attrs()
>((props: ButtonStyleProps) => (
  {
    size: props.size ?? 'small',
    color: props.color ?? 'black',
  } as Required<ButtonStyleProps>
))`
    i {
        width: 100%;
        height: 100%;
        color: ${(props) => (iconColors[props.color])};
        ${(props) => (iconSizes[props.size])};

    }
`;

export default SCIcon;
