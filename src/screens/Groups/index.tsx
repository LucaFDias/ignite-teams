import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 32px;
`


export default function Groups() {
  return (
    <Container>
      <Title>Groups</Title>
    </Container>
  );
}