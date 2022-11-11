export const orders = (state) => state.orders.orders;
export const searchValue = (state) => state.filter.searchValue;
export const dateFromValue = (state) => state.filter.dateFromValue;
export const dateToValue = (state) => state.filter.dateToValue;
export const statusValue = (state) => state.filter.statusValue;
export const priceFromValue = (state) => state.filter.priceFromValue;
export const priceToValue = (state) => state.filter.priceToValue;
export const activeSortingCell = (state) => state.filter.activeSortingCell;
export const sortingCellsDirectionUp = (state) =>
  state.filter.sortingCellsDirectionUp;
export const currentPage = (state) => state.filter.currentPage;
export const pageSize = (state) => state.filter.pageSize;
