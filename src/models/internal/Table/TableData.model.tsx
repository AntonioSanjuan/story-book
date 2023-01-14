import { ReactElement } from 'react';
import Positions from '../styled-components/Positions/Positions.model';
import Sorts from '../styled-components/Sorts/Sorts.model';

export interface CustomTableSort {
    activeSortedColumnName?: string
    activeSortedColumnDirection?: keyof Sorts;
}

interface CustomTableGeneralOptions extends CustomTableSort {
    height?: number
}

export interface CustomTableHeaderOptions extends CustomTableGeneralOptions {
    hideLessThan?: number
    position?: keyof Positions
    stickyOnScroll?: boolean
    avoidSort?: boolean
    width?: number
}

export interface CustomTableRowOptions extends CustomTableGeneralOptions {
    defaultValue?: string|number|boolean|ReactElement|undefined
}

export interface CustomTableHeader {
    name: string,
    options?: CustomTableHeaderOptions
}

export interface CustomTableRowElem {
    value: string|number|boolean|ReactElement|undefined
    options?: CustomTableRowOptions
}

export interface CustomTableRow {
    row: CustomTableRowElem[]
}

export interface CustomTable extends CustomTableGeneralOptions {
    tableHeaders: CustomTableHeader[]
    tableRows: CustomTableRow[]
}
