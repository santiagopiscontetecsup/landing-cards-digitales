import React from 'react';
import HomeComponent from '@/components/landing/Home';

interface HomeProps {
  canRegister?: boolean;
}

export default function Home({ canRegister = true }: HomeProps) {
  return <HomeComponent canRegister={canRegister} />;
}
