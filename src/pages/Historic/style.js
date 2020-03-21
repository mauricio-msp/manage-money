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

export const List = styled.table`
    width: 100%;
    text-align: center;
    border: 1px solid #7159c1;
    border-collapse: collapse;

    thead {
        tr {
            background: #7159c1;

            th {
                color: #eee;
                border-right: 1px solid #eee;
                font-size: 16px;
                padding: 5px;

                &:last-child {
                    border: 0;
                }
            }
        }
    }

    tbody {
        tr {
            background: #eee;
            border-bottom: 1px solid #ccc;

            &:last-child {
                border-bottom: 0;
            }

            td {
                color: #7159c1;
                border-right: 1px solid #7159c1;
                font-size: 16px;
                padding: 10px;

                &:last-child {
                    border: 0;
                }
            }
        }
    }
`;
