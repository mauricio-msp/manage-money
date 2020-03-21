import styled from 'styled-components';

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
`;

export default Paginate;
