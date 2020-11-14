import styled, { css } from 'styled-components';

export const ProgressText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;

  strong {
    font-size: 42px;
    color: #999;
  }

  span {
    font-size: 18px;
    color: #ccc;
  }

  ${props =>
    props.stateValue < 0 &&
    css`
      strong {
        color: #d14957;
      }
    `}

  ${props =>
    props.stateValue >= 10000 &&
    css`
      strong {
        color: #3cb371;
      }
    `}
`;
