import { Button } from '@mui/material';
import { MobileLangWrapper } from './MobileMultiLanguage.styled';
import { useTranslation } from 'react-i18next';

export default function MobileMultiLanguage() {
  const { i18n } = useTranslation();
  const lngs = {
    en: {
      nativeName: 'English',
      shortName: 'EN',
    },
    ua: {
      nativeName: 'Ukrainian',
      shortName: 'UA',
    },
  };
  return (
    <MobileLangWrapper>
      {Object.keys(lngs).map(lng => {
        return (
          <Button
            variant={i18n.resolvedLanguage === lng ? 'contained' : 'outlined'}
            size="small"
            type="submit"
            key={lng}
            sx={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].shortName}
          </Button>
        );
      })}
    </MobileLangWrapper>
  );
}
