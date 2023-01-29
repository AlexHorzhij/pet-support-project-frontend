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
// import css from './OurFriendsItem.module.css';

export default function OurFriendsItem({ partner }) {
  const { title, url, addressUrl, address, imageUrl, phone, email } = partner;

  const checkEmail = data => {
    if (!data) {
      return <p>-------------------</p>;
    }

    const emailHref = 'mailto:' + data;

    return <ContactLink href={emailHref}>{data}</ContactLink>;
  };

  const checkPhone = data => {
    if (!data) {
      return <p>-------------------</p>;
    }

    const phoneHref = 'tel:' + data;

    return <ContactLink href={phoneHref}>{data}</ContactLink>;
  };

  const checkAddress = data => {
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
            {checkAddress(addressUrl)}
          </FriendsContactItem>
          <FriendsContactItem>
            <span>Email:</span>
            {checkEmail(email)}
          </FriendsContactItem>
          <FriendsContactItem>
            <span>Phone:</span>
            {checkPhone(phone)}
          </FriendsContactItem>
        </FriendsContactsList>
      </FlexBox>
    </Card>
  );
}

// return (
//   <li className={css.partnerItem}>
//     <h2 className={css.partnerTitle}>
//       <a
//         className={css.partnerLink}
//         href={url}
//         target="_blank"
//         rel="noopener noreferrer nofollow"
//       >
//         {title}
//       </a>
//     </h2>
//     <div className={css.flexWrap}>
//       <div className={css.imgWrap}>
//         <img className={css.partnerLogo} src={imageUrl} alt="company logo" />
//       </div>
//       <ul className={css.partnerContactsList}>
//         <li className={css.partnerContactsItem}>
//           <span>Time:</span>
//           <p className={css.contactLink}>8.00-20.00</p>
//         </li>
//         <li className={css.partnerContactsItem}>
//           <span>Address:</span>
//           {checkAddress(addressUrl)}
//         </li>
//         <li className={css.partnerContactsItem}>
//           <span>Email:</span>
//           {checkEmail(email)}
//         </li>
//         <li className={css.partnerContactsItem}>
//           <span>Phone:</span>
//           {checkPhone(phone)}
//         </li>
//       </ul>
//     </div>
//   </li>
// );
