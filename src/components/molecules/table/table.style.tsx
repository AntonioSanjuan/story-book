import styled, { css } from 'styled-components';
import { CustomTableHeader } from '../../../models/internal/Table/TableData.model';

export interface TableStyleProps {
    tableHeaders: CustomTableHeader[]
}
const setHiddenStyles = (tableHeaders: CustomTableHeader[]) => {
  const hiddenStyles = tableHeaders.map((tableHeader, index) => {
    if (tableHeader.options?.hideLessThan) {
      return css`
      @media (max-width: ${tableHeader.options?.hideLessThan}px) {
        thead > tr > td:nth-child(${index + 1}) { display: none; }
        tbody > tr > td:nth-child(${index + 1}) { display: none; }
      }
    `;
    }
    return css``;
  });
  return hiddenStyles;
};

const SCTable = styled.div.attrs<
TableStyleProps, // What is consumed by .attrs()
Required<TableStyleProps> // What comes out of .attrs()
>(
  (props: TableStyleProps) => ({
    tableHeaders: props.tableHeaders,
  } as Required<TableStyleProps>),
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  height: 100%;

  table {
    width: 100%;
    ${(props) => setHiddenStyles(props.tableHeaders)};
  }
`;

export default SCTable;
