import React from 'react'
import { BtnTypeStyleProps, Container, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'


type Props = TouchableOpacityProps & {
  title: string;
  type?: BtnTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container 
      type={type} 
      {...rest}
      >
      <Title>{title}</Title>
    </Container>
  )
}