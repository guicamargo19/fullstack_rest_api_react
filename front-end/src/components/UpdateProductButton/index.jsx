import React from 'react'
import * as S from './styles'

const UpdateProductButton = ({ onClick }) => {
  return (
    <S.ProductButtonContainer>
      <button onClick={onClick}>
        <i className="bi bi-pencil"></i>
      </button>
    </S.ProductButtonContainer>
  )
}

export default UpdateProductButton
