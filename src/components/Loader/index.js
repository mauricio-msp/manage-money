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
      maxValue={10000.0}
      strokeWidth={3}
      styles={buildStyles({
        rotation: 0.25,
        pathTransitionDuration: 0.5,
        trailColor: '#eee',
        pathColor: `${currentValue >= 10000.0 ? '#3cb371' : '#7159c1'}`
      })}
    >
      <ProgressText stateValue={currentValue}>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(currentValue)}
        </strong>
        <span>R$ 10.000,00</span>
      </ProgressText>
    </CircularProgressbarWithChildren>
  );
}

Loader.propTypes = {
  currentValue: PropTypes.number.isRequired
};

export default Loader;
