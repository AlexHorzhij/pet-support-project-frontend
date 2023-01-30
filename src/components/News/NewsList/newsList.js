import { NewsItem } from '../NewsItem/newsItem';
import {useGetAllNewsQuery} from 'redux/news/newsSlice'
import Loader from 'components/Loader/Loader';

export const NewsList = () => {
  const { data: news, error, isLoading } = useGetAllNewsQuery();

  return (
    <ul>
      {error && <p>{error.data}</p>}
      {isLoading ? <Loader /> : ''}
      {news &&
        news.map(({ _id, title, description, date, url }) => {
          return (
            <NewsItem
              key={_id}
              title={title}
              date={date}
              description={description}
              id={_id}
              url={url}
            />
          );
        })}
    </ul>
  );
};
