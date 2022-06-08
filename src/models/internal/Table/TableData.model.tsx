import { ReactElement } from 'react';
import Positions from '../styled-components/Positions/Positions.model';

interface CustomTableGeneralOptions {
}

export interface CustomTableHeaderOptions extends CustomTableGeneralOptions {
    hideLessThan?: number|undefined
    position?: keyof Positions
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

export interface CustomTable {
    tableHeaders: CustomTableHeader[]
    tableRows: CustomTableRow[]
}
