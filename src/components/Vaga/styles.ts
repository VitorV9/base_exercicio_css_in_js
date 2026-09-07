import styled from 'styled-components'

export const VagaCard: any = styled.li`
  border: 1px solid var(--cor-principal, #a7727d);
  background-color: var(--cor-secundaria, #f9f5e7);
  color: var(--cor-principal, #a7727d);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal, #a7727d);
    color: var(--cor-secundaria, #f9f5e7);
  }
`

export const VagaTitulo: any = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink: any = styled.a`
  border-color: var(--cor-secundaria, #f9f5e7);
  background-color: var(--cor-principal, #a7727d);
  color: var(--cor-secundaria, #f9f5e7);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  /* Usando uma classe global provisória para o hover do link não quebrar no TS */
  &:hover {
    background-color: var(--cor-secundaria, #f9f5e7);
    color: var(--cor-principal, #a7727d);
  }
`
