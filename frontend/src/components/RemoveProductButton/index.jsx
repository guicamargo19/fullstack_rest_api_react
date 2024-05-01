import * as S from './styles'
import React from 'react';
import { useMutation, queryCache } from 'react-query';

const RemoveProductButton = ({productId}) => {
    const removeProduct = async () => {
        const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Falha ao remover o produto.');
        }

        //Limpa o cache após a remoção do produto
        queryCache.invalidateQueries('products');
    };

    const { mutate, isLoading } = useMutation(removeProduct);

    return (
        <S.ProductButtonContainer>
            <button onClick={() => mutate()} disabled={isLoading}>Remover produto</button>
        </S.ProductButtonContainer>
    );
};

export default RemoveProductButton;