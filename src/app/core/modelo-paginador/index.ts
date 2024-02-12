export interface Paginador<T>{
    first: number,
    prev: null | number,
    next: number | null,
    last: number,
    pages: number,
    items: number,
    data:T[]
}