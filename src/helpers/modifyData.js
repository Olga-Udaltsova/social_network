import { ITEMS_PER_PAGE } from "../constants";

export const modifyData = (items, currentPage) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = firstIndex + ITEMS_PER_PAGE;
  const slicedData = items.slice(firstIndex, lastIndex);

  return {
    data: slicedData,
    totalPages: totalPages,
  };
};
