import { ITEMS_PER_PAGE } from "../constants/constants";

export const modifyData = (items, currentPage, type) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = firstIndex + ITEMS_PER_PAGE;
  onSort(items, type);
  const slicedData = items.slice(firstIndex, lastIndex);

  return {
    data: slicedData,
    totalPages: totalPages,
  };
};

export const onSort = (items, type) => {
  switch (type) {
    case "DATE_ASC":
      items.sort((a, b) => (a["date"] > b["date"] ? 1 : -1));
      break;
    case "DATE_DESC":
      items.sort((a, b) => (b["date"] > a["date"] ? 1 : -1));
      break;
    default:
      items.sort((a, b) => (a["name"] > b["name"] ? 1 : -1));
  }
};
