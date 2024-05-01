import * as S from './styles'

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear()
    }

    return (
        <S.Footer>
            {getYear()}- &copy;
            <a href="https://portfolio-pink-omega-63.vercel.app/">
                <strong> Portfólio Guilherme Camargo</strong>
            </a>{' '}
            - Todos os direitos reservados
        </S.Footer>
    )
}

export default Footer