import styled from 'styled-components';

export const Anchor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  a {
    color: #7951c1;
    text-decoration: none;
    font-size: 16px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    border-radius: 4px;

    span {
      color: #7159c1;
      padding: 10px 15px;
    }

    input {
      flex: 1;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      font-size: 16px;
      color: #7159c1;
    }
  }
`;

export const ButtonMinus = styled.button.attrs({
  type: 'button'
})`
  width: 50%;
  color: #fff;
  padding: 10px 15px;
  background: #eee;
  border-radius: 0;
  border: 1px solid #eee;
  border-right: 0.5px solid #7159c1;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  transition: all linear 0.2s;

  &:hover {
    border: 1px solid #ccc;
    background: #ccc;
    border-right: 0.5px solid #999;
  }
`;

export const ButtonPlus = styled.button.attrs(props => ({
  type: 'button',
  disabled: props.enable
}))`
  width: 50%;
  color: #fff;
  padding: 10px 15px;
  background: #eee;
  border-radius: 0;
  border: 1px solid #eee;
  border-left: 0.5px solid #7159c1;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all linear 0.2s;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    border: 1px solid #ccc;
    background: #ccc;
    border-left: 0.5px solid #999;
  }
`;

export const GroupButtons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;
