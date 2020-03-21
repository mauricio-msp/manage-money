import React from 'react';
import PropTypes from 'prop-types';
import Paginate from './style';

function Pagination({ itemsPerPage, totalItems, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
        pageNumbers.push(i);
    }

    return (
        <Paginate>
            {pageNumbers.map(number => (
                <li key={number}>
                    <a
                        onClick={() => paginate(number)}
                        href={`/historico/${number}`}
                    >
                        {number}
                    </a>
                </li>
            ))}
        </Paginate>
    );
}

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    paginate: PropTypes.number.isRequired
};

export default Pagination;
