import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import * as S from '../AddProductForm/styles'

// eslint-disable-next-line react/prop-types
function UpdateProductForm({ productId, initialProduct = {}, onCancel }) {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState({
    name: initialProduct.name || '',
    description: initialProduct.description || '',
    value: initialProduct.value || ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const updateProduct = async () => {
    // Filtrar apenas os campos preenchidos
    const updatedFields = {}
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== initialProduct[key]) {
        updatedFields[key] = formData[key]
      }
    })

    const response = await fetch(
      `http://localhost:8000/api/products/${productId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFields)
      }
    )

    if (!response.ok) {
      throw new Error('Failed to update product.')
    }

    queryClient.invalidateQueries('products')
    onCancel() // Fechar o modal
  }

  const { mutate, isLoading } = useMutation(updateProduct)

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate()
  }

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.CloseButton onClick={onCancel}>X</S.CloseButton>
        <S.ModalTitle>Atualizar produto</S.ModalTitle>
        <S.ModalContent>
          <form onSubmit={handleSubmit}>
            <S.DivInputs>
              <S.DivNameValue>
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="value">Valor:</label>
                <input
                  type="number"
                  id="value"
                  name="value"
                  required
                  value={formData.value}
                  onChange={handleChange}
                />
              </S.DivNameValue>
              <S.DivTextArea>
                <label htmlFor="description">Descrição:</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </S.DivTextArea>
            </S.DivInputs>
            <S.ModalActions>
              <button type="submit" disabled={isLoading}>
                Atualizar produto
              </button>
              <button type="button" onClick={onCancel}>
                Cancelar
              </button>
            </S.ModalActions>
          </form>
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  )
}

export default UpdateProductForm
