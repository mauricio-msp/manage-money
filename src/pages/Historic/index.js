import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { Anchor, List } from './style';

function Historic() {
    const [list, setList] = useState([]);

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
                <tr className="lineHead">
                    <th>Valor</th>
                    <th>Total</th>
                    <th>Tipo</th>
                    <th>Data</th>
                </tr>
                {list.map(item => (
                    <tr key={item.date} className="lineBody">
                        <td>
                            {item.value.toLocaleString('de-DE', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </td>
                        <td>
                            {item.total.toLocaleString('de-DE', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </td>
                        <td>{item.type}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </List>
        </Container>
    );
}

export default Historic;
