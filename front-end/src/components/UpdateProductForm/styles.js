import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 400px;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

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
    width: 100%
  }

  input {
    padding: 4px;
    width: 100%
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    text-transform: uppercase;
    padding: 6px;
    color: #fff;
    border: none;
    transition: all ease-in-out 0.2s;
    

    &:hover {
      opacity: 70%;
      transition: all ease-in-out 0.2s;
    }

    &[type=submit] {
      background-color: darkgreen;
    }

    &[type=button] {
      background-color: darkred;
      margin-top: 10px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
