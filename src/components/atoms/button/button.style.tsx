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

const buttonSizes: Partial<Sizes> = {
  small: smallSize,
  mid: midSize,
  big: bigSize,
};

const backgroundColors: Partial<Colors> = {
  black: 'var(--app-black-color)',
  primary: 'var(--app-primary-color)',
  secondary: 'var(--app-secondary-color)',
  accent: 'var(--app-accent-color)',
};

const backgroundHoverColors: Partial<Colors> = {
  black: 'var(--app-black-color-hover)',
  primary: 'var(--app-primary-color-hover)',
  secondary: 'var(--app-secondary-color-hover)',
  accent: 'var(--app-accent-color-hover)',
};

const borderColors: Partial<Colors> = {
  black: 'var(--app-black-color-hover)',
  primary: 'var(--app-primary-color-hover)',
  secondary: 'var(--app-secondary-color-hover)',
  accent: 'var(--app-accent-color-hover)',
};

const fontColors: Partial<Colors> = {
  black: 'var(--app-font-white)',
  primary: 'var(--app-font-white)',
  secondary: 'var(--app-font-black)',
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
  width: fit-content;
  
  button {
    border-radius: 5px;
    border: solid 2px ${(props) => (borderColors[props.color])};
    color: ${(props) => (fontColors[props.color])};
    background: ${(props) => (backgroundColors[props.color])};
    ${(props) => (buttonSizes[props.size])};
    
    :hover {
      cursor: pointer;
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

    :disabled {
      opacity: 0.4;
      cursor: default;

    }
  }
`;

export default SCButton;
