import styled from 'styled-components'

export const Formulario: any = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria, #f9f5e7);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Campo: any = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal, #a7727d);
`

export const BotaoPesquisar: any = styled.button`
  background-color: var(--cor-principal, #a7727d);
  border: 1px solid var(--cor-principal, #a7727d);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria, #f9f5e7);
  margin-left: 8px;
  cursor: pointer;
`
