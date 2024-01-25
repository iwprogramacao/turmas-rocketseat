import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups} // Fonte de dados
        keyExtractor={(item) => item} // Recomendado valor único para identificação e performance (ex: id)
        renderItem={({ item }) => <GroupCard title={item} />} // Conteúdo para renderizar
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )} // Renderização de lista vazia
        contentContainerStyle={groups.length === 0 && { flex: 1 }} // Estilização do componente
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
