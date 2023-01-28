import { NewsItem } from '../NewsItem/newsItem';

const news = [
  {
    _id: 1234567891,
    title: 'example 1',
    url: 'url1',
    description: 'description1',
    date: 'date1',
  },
  {
    _id: 1234567892,
    title: 'example 2',
    url: 'url2',
    description: 'description2',
    date: 'date2',
  },
  {
    _id: 1234567893,
    title: 'example 3',
    url: 'url3',
    description: 'description3',
    date: 'date3',
  },
  {
    _id: 1234567894,
    title: 'example 4',
    url: 'url4',
    description: 'description4',
    date: 'date4',
  },
  {
    _id: 1234567895,
    title: 'example 5',
    url: 'url5',
    description: 'description5',
    date: 'date5',
  },
];

export const NewsList = () => {
  return (
    <ul>
      {/* {error && <p>{error.data}</p>} */}
      {/* {isLoading ? <Loader /> : ''} */}
      {news &&
        news.map(({ _id, title, description, date }) => {
          return (
            <NewsItem
              key={_id}
              title={title}
              date={date}
              description={description}
              id={_id}
            />
          );
        })}
    </ul>
  );
};
