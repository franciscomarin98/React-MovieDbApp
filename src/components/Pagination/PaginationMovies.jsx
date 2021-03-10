import Pagination from 'rc-pagination';
import './PaginationMovies.scss';

const PaginationMovies = ({currentPage, totalItems, onChangePage}) => {
    return (
        <Pagination className="pagination"
                    current= {currentPage}
                    total={totalItems}
                    pageSize={20}
                    onChange={onChangePage}/>
    )
}

export default PaginationMovies
