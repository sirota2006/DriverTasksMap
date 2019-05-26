export const FILTER_BY = 'FILTER_BY';

export interface FilterAction {
    type: typeof FILTER_BY,
    payload: string
}
