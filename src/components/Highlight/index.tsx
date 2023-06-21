import styled, { css } from 'styled-components/native'

const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

const Title = styled.Text`
  ${({ theme}) => css`
    font-size: 24px;
    text-align: center;

    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;

const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `}
`;

type Props = {
  title: string,
  subtitle: string,
}

export function Highlight({ title, subtitle}: Props){
  return(
    <Container>
      <Title>{title}</Title>
      <SubTitle>
        {subtitle}
      </SubTitle>
    </Container>
  )
}