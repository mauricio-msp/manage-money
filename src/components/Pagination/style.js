import styled from 'styled-components';
import { darken } from 'polished';

const Paginate = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 30px;

    li {
        margin: 5px;

        a {
            text-decoration: none;
            color: #7951c9;
            border: 2px solid #7951c9;
            padding: 10px 15px;
            border-radius: 50%;
            transition: all ease-in-out 0.3s;

            &:hover {
                background: #7951c9;
                color: #fff;
            }
        }
    }

    li.active {
        a {
            background: #7951c9;
            color: #fff;
            transition: all ease-in-out 0.3s;

            &:hover {
                background: ${darken(0.09, '#7951c9')};
                border: 2px solid ${darken(0.09, '#7951c9')};
            }
        }
    }
`;

export default Paginate;
