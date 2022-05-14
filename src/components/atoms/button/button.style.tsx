import styled, { css } from 'styled-components';
import Colors from '../../../models/internal/Colors/Colors.model';
import Sizes from '../../../models/internal/Sizes/Sizes.model';

interface ButtonStyleProps {
  buttonColor?: keyof Colors
  buttonSize?: keyof Sizes
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

const SCButton = styled.div.attrs<ButtonStyleProps, any>((props: ButtonStyleProps) => ({
  buttonColor: props.buttonColor,
  buttonSize: props.buttonSize,
}))`
  display:flex;
  place-content: center;
  align-items: center;

  button {
    :hover {
      background: ${({ buttonColor }: {buttonColor: keyof Colors }) => (backgroundHoverColors[buttonColor] ?? backgroundHoverColors.primary)};
    }
    color: ${({ buttonColor }: {buttonColor: keyof Colors }) => (fontColors[buttonColor] ?? fontColors.primary)};
    background: ${({ buttonColor }: {buttonColor: keyof Colors }) => (backgroundColors[buttonColor] ?? backgroundColors.primary)};
    ${({ buttonSize }: {buttonSize: keyof Sizes}) => (buttonStyles[buttonSize] ?? buttonStyles.small)};
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
