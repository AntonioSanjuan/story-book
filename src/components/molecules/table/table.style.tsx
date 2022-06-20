import styled, { css } from 'styled-components';
import Positions from '../../../models/internal/styled-components/Positions/Positions.model';
import { CustomTableHeader, CustomTableSort } from '../../../models/internal/Table/TableData.model';

export interface TableStyleProps {
    tableHeaders: CustomTableHeader[]
    sortingOptions: CustomTableSort
    sortable?: boolean
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

const setTableStyles = (tableHeaders: CustomTableHeader[], sortOptions: CustomTableSort) => {
  let columnStyles = '';
  tableHeaders.forEach((tableHeader, index) => {
    columnStyles += `
    thead > tr > td:nth-child(${index + 1}) { 
      cursor: ${(sortOptions && !tableHeader.options?.avoidSort) ? 'pointer' : 'inherit'};

      .TableTd_Icon {
        display: ${(sortOptions && !tableHeader.options?.avoidSort) ? 'inherit' : 'none'};
        width: fit-content;
        opacity: ${(sortOptions.activeSortedColumnName === tableHeader.name) ? '1 !important' : '0'};

      }

      .TableTd_Container {
        &:hover {
          .TableTd_Icon {
            opacity: 0.5
          }
        }
      }
    }`;

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
        thead > tr > td:nth-child(${index + 1}) .TableTd_Container{ ${tableElementPosition[tableHeader.options.position]}; }
        tbody > tr > td:nth-child(${index + 1}) { ${tableElementPosition[tableHeader.options.position]}; }
        `;
    }
  });
  return css`${columnStyles}`;
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
    ${(props) => setTableStyles(props.tableHeaders, props.sortingOptions)};
  }

  .TableTd_Container {
    display: flex;
  }
`;

export default SCTable;
