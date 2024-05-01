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

    return (
        <>
        <h2>
            Lista de Produtos
        </h2>
        {/* <S.ProductListContainer>
            <S.ProductContainer>
                <p>Nome:</p>
                <span>NAME PRODUCT</span>
                <p>Descrição:</p>
                <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nesciunt ipsam totam quia facilis amet dignissimos neque reiciendis. Voluptates ipsum consequuntur distinctio error possimus illo cumque nulla, cum tempora mollitia.</span>
                <p>Preço:</p>
                <span>R$ VALUE</span>
                <RemoveProductButton productId={1}></RemoveProductButton>
            </S.ProductContainer>
        </S.ProductListContainer> */}

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
    );
};

export default ProductsList
