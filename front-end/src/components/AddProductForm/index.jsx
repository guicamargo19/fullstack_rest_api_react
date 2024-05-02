import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as S from './styles'

const AddProductForm = ({onClose}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const queryClient = useQueryClient();

    const AddProduct = async () => {
        const response = await fetch('http://localhost:8000/api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                description,
                value: parseFloat(value),
            }),
        });

        if (!response.ok) {
            throw new Error('Falha ao adicionar o produto.');
        }
        // Faz o refetch da query products depois do sucesso, atualizando a página.
        queryClient.invalidateQueries('products');
        // Limpa os campos do formulário
        setName('');
        setDescription('');
        setValue('');

        // Fecha o modal
        onClose();
    };

    const {mutate, isLoading} = useMutation(AddProduct);

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate();
    };

    return (
        <S.ModalOverlay>
            <S.ModalContainer>
                <S.CloseButton onClick={onClose}>X</S.CloseButton>
                <S.ModalTitle>Adicionar produto</S.ModalTitle>
                <S.ModalContent>
                    <form onSubmit={handleSubmit}>
                        <S.DivInputs>
                            <S.DivNameValue>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" name="name" required value={name} onChange={e => setName(e.target.value)} />
                                <label htmlFor="value">Valor:</label>
                                <input type="number" id="value" name="value" required value={value} onChange={e => setValue(e.target.value)} />
                            </S.DivNameValue>
                            <S.DivTextArea>
                                <label htmlFor="description">Descrição:</label>
                                <textarea id="description" name="description" required value={description} onChange={e => setDescription(e.target.value)} />
                            </S.DivTextArea>
                        </S.DivInputs>
                        <S.ModalActions>
                            <button type="submit" disabled={isLoading}>Adicionar produto</button>
                            <button type="button" onClick={onClose} >Cancelar</button>
                        </S.ModalActions>
                    </form>
                </S.ModalContent>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
};

export default AddProductForm
