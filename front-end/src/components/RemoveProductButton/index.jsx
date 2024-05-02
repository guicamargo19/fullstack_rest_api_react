import * as S from './styles'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'

// eslint-disable-next-line react/prop-types
const RemoveProductButton = ({ productId }) => {
  const queryClient = useQueryClient()

  const removeProduct = async () => {
    const response = await fetch(
      `http://localhost:8000/api/products/${productId}`,
      {
        method: 'DELETE'
      }
    )

    if (!response.ok) {
      throw new Error('Falha ao remover o produto.')
    }

    // Refetch products query after mutation success
    queryClient.invalidateQueries('products')
  }

  const { mutate, isLoading } = useMutation(removeProduct)

  return (
    <S.ProductButtonContainer>
      <button onClick={() => mutate()} disabled={isLoading}>
        <i className="bi bi-trash"></i>
      </button>
    </S.ProductButtonContainer>
  )
}

export default RemoveProductButton
