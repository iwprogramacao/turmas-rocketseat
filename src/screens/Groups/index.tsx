import React, { useState } from 'react';
import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups} // Fonte de dados
        keyExtractor={(item) => item} // Recomendado valor único para identificação e performance (ex: id)
        renderItem={({ item }) => <GroupCard title={item} />} // Conteúdo para renderizar
      />
    </Container>
  );
}
