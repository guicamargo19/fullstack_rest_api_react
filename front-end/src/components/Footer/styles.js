import styled from 'styled-components'
import { Colors } from '../../global'

export const Footer = styled.footer`
  text-align: center;
  padding: 120px 0 20px 0;

  a {
    color: ${Colors.blackColor};
    text-decoration: none;
    transition: all ease-in-out 0.2s;

    &:hover {
      transition: all ease-in-out 0.2s;
      color: ${Colors.mainColor};
    }
  }
`
