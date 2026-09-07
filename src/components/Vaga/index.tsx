import { VagaCard, VagaTitulo, VagaLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  link: string
}

const Vaga = (props: Props) => (
  <VagaCard>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
    </ul>
    <VagaLink href="{props.link}">Ver detalhes e candidatar-se</VagaLink>
  </VagaCard>
)

export default Vaga
