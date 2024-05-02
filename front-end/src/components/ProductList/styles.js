import styled from 'styled-components'
import { Colors } from '../../global'

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  row-gap: 4px;
  column-gap: 4px;

  div {
    list-style: none;
    transition: all ease-in-out 0.2s;
  }

  p {
    font-weight: bold;
    margin-bottom: 4px;
    margin-top: 4px;
  }

  span {
    text-align: justify;
  }

  .description {
    height: 160px;
  }
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.bgProducts};
  padding: 14px;
  height: 400px;

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

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  .remove,
  .add {
    background-color: ${Colors.submitButtonColor};
    font-size: 26px;
    text-transform: uppercase;
    padding: 12px;
    font-weight: bold;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    border: none;
    border-radius: 4px;

    &:hover {
      opacity: 80%;
      transition: all ease-in-out 0.2s;
    }
  }

  .remove {
    background-color: ${Colors.cancelButtonColor};
  }
`
