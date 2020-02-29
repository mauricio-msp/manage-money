import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import RadialLoader from '../../components/Loader';
import { usePrevious } from '../../utils/hooks';
import { Anchor, Form, GroupButtons, ButtonMinus, ButtonPlus } from './style';

function Home() {
    const [value, setValue] = useState('');
    const [total, setTotal] = useState(0);
    const [enable, setEnable] = useState(false);
    const [historic, setHistoric] = useState([]);

    const prevHistoric = usePrevious(historic);
    const prevTotal = usePrevious(total);

    useEffect(() => {
        const history = localStorage.getItem('historico');
        const totalValue = localStorage.getItem('total');

        if (history || totalValue) {
            setHistoric(JSON.parse(history));
            setTotal(parseFloat(totalValue));
        }
    }, []);

    useEffect(() => {
        if (total !== 1000) {
            setEnable(false);
        }

        if (total >= 1000) {
            setEnable(true);
        }

        if (prevHistoric !== historic || prevTotal !== total) {
            localStorage.setItem('historico', JSON.stringify(historic));
            localStorage.setItem('total', parseFloat(total));
        }
    }, [prevHistoric, historic, prevTotal, total]);

    function handleRemoveValue() {
        if (value === '') {
            alert('Por favor, preencha o campo corretamente.');
        } else {
            setValue(value);
            setTotal(total - value);

            const data = {
                value,
                total,
                type: 'saque',
                date: new Date().toLocaleString('pt-BR')
            };

            setHistoric([...historic, data]);
            setValue('');
        }
    }

    function handleAddValue() {
        if (value === '') {
            alert('Por favor, preencha o campo corretamente.');
        } else {
            setValue(value);
            setTotal(total + value);

            const data = {
                value,
                total,
                type: 'deposito',
                date: new Date().toLocaleString('pt-BR')
            };

            setHistoric([...historic, data]);
            setValue('');
        }
    }

    return (
        <Container>
            <Anchor>
                <Link to="/historico">histórico &rsaquo;&rsaquo;</Link>
            </Anchor>

            <RadialLoader currentValue={total} />

            <Form>
                <div className="boxInput">
                    <span>Digite um valor:</span>
                    <input
                        type="number"
                        max="1000"
                        value={value > 1000 ? 1000 : value}
                        onChange={event =>
                            setValue(parseFloat(event.target.value))
                        }
                    />
                </div>

                <GroupButtons>
                    <ButtonMinus onClick={handleRemoveValue}>
                        <FaMinus color="#7159c1" size={14} />
                    </ButtonMinus>
                    <ButtonPlus enable={enable} onClick={handleAddValue}>
                        <FaPlus color="#7159c1" size={14} />
                    </ButtonPlus>
                </GroupButtons>
            </Form>
        </Container>
    );
}

export default Home;
