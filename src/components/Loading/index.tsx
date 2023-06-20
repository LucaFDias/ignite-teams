import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
`
const LoadingIndicatior = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700
}))``


export function Loading() {
  return(
    <Container>
      <LoadingIndicatior/>
      
    </Container>
  )
}

