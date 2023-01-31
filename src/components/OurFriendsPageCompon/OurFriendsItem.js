import css from './OurFriendsItem.module.css';

export default function OurFriendsItem({ partner }) {
  const { title, url, addressUrl, address, imageUrl, phone, email } = partner;

  const checkEmail = data => {
    if (!data) {
      return <p>-------------------</p>;
    }

    const emailHref = 'mailto:' + data;

    return (
      <a className={css.contactLink} href={emailHref}>
        {data}
      </a>
    );
  };

  const checkPhone = data => {
    if (!data) {
      return <p>-------------------</p>;
    }

    const phoneHref = 'tel:' + data;

    return (
      <a className={css.contactLink} href={phoneHref}>
        {data}
      </a>
    );
  };

  const checkAddress = data => {
    if (!data) {
      return <p>-------------------</p>;
    }

    return (
      <a
        className={css.contactLink}
        href={data}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {address}
      </a>
    );
  };

  return (
    <li className={css.partnerItem}>
      <h2 className={css.partnerTitle}>
        <a
          className={css.partnerLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {title}
        </a>
      </h2>
      <div className={css.flexWrap}>
        <div className={css.imgWrap}>
          <img className={css.partnerLogo} src={imageUrl} alt="company logo" />
        </div>
        <ul className={css.partnerContactsList}>
          <li className={css.partnerContactsItem}>
            <span>Time:</span>
            <p className={css.contactLink}>8.00-20.00</p>
          </li>
          <li className={css.partnerContactsItem}>
            <span>Address:</span>
            {checkAddress(addressUrl)}
          </li>
          <li className={css.partnerContactsItem}>
            <span>Email:</span>
            {checkEmail(email)}
          </li>
          <li className={css.partnerContactsItem}>
            <span>Phone:</span>
            {checkPhone(phone)}
          </li>
        </ul>
      </div>
    </li>
  );
}
