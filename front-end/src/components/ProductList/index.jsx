import React from "react";
import {useQuery} from 'react-query';
import * as S from './styles'
import RemoveProductButton from '../RemoveProductButton';

const fetchProducts = async () => {
    const response = await fetch('http://localhost:8000/api/products/');
    if (!response.ok) {
        throw new Error('Falha ao carregar os produtos.');
    }
    return response.json();
};


const ProductsList = () => {
    const { data: products, isLoading, isError } = useQuery('products', fetchProducts);

    if (isLoading) return <S.Carregando>Carregando...</S.Carregando>;
    if (isError) return <S.Erro>Ocorreu um erro ao carregar os produtos...</S.Erro>;

    console.log(products.length)

    return (
        <>
            {products.length === 0 ? (
                <>
                    <h2>
                        Lista de Produtos
                    </h2>
                    <S.Erro>Não existem produtos cadastrados.</S.Erro>
                </>
            ) : (
                <>
                    <h2>
                        Lista de Produtos
                    </h2>
                    <S.ProductListContainer>
                        {products.map(product => (
                            <S.ProductContainer>
                                <p>Nome:</p>
                                <span key={product.id}>{product.name}</span>
                                <p>Descrição:</p>
                                <span className="description">{product.description}</span>
                                <p>Preço:</p>
                                <span>R$ {product.value}</span>
                                <RemoveProductButton productId={product.id}></RemoveProductButton>
                            </S.ProductContainer>
                        ))}
                    </S.ProductListContainer>
                </>
            )}
        </>
    );
};

export default ProductsList
