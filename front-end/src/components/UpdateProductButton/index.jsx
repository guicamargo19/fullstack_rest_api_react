import React from 'react';
import * as S from './styles';

const UpdateProductButton = ({ onClick }) => {
  return (
    <S.ProductButtonContainer>
      <button onClick={onClick}>Atualizar Produto</button>
    </S.ProductButtonContainer>
  );
};

export default UpdateProductButton;
