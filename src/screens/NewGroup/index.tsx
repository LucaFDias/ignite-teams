import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
  padding: 24px;
`
const Content = styled.View`
  flex: 1;
  justify-content: center;
`

const Icon = styled(UsersThree).attrs(({ theme}) => ({
  size: 56,
  color: theme.COLORS.GREEN_700
}))`
  align-self: center;
`


export function NewGroups(){
  return(
      <Container>
        <Header showBackBtn/>
        <Content>
          <Icon/>
          <Highlight
            title="Nova turma"
            subtitle="crie a turma para adicionar"
          />
          <Input
            placeholder="Nome da turma"
          />
          <Button
            title="Ciar"
          />
        </Content>
      </Container>
    )
}