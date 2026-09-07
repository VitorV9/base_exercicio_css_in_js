import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroContainer = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${cores.principal};
    content: '';
    opacity: 0.7;
  }
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  color: #eee; // Se tiver uma cor específica no projeto, troque aqui
  position: relative; // Para ficar acima da camada de opacidade (::before)
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
