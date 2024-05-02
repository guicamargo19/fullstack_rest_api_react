import styled from 'styled-components'
import { Colors } from '../../global'

export const ProductListContainer = styled.div`
  display: block;

  p {
    font-weight: bold;
    padding-right: 14px;
  }

  span {
    text-align: justify;
    display: flex;

    @media screen and (max-width: 767px) {
      word-break: break-all;
      margin-bottom: 20px;
    }
  }
`
export const ProductListContent = styled.div`
  list-style: none;
  transition: all ease-in-out 0.2s;

  @media screen and (max-width: 767px) {
    flex-direction: column;
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

  @media screen and (max-width: 767px) {
    flex-direction: column;
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

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const DivNome = styled.div`
  display: flex;
  margin-right: 20px;
`

export const DivPreco = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`

export const DivDescription = styled.div`
  margin-top: 20px;
  width: 96%;
`

export const DivUpdateRemoveButtons = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
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
    width: 250px;

    &:hover {
      opacity: 80%;
      transition: all ease-in-out 0.2s;
    }
  }

  .remove {
    background-color: ${Colors.cancelButtonColor};
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
