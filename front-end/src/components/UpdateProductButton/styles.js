import styled from 'styled-components';

export const ProductButtonContainer = styled.div`
  button {
    padding: 8px;
    background-color: rgba(0,0,128,0.8);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    text-transform: uppercase;
    margin-top: 20px;
    width: 300px;

    &:hover {
        opacity: 80%;
        transition: all ease-in-out 0.2s;
    }
  }
`
