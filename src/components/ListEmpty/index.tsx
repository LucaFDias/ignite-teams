import styled, { css } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

`

const Mensagem = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

type Props = {
  message: string;
}

export function ListEmpty({message}: Props){
  return(
    <Container>
      <Mensagem>{message}</Mensagem>
    </Container>
  )
}