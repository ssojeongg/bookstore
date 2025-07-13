import '../assets/css/Pagination.css';
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Paginationbar = ({ pageCount, onPageChange, currentPage }) => {
  return (
    <ReactPaginate
      previousLabel={<FiChevronLeft />}
      nextLabel={<FiChevronRight />}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      pageLinkClassName={"pagination__link"}
      activeLinkClassName={"pagination__link__active"}
      forcePage={currentPage}
    />
  );
};

export default Paginationbar;
