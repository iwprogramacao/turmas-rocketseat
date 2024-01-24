import React from 'react';
import { BackButton, BackIcon, Container, Logo } from './styles';
import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container showBackButton={showBackButton}>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
