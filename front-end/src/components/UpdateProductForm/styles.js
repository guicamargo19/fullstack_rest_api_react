import styled from 'styled-components'
import { Colors } from '../../global'

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
  width: 400px;
`

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`

export const ModalContent = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
  }

  textarea {
    resize: none;
    padding: 4px;
    width: 100%;
  }

  input {
    padding: 4px;
    width: 100%;
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    text-transform: uppercase;
    padding: 6px;
    color: ${Colors.whiteColor};
    border: none;
    transition: all ease-in-out 0.2s;
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
      margin-top: 6px;
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
