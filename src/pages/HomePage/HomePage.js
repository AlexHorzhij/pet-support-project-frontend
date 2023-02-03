import React from 'react';
import {
  AdaptiveTypography,
  HomeContainer,
  RelativeContainer,
  AdditionalImage,
  WomanImage,
  HeartImage,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <HomeContainer>
      <RelativeContainer>
        <AdaptiveTypography variant="h1">
          Take good care of your small pets
        </AdaptiveTypography>
        <AdditionalImage />
        <WomanImage />
        <HeartImage />
      </RelativeContainer>
    </HomeContainer>
  );
}
