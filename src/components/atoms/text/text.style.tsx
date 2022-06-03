import styled, { css } from 'styled-components';
import TextTypes from '../../../models/internal/styled-components/Texts/Texts.model';

export interface TextStyleProps {
    type?: keyof TextTypes
}

const headerTextStyles = () => css`
  font-size: 20px;
`;

const descriptionTextStyles = () => css`
    font-size: 14px;
`;

const explanationTextStyles = () => css`
  font-size: 10px;
`;

const textTypes: Partial<TextTypes> = {
  header: headerTextStyles,
  description: descriptionTextStyles,
  explanation: explanationTextStyles,
};

const SCText = styled.div.attrs<
TextStyleProps, // What is consumed by .attrs()
Required<TextStyleProps> // What comes out of .attrs()
>((props: TextStyleProps) => (
  {
    type: props.type ?? 'normal',
  } as Required<TextStyleProps>
))`
    p {
      ${(props) => (textTypes[props.type])};
    }
`;

export default SCText;
