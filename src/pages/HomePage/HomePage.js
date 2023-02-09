import React from 'react';
import {
  AdaptiveTypography,
  HomeContainer,
  RelativeContainer,
  AdditionalImage,
  WomanImage,
  HeartImage,
} from './HomePage.styled';
import { useTranslation } from 'react-i18next';


export default function HomePage() {
  const {t} = useTranslation()
  return (
    <HomeContainer>
      <RelativeContainer>
        <AdaptiveTypography variant="h1">
          {t('homeTitle')}
        </AdaptiveTypography>
        <AdditionalImage />
        <WomanImage />
        <HeartImage />
      </RelativeContainer>
    </HomeContainer>
  );
}
