import WorkDays from './WorkDays';

import { Link, Box, Grid } from '@mui/material';
import {
  ContactsItem,
  ContactsTypography,
  FriendsLogo,
  ItemGrid,
  ItemTitle,
  ContactLink,
} from './OurFiendsPage.styled';

const OurFriendsItem = ({ partner }) => {
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
    if (!data) {
      return <p>-------------------</p>;
    }

    return <WorkDays workDays={workDays} />;
  };

  return (
    <ItemGrid item component="li">
      <ItemTitle>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          color="inherit"
        >
          {title}
        </Link>
      </ItemTitle>
      <Box sx={{ display: 'flex' }}>
        <FriendsLogo component="img" image={imageUrl} alt="company logo" />
        <Grid container component="ul">
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              Time:
              {renderDate(workDays)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              Address:
              {renderAddress(addressUrl)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              Email:
              {renderEmail(email)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              Phone:
              {renderPhone(phone)}
            </ContactsTypography>
          </ContactsItem>
        </Grid>
      </Box>
    </ItemGrid>
  );
};

export default OurFriendsItem;
