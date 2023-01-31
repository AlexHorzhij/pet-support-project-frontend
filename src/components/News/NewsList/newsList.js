import { NewsItem } from '../NewsItem/newsItem';
import { Grid } from '@mui/material';

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
    description:
      'Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству.',
    date: 'date2',
  },
  {
    _id: 1234567893,
    title: 'example 3',
    url: 'url3',
    description:
      'Для чего нужен тег border Универсальное свойство border позволяет одновременно установить толщину,вокруг элемента.Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству.Для чего нужен тег border Универсальное свойство border позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента.Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству. стиль и цвет границы вокруг элемента.Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству.Для чего нужен тег border Универсальное свойство border позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента.Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству.',
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
  {
    _id: 1234567896,
    title: 'example 6',
    url: 'url6',
    description: 'description6',
    date: 'date6',
  },
];

// export const NewsList = () => {
//   return (
//     <ul>
//       {/* {error && <p>{error.data}</p>} */}
//       {/* {isLoading ? <Loader /> : ''} */}
//       {news &&
//         news.map(({ _id, title, description, date }) => {
//           return (
//             <NewsItem
//               key={_id}
//               title={title}
//               date={date}
//               description={description}
//               id={_id}
//             />
//           );
//         })}
//     </ul>
//   );
// };

export const NewsList = () => {
  return (
    <Grid container spacing={2}>
      {/* <ul> */}
      {/* {error && <p>{error.data}</p>} 
        {isLoading ? <Loader /> : ''}  */}
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
      {/* </ul> */}
    </Grid>
  );
};
