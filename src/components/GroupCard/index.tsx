import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { UsersThree }from 'phosphor-react-native'
import { css } from 'styled-components';

const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

const Title = styled.Text`
  ${({ theme })  => css`
  
  font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  `};
`;

const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill"
}))`
  margin-right: 20px;
`;

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({title, ...rest}: Props) {
  return(
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}