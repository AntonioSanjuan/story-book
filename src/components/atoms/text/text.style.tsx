import styled, { css } from 'styled-components';
import TextTypes from '../../../models/internal/styled-components/Texts/Texts.model';

export interface TextStyleProps {
    type?: keyof TextTypes
}

const headerTextStyles = () => css`
  font-size: 20px;
`;

const errorTextStyles = () => css`
  font-size: 14px;
  margin: 0.5em 0;
  color: red;
`;

const descriptionTextStyles = () => css`
    font-size: 14px;
`;

const explanationTextStyles = () => css`
  font-size: 10px;
`;

const tableHeaderTextStyles = () => css`
  font-size: 15px;
  margin: 0.5em 0;
  font-weight: 600;
`;

const tableDataTextStyles = () => css`
  font-size: 13px;
  margin: 0;
`;

const textTypes: TextTypes = {
  header: headerTextStyles,
  description: descriptionTextStyles,
  explanation: explanationTextStyles,
  error: errorTextStyles,
  tableHeader: tableHeaderTextStyles,
  tableData: tableDataTextStyles,
};

const SCText = styled.div.attrs<
TextStyleProps, // What is consumed by .attrs()
Required<TextStyleProps> // What comes out of .attrs()
>((props: TextStyleProps) => (
  {
    type: props.type ?? 'description',
  } as Required<TextStyleProps>
))`
    width: ${(props) => (props.type === 'tableHeader' ? 'fit-content' : 'inherit')};
      
    p {
      ${(props) => (textTypes[props.type])};
    }
`;

export default SCText;
