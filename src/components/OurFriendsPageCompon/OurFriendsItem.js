import {
  Card,
  ContactLink,
  FlexBox,
  FriendsContactItem,
  FriendsContactsList,
  ImgBox,
  Title,
  TitleLink,
} from './OurFiendsItem.styled';

const OurFriendsItem = ({ partner }) => {
  const { title, url, addressUrl, address, imageUrl, phone, email } = partner;

  const checkData = data => {
    if (!data) {
      return <p>-------------------</p>;
    }
  };

  const renderEmail = data => {
    checkData(data);

    const emailHref = 'mailto:' + data;

    return <ContactLink href={emailHref}>{data}</ContactLink>;
  };

  const renderPhone = data => {
    checkData(data);

    const phoneHref = 'tel:' + data;

    return <ContactLink href={phoneHref}>{data}</ContactLink>;
  };

  const renderAddress = data => {
    checkData(data);

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

  return (
    <Card>
      <Title>
        <TitleLink
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {title}
        </TitleLink>
      </Title>
      <FlexBox>
        <ImgBox>
          <img src={imageUrl} alt="company logo" />
        </ImgBox>
        <FriendsContactsList>
          <FriendsContactItem>
            <span>Time:</span>
            <ContactLink>8.00-20.00</ContactLink>
          </FriendsContactItem>
          <FriendsContactItem>
            <span>Address:</span>
            {renderAddress(addressUrl)}
          </FriendsContactItem>
          <FriendsContactItem>
            <span>Email:</span>
            {renderEmail(email)}
          </FriendsContactItem>
          <FriendsContactItem>
            <span>Phone:</span>
            {renderPhone(phone)}
          </FriendsContactItem>
        </FriendsContactsList>
      </FlexBox>
    </Card>
  );
};

export default OurFriendsItem;
