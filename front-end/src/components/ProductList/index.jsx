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
    removeProductsMutation.mutate()
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
          Adicionar Produto
        </button>
        {isAddProductFormVisible && (
          <AddProductForm onClose={() => setIsAddProductFormVisible(false)} />
        )}
        {/* Renderiza o formulário de adição de produto se a flag de visibilidade estiver true */}
        <button className="remove" onClick={handleRemoveAllProducts}>
          Remover Todos os Produtos
        </button>
      </S.ButtonsContainer>
      <h2>Lista de Produtos</h2>
      <S.ProductListContainer>
        {products.map((product) => (
          <S.ProductContainer key={product.id}>
            <p>Nome:</p>
            <span>{product.name}</span>
            <p>Descrição:</p>
            <span className="description">{product.description}</span>
            <p>Preço:</p>
            <span>R$ {product.value}</span>
            <div>
              <RemoveProductButton productId={product.id} />
              <UpdateProductButton
                onClick={() => handleUpdateProduct(product.id)}
              />
            </div>
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
    </>
  )
}

export default ProductsList
