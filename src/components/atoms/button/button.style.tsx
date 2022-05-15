import styled, { css } from 'styled-components';
import Colors from '../../../models/internal/styled-components/Colors/Colors.model';
import Sizes from '../../../models/internal/styled-components/Sizes/Sizes.model';

export interface ButtonStyleProps {
  color?: keyof Colors
  size?: keyof Sizes
}

const bigSize = () => css`
  padding: 12px 35px;
`;

const midSize = () => css`
  padding: 10px 25px;
`;

const smallSize = () => css`
  padding: 5px 15px;
`;

const buttonStyles: Partial<Sizes> = {
  small: smallSize,
  mid: midSize,
  big: bigSize,

};

const backgroundColors: Partial<Colors> = {
  primary: 'var(--app-primary-color)',
  secondary: 'var(--app-secondary-color)',
  accent: 'var(--app-accent-color)',
};

const backgroundHoverColors: Partial<Colors> = {
  primary: 'var(--app-primary-color-hover)',
  secondary: 'var(--app-secondary-color-hover)',
  accent: 'var(--app-accent-color-hover)',
};

const fontColors: Partial<Colors> = {
  primary: 'var(--app-font-black)',
  secondary: 'var(--app-font-white)',
  accent: 'var(--app-font-grey)',
};

const SCButton = styled.div.attrs<
ButtonStyleProps, // What is consumed by .attrs()
Required<ButtonStyleProps> // What comes out of .attrs()
>((props: ButtonStyleProps) => (
  {
    color: props.color ?? 'primary',
    size: props.size ?? 'small',
  } as Required<ButtonStyleProps>
))`
  display:flex;
  place-content: center;
  align-items: center;

  button {
    color: ${(props) => (fontColors[props.color])};
    background: ${(props) => (backgroundColors[props.color])};
    ${(props) => (buttonStyles[props.size])};
    
    :hover {
      background: ${(props) => (backgroundHoverColors[props.color])};
    }

    .button_Container {
      display: flex;
      flex-direction: row;
      display-content:center;
      align-items: center;

      .button_icon {
        margin-right: 5px;
      }

    }
  }
`;

export default SCButton;
