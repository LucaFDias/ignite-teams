import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { ButtonIcons } from "@components/ButtonIcons";
import { Input } from "@components/Input";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { Button } from "@components/Button";

import { useState } from "react";
import styled, { css } from "styled-components/native";
import { FlatList } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

const Form = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
`

const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`
const NumberOfPlayers = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;

  `}
`

export function Players(){
  const [ team, setTeam ] = useState('Time A');
  const [players, setPlayers] = useState([])	
  
  return (
    <Container>
      { <Header showBackBtn/>}
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcons icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => (
          <ListEmpty message="Você há pessoas nesse time!" />
        )}
      />
      <Button 
        title="Remover turma" 
        type="SECONDARY" 
      />
    </Container>
  )
}