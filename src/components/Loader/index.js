import React from 'react';
import PropTypes from 'prop-types';
import {
    CircularProgressbarWithChildren,
    buildStyles
} from 'react-circular-progressbar';
import { ProgressText } from './style';
import 'react-circular-progressbar/dist/styles.css';

function Loader(props) {
    const { currentValue } = props;

    return (
        <CircularProgressbarWithChildren
            value={currentValue}
            maxValue={1000}
            strokeWidth={3}
            styles={buildStyles({
                rotation: 0.25,
                pathTransitionDuration: 0.5,
                trailColor: '#eee',
                pathColor: `${currentValue >= 1000 ? '#3cb371' : '#7159c1'}`
            })}
        >
            <ProgressText stateValue={currentValue}>
                <strong>
                    {currentValue.toLocaleString('de-DE', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </strong>
                <span>1.000,00 R$</span>
            </ProgressText>
        </CircularProgressbarWithChildren>
    );
}

Loader.propTypes = {
    currentValue: PropTypes.number.isRequired
};

export default Loader;
