import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Pagination from '../../components/Pagination';
import { Anchor, List } from './style';

function Historic() {
  const { page } = useParams();

  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [itemsPerPage] = useState(8);

  const indexOfLastList = currentPage * itemsPerPage;
  const indexOfFirstList = indexOfLastList - itemsPerPage;
  const currentList = list.slice(indexOfFirstList, indexOfLastList);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    const history = localStorage.getItem('historico');

    if (history) {
      setList(JSON.parse(history));
    }
  }, []);

  return (
    <Container>
      <Anchor>
        <Link to="/">&lsaquo;&lsaquo; voltar</Link>
      </Anchor>
      <List>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Total</th>
            <th>Tipo</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {currentList.map(item => (
            <tr key={item.date}>
              <td>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.value)}
              </td>
              <td>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.total)}
              </td>
              <td>{item.type}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </List>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Container>
  );
}

export default Historic;
