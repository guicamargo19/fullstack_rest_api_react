import styled from 'styled-components'

export const FormContainer = styled.div`
    margin-bottom: 20px;
    margin: 0 auto;
    background-color: rgba(0,0,0,0.1);
    padding-bottom: 30px;

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    textarea {
        resize: none;
        height: 200px;
        margin-bottom: 10px;
        padding: 6px;
        font-size: 14px;
        width: 800px;
        outline-color: #87baab;
    }

    button {
        padding: 8px;
        background-color: #87baab;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: all ease-in-out 0.2s;
        text-transform: uppercase;
        width: 800px;

        &:hover {
            background-color: #326573;
            transition: all ease-in-out 0.2s;
        }
    }
`

export const InputsNomeValor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 800px;
    gap: 20px;

    input[type="text"],
    input[type="number"]  {
        margin-bottom: 10px;
        padding: 6px;
        font-size: 14px;
        width: 390px;
        outline-color: #87baab;
    }
`

export const TextAreaGroup = styled.div`
    display: flex;
    flex-direction: column;
`