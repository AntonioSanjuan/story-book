import styled, { css } from 'styled-components';
import Positions from '../../../models/internal/styled-components/Positions/Positions.model';
import { CustomTableHeader, CustomTableSort } from '../../../models/internal/Table/TableData.model';

export interface TableStyleProps {
    tableHeaders: CustomTableHeader[]
    sortingOptions: CustomTableSort,
    rowHeight: number,
}

const defaultRowHeight = 30;

const getLeftTdOffset = (tdIndex: number, tableHeaders: CustomTableHeader[]): number => {
  let tdOffset = 0;
  for (let td = 0; td < tdIndex; td += 1) {
    tdOffset += tableHeaders[td].options?.width ?? 0;
  }
  return tdOffset * tdIndex;
};

const leftPosition = css`
text-align: left;

> div {
  display: flex;
  justify-content: flex-start !important;
  width: 100% !important;
}
`;

const rightPosition = css`
text-align: right;
  
> div {
  display: flex;
  justify-content: flex-end !important;
  width: 100% !important;
}
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
      min-width: ${tableHeader.options?.width ? `${tableHeader.options?.width}px` : 'inherit'};
      width: ${tableHeader.options?.width ? `${tableHeader.options?.width}px` : 'inherit'};
      .TableTd_Icon {
        display: ${(sortOptions && !tableHeader.options?.avoidSort) ? 'flex' : 'none'};
        align-items: center;
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

    if (tableHeader.options?.stickyOnScroll) {
      columnStyles += `
      thead > tr > td:nth-child(${index + 1}) { 
        position: sticky; 
        left: ${getLeftTdOffset(index, tableHeaders)}px;
        min-width: ${tableHeader.options.width}px;
        width: ${tableHeader.options.width}px;
        padding: 0;
        z-index: 2;
        background-color: white;
      }
      tbody > tr > td:nth-child(${index + 1}) { 
        position: sticky;
        left: ${getLeftTdOffset(index, tableHeaders)}px;
        min-width: ${tableHeader.options.width}px;
        width: ${tableHeader.options.width}px;
        padding: 0;
        z-index: 2;
        background-color: white;
      }
      `;
    }

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
  return css`${columnStyles}`;
};

const SCTable = styled.div.attrs<
TableStyleProps, // What is consumed by .attrs()
Required<TableStyleProps> // What comes out of .attrs()
>(
  (props: TableStyleProps) => ({
    tableHeaders: props.tableHeaders,
    sortingOptions: props.sortingOptions,
    rowHeight: props.rowHeight ?? defaultRowHeight,
  } as Required<TableStyleProps>),
)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  place-content: center;
  overflow-x: auto;

  height: 100%;

  table {
    width: 100%;
    border-spacing: 0;
    ${(props) => setTableStyles(props.tableHeaders, props.sortingOptions)};

    > tbody > tr {
      height: ${(props) => props.rowHeight}px;
    }
  }

  .TableTd_Container {
    display: flex;
    gap: 8px;
  }
`;

export default SCTable;
