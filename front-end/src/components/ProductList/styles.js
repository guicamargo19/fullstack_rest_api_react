import styled from 'styled-components'
import { Colors } from '../../global'

export const ProductListContainer = styled.div`
  display: block;

  div {
    list-style: none;
    transition: all ease-in-out 0.2s;
  }

  p {
    font-weight: bold;
    padding-right: 14px;
  }

  span {
    text-align: justify;
  }
`

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.bgProducts};
  padding: 14px;
  margin-bottom: 10px;

  &:hover {
    background-color: ${Colors.bgProductsHover};
    transition: all ease-in-out 0.2s;
  }
`

export const Carregando = styled.div`
  margin-top: 40px;
`

export const Erro = styled.div`
  margin-top: 40px;
`

export const DivNomePreco = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`

export const DivNome = styled.div`
  display: flex;
  margin-right: 20px;
`

export const DivPreco = styled.div`
  display: flex;
`

export const DivDescription = styled.div`
  margin-top: 20px;
  width: 96%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  .remove,
  .add {
    background-color: ${Colors.submitButtonColor};
    font-size: 20px;
    text-transform: uppercase;
    padding: 12px;
    font-weight: bold;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    margin-bottom: 30px;
    color: ${Colors.whiteColor};

    &:hover {
      opacity: 80%;
      transition: all ease-in-out 0.2s;
    }
  }

  .remove {
    background-color: ${Colors.cancelButtonColor};
  }
`
