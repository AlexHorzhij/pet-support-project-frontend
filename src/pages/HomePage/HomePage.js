import React from 'react';
import {
  AdaptiveTypography,
  Background,
  AdditionalImage,
  WomanImage,
  HeartImage,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <Background>
      <AdaptiveTypography variant="h1">
        Take good care of your small pets
      </AdaptiveTypography>
      <AdditionalImage />
      <WomanImage />
      <HeartImage />
    </Background>
  );
}
