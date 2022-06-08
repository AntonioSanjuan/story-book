import styled, { css } from 'styled-components';
import Positions from '../../../models/internal/styled-components/Positions/Positions.model';
import { CustomTableHeader } from '../../../models/internal/Table/TableData.model';

export interface TableStyleProps {
    tableHeaders: CustomTableHeader[]
}

const leftPosition = css`
display: flex;
justify-content: flex-start;
`;

const rightPosition = css`
display: flex;
justify-content: flex-end;
`;

const topPosition = css`
`;

const bottomPosition = css`
`;

const tableElementPosition: Partial<Positions> = {
  left: leftPosition,
  right: rightPosition,
  top: topPosition,
  bottom: bottomPosition,
};

const getMediaQuery = (hideLessThan: number)
: string => (`${hideLessThan}px`);

const setTableStyles = (tableHeaders: CustomTableHeader[]) => {
  let columnStyles = '';
  tableHeaders.forEach((tableHeader, index) => {
    if (tableHeader.options?.hideLessThan) {
      columnStyles += `
      @media (max-width: ${getMediaQuery(tableHeader.options?.hideLessThan)}) {
        thead > tr > td:nth-child(${index + 1}) { 
            display: none; 
        }
        tbody > tr > td:nth-child(${index + 1}) { 
            display: none; 
        }
      }
    `;
    }

    if (tableHeader.options?.position) {
      columnStyles += `
        thead > tr > td:nth-child(${index + 1}) { ${tableElementPosition[tableHeader.options.position]}; }
        tbody > tr > td:nth-child(${index + 1}) { ${tableElementPosition[tableHeader.options.position]}; }
        `;
    }
  });
  console.log('columnStyles', columnStyles);
  return css`${columnStyles}`;
};

// const setPositionStyles = (tableHeaders: CustomTableHeader[]) => {
//   const hiddenStyles = tableHeaders.map((tableHeader, index) => {
//     if (tableHeader.options?.position) {
//       return css`
//       `;
//     }
//     return css``;
//   });
//   return hiddenStyles;
// };

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
    ${(props) => setTableStyles(props.tableHeaders)};
  }
`;

export default SCTable;
