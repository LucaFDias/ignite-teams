import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
  align-items: center;
`;

export default function Groups() {
  return (
    <Container>
      <Header/>
      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />
    </Container>
  );
}