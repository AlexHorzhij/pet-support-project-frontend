import WorkDays from './WorkDays';

import { Box, Grid } from '@mui/material';
import {
  ContactsItem,
  ContactsTypography,
  FriendsLogo,
  ItemGrid,
  ContactLink,
  TitleLink,
  BoxTitle,
} from './OurFiendsPage.styled';
import defaultLogo from 'images/default_logo.webp';
import { useTranslation } from 'react-i18next';

const OurFriendsItem = ({ partner }) => {
  const { t } = useTranslation('common');
  const { title, url, addressUrl, address, imageUrl, phone, email, workDays } =
    partner;

  const renderEmail = data => {
    if (!data) {
      return <p>-------------------</p>;
    }

    const emailHref = 'mailto:' + data;

    return <ContactLink href={emailHref}>{data}</ContactLink>;
  };

  const renderPhone = data => {
    if (!data) {
      return <p>-------------------</p>;
    }

    const phoneHref = 'tel:' + data;

    return <ContactLink href={phoneHref}>{data}</ContactLink>;
  };

  const renderAddress = data => {
    if (!data) {
      return <p>-------------------</p>;
    }

    return (
      <ContactLink
        href={data}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {address}
      </ContactLink>
    );
  };

  const renderDate = data => {
    if (!data || !data.length) {
      return <p>-------------------</p>;
    }

    return <WorkDays workDays={data} />;
  };

  return (
    <ItemGrid item component="li">
      <BoxTitle>
        <TitleLink
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          color="inherit"
        >
          {title}
        </TitleLink>
      </BoxTitle>

      <Box
        sx={{
          display: 'flex',
        }}
      >
        <FriendsLogo
          component="img"
          image={imageUrl ?? defaultLogo}
          alt="company logo"
        />
        <Grid container component="ul">
          <ContactsItem item component="li" md={6}>
            <ContactsTypography component="span">
              {t('OurFriendsPage.item.time')}:
              {renderDate(workDays)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              {t('OurFriendsPage.item.address')}:
              {renderAddress(addressUrl)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              {t('OurFriendsPage.item.email')}:
              {renderEmail(email)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              {t('OurFriendsPage.item.phone')}:
              {renderPhone(phone)}
            </ContactsTypography>
          </ContactsItem>
        </Grid>
      </Box>
    </ItemGrid>
  );
};

export default OurFriendsItem;
