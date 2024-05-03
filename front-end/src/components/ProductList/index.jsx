import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import * as S from './styles'
import RemoveProductButton from '../RemoveProductButton'
import UpdateProductButton from '../UpdateProductButton'
import UpdateProductForm from '../UpdateProductForm'
import AddProductForm from '../AddProductForm'

const fetchProducts = async () => {
  const response = await fetch('http://localhost:8000/api/products/')
  if (!response.ok) {
    throw new Error('Falha ao carregar os produtos.')
  }
  return response.json()
}

const removeAllProducts = async () => {
  const response = await fetch('http://localhost:8000/api/products/', {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error('Falha ao remover os produtos.')
  }
}

const ProductsList = () => {
  const queryClient = useQueryClient()
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  // Adicione o estado para controlar a exibição do modal de confirmação

  const {
    data: products,
    isLoading,
    isError
  } = useQuery('products', fetchProducts)
  const removeProductsMutation = useMutation(removeAllProducts, {
    onSuccess: () => {
      queryClient.invalidateQueries('products')
    }
  })

  const handleUpdateProduct = (productId) => {
    setSelectedProductId(productId)
  }

  const handleCancelUpdate = () => {
    setSelectedProductId(null)
  }

  const handleRemoveAllProducts = () => {
    setShowConfirmation(true) // Abra o modal de confirmação
  }

  const confirmRemoveAllProducts = () => {
    removeProductsMutation.mutate()
    setShowConfirmation(false) // Feche o modal de confirmação após a remoção
  }

  // Função para mostrar ou ocultar o formulário de adição de produto
  const [isAddProductFormVisible, setIsAddProductFormVisible] = useState(false)

  const handleToggleAddProductForm = () => {
    setIsAddProductFormVisible(!isAddProductFormVisible)
  }

  if (isLoading)
    return (
      <>
        <h2>Lista de Produtos</h2>
        <S.Carregando>Carregando...</S.Carregando>
      </>
    )
  if (isError)
    return (
      <>
        <h2>Lista de Produtos</h2>
        <S.Erro>Ocorreu um erro ao carregar os produtos...</S.Erro>
      </>
    )

  return (
    <>
      <S.ButtonsContainer>
        <button className="add" onClick={handleToggleAddProductForm}>
          Adicionar produto
        </button>
        {isAddProductFormVisible && (
          <AddProductForm onClose={() => setIsAddProductFormVisible(false)} />
        )}
        <button className="remove" onClick={handleRemoveAllProducts}>
          Remover todos
        </button>
      </S.ButtonsContainer>
      <h2>Lista de Produtos</h2>
      {products.length === 0 ? (
        <S.Erro>Nenhum produto cadastrado.</S.Erro>
      ) : (
        <S.ProductListContainer>
          {products.map((product) => (
            <S.ProductContainer key={product.id}>
              <S.ProductListContent>
                <S.DivNomePreco>
                  <S.DivNome>
                    <p>Nome:</p>
                    <span>{product.name}</span>
                  </S.DivNome>
                  <S.DivPreco>
                    <p>Preço:</p>
                    <span>R$ {product.value}</span>
                  </S.DivPreco>
                </S.DivNomePreco>
                <S.DivDescription>
                  <span>{product.description}</span>
                </S.DivDescription>
              </S.ProductListContent>
              <S.DivUpdateRemoveButtons>
                <UpdateProductButton
                  onClick={() => handleUpdateProduct(product.id)}
                />
                <RemoveProductButton productId={product.id} />
              </S.DivUpdateRemoveButtons>
              {selectedProductId === product.id && (
                <UpdateProductForm
                  productId={product.id}
                  initialProduct={product}
                  onCancel={handleCancelUpdate}
                />
              )}
            </S.ProductContainer>
          ))}
        </S.ProductListContainer>
      )}
      {/* Renderize o modal de confirmação se showConfirmation for true */}
      {showConfirmation && (
        <S.ModalOverlay>
          <S.ModalContainer>
            <S.ModalContent>
              <p>Deseja realmente remover todos os produtos?</p>
              <S.ModalActions>
                <button className="sim" onClick={confirmRemoveAllProducts}>
                  Sim
                </button>
                <button onClick={() => setShowConfirmation(false)}>Não</button>
              </S.ModalActions>
            </S.ModalContent>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </>
  )
}

export default ProductsList
