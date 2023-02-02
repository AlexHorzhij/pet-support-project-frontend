// дуже чорновий варіант, чекаю бек, поки підставила фейкові дані
import cat from '../assets/images/myPets/cat.png';
import dog from '../assets/images/myPets/dog.png';
import axios from 'axios';
// const URL = process.env.REACT_APP_BASE_URL;
// console.log(URL);

const BASE_URL = 'https://pet-support-project.onrender.com/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

// const setToken = {
//   set(token) {
//     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     instance.defaults.headers.common.Authorization = '';
//   },
// };

// const setCurrentToken = token => {
//   if (token) {
//     setToken.set(token);
//     return;
//   }
//   setToken.unset();
// };
// user

export async function register(signupData) {
  //   const { data } = await instance.post('/signup', signupData);
  //   setToken.set(data.token);
  const data = {
    token: 'dijfikh123h23q2hkqweq',
    user: {
      email: 'alisa@gmail.com',
      name: 'Alisa',
      password: 'alisa123',
      phone: '+380878787878',
      city: 'Kyiv, Ukraine',
    },
  };
  return data;
}

export async function login(signupData) {
  //   const { data } = await instance.post('/login', signupData);
  //   setToken.set(data.token);
  const data = {
    token: 'lkmckldmxlmcskldsc',
  };
  return data;
}

export async function fetchCurrent(token) {
  // try {
  //   setCurrentToken(token);
  //   const data = await instance.get('/current');
  //   return data.data;
  // } catch (error) {
  //   setCurrentToken();
  //   throw error;
  // }
  return 'current user';
}

export async function logout() {
  //   const data = await instance.post('/logout');
  //   setToken.unset();
  //   return data.data;
  return 'logout';
}

export async function requestNotices(category) {
  // try {
  //   const { data } = await instance.get('/notices', category)
  //   return data
  // } catch (error) {
  //   throw error
  // }
  return [
    {
      title: 'good dog',
      breed: 'taxa',
      place: 'Dnipro',
      bithday: '2022.05.10',
    },

    {
      title: 'white cat',
      breed: 'siam',
      place: 'Odesa',
      bithday: '2021.12.06',
    },
  ];
}

export async function requestUserData() {
  return {
    name: 'Anna',
    email: 'anna00@gmail.com',
    birthday: '00.00.0000',
    phone: '+380000000',
    city: 'Kyiv',
    picture: '',
  };
}

export async function updateUserData(data) {
  const userData = await requestUserData();

  Object.keys(userData).forEach(item => {
    if (item === data.name) {
      userData[item] = data.value;
    }
  });

  const newUserData = { ...userData };

  return newUserData;
}

export async function requestPetsData() {
  return [
    {
      id: '1',
      name: 'Jack',
      dateOfBirth: '22.04.2018',
      breed: 'Percian cat',
      comment:
        'Proin magna. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Suspendisse potenti.',
      picture: cat,
      avatarURL: '',
    },
    {
      id: '2',
      name: 'Jack',
      dateOfBirth: '22.04.2018',
      breed: 'Basenji',
      comment:
        'Proin magna. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Suspendisse potenti.',
      picture: dog,
      avatarURL: '',
    },
  ];
}
export async function deletePet(id) {
  const petsData = await requestPetsData();
  const newData = petsData.filter(value => value.id !== id);
  await requestPetsData(newData);
  return newData;
}
export async function addPet(pet) {
  const petsData = await requestPetsData();
  const newData = [...petsData];
  newData.push(pet);
  return newData;
}
//======================== NEWS START ==========================
export async function getAllNews() {
  try {
    const { data } = await instance.get('/news');
    console.log(data.data);
    return data.data.result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getSearchNews(searchValue) {
  // try {
  //   const { data } = await instance.get('/news', searchValue);
  //   return data;
  // } catch (error) {
  //   throw new Error(error.message);
  // }
  const news = [
    {
      _id: 1234567891,
      title: searchValue,
      url: 'url1',
      description: 'description1',
      date: '2022-10-16T14:52:43.276+00:00',
    },
    {
      _id: 1234567892,
      title: searchValue,
      url: 'url2',
      description:
        'Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству.',
      date: '2023-01-27T14:52:43.276+00:00',
    },
    {
      _id: 1234567893,
      title: searchValue,
      url: 'url3',
      description:
        'Для чего нужен тег border Универсальное свойство border позволяет одновременно установить толщину,вокруг элемента.Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству.Для чего нужен тег border Универсальное свойство border позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента.Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству. стиль и цвет границы вокруг элемента.Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству.Для чего нужен тег border Универсальное свойство border позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента.Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит,какое из них соответствует нужному свойству.',
      date: '2023-02-01T14:52:43.276+00:00',
    },
    {
      _id: 1234567894,
      title: searchValue,
      url: 'url4',
      description: 'description4',
      date: 'date4',
    },
    {
      _id: 1234567895,
      title: searchValue,
      url: 'url5',
      description: 'description5',
      date: 'date5',
    },
    {
      _id: 1234567896,
      title: searchValue,
      url: 'url6',
      description: 'description6',
      date: 'date6',
    },
  ];
  return news;
}
//========================== NEWS END =============================
