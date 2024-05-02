import { Colors } from '../../global'

import styled from 'styled-components'

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
  width: 850px;
  height: 340px;
`

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`

export const ModalContent = styled.div`
  label {
    font-weight: bold;
    text-transform: uppercase;
  }

  textarea {
    resize: none;
    padding: 12px;
    width: 100%;
    height: 100%;
    background-color: ${Colors.bgInputs};
    border: none;
    outline-color: ${Colors.mainColor};
    font-size: 20px;
  }

  input {
    padding: 12px;
    width: 320px;
    font-size: 20px;
    background-color: ${Colors.bgInputs};
    border: none;
    outline-color: ${Colors.mainColor};
  }
`

export const DivInputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const DivNameValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const DivTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;

  button {
    text-transform: uppercase;
    padding: 6px;
    color: ${Colors.whiteColor};
    border: none;
    transition: all ease-in-out 0.2s;
    font-size: 20px !important;
    cursor: pointer;

    &:hover {
      opacity: 80%;
      transition: all ease-in-out 0.2s;
    }

    &[type='submit'] {
      background-color: ${Colors.submitButtonColor};
    }

    &[type='button'] {
      background-color: ${Colors.cancelButtonColor};
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent !important;
  border: none;
  font-size: 26px;
  cursor: pointer;
`
