import styled from 'styled-components';

export const ProductButtonContainer = styled.div`
  button {
    padding: 8px;
    background-color: darkblue;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    text-transform: uppercase;
    margin-top: 20px;
    width: 300px;

    &:hover {
        opacity: 70%;
        transition: all ease-in-out 0.2s;
    }
  }
`
