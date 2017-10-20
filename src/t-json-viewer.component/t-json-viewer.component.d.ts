import { OnChanges } from '@angular/core';
export interface Item {
    key: string;
    value: any;
    title: string;
    type: string;
    isOpened: boolean;
}
export declare class TJsonViewerComponent implements OnChanges {
    json: Array<any> | Object | any;
    maxCollapsedLength: number;
    expandAll: false;
    asset: Array<Item>;
    constructor();
    ngOnChanges(): void;
    /**
     * Check value and Create item object
     * @param {string|any} key
     * @param {any} value
     */
    private createItem(key, value);
    /**
     * Check item's type for Array or Object
     * @param {Item} item
     * @return {boolean}
     */
    isObject(item: Item): boolean;
    /**
     * Handle click event on collapsable item
     * @param {Item} item
     */
    clickHandle(item: Item): void;
    /**
     * Trims the collapsed string to the asked length
     * @param str parsed json item
     * @returns {string}
     */
    setMaxLength(str: string): string;
}
