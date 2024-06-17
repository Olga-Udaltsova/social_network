import { modifyData } from "../../helpers/modifyData";
import * as SC from "./styles";

export const Pagination = ({ items, currentPage, setCurrentPage }) => {
  const { totalPages } = modifyData(items, currentPage);

  const increasePage = (currentPage) => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const reducePage = (currentPage) => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  return (
    <SC.Pagination>
      <div
        onClick={() => reducePage(currentPage)}
        className={currentPage === 1 && "disabled"}
      >
        -
      </div>
      <p>
        {currentPage} / {totalPages}
      </p>
      <div
        onClick={() => increasePage(currentPage)}
        className={currentPage === totalPages && "disabled"}
      >
        +
      </div>
    </SC.Pagination>
  );
};
