import logo from '../../assets/logo1.svg';
import { Container, Content } from './styles';

interface HeaderPorps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderPorps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="my finances" />
        <h2>My Finances</h2>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}