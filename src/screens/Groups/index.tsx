import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export default function Groups() {
  const [ groups, setGroups ] = useState<string[]>(["Amigos"]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty 
          message="Você ainda não possui nenhuma turma cadastrada." />
        )}
      />
      <Button
          title='Criar novo grupo'
        />
    </Container>
  )
}