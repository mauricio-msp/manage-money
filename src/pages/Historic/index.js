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
                <thead>
                    <tr>
                        <th>Valor</th>
                        <th>Total</th>
                        <th>Tipo</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => (
                        <tr key={item.date}>
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
                </tbody>
            </List>
        </Container>
    );
}

export default Historic;
