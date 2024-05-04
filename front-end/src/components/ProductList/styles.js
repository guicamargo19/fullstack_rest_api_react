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
  border-radius: 4px;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: ${Colors.bgProductsHover};
    transition: all ease-in-out 0.2s;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const Erro = styled.div`
  margin-top: 30px;
  text-align: center;
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
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 40px;

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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.overlayColor};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  background-color: ${Colors.whiteColor};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 338px;
  height: 190px;
  text-align: center;

  @media screen and (max-width: 767px) {
    max-width: 90%;
    width: 290px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 90%;
  }
`

export const ModalContent = styled.div`
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }

    @media screen and (max-width: 767px) {}
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  gap: 20px;

  button {
    text-transform: uppercase;
    padding: 8px;
    color: ${Colors.whiteColor};
    border: none;
    transition: all ease-in-out 0.2s;
    font-size: 20px !important;
    cursor: pointer;
    border-radius: 4px;
    width: 84px;
    background-color: ${Colors.submitButtonColor};

    &:hover {
      opacity: 80%;
      transition: all ease-in-out 0.2s;
    }

    &.sim {
      background-color: ${Colors.cancelButtonColor};
    }
  }
`
