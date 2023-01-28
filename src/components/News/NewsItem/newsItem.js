import { PropTypes } from 'prop-types';

export const NewsItem = ({ _id, title, description, date, url }) => {
  return (
    <li key={_id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
      <a href={url}>Read more</a>
    </li>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
