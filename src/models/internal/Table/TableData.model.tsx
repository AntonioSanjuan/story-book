import { ReactElement } from 'react';

export interface CustomTableHeaderOptions {
    hideLessThan?: number|undefined
}

export interface CustomTableRowOptions {
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
