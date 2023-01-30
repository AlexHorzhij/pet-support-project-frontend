// дуже чорновий варіант, чекаю бек, поки підставила фейкові дані

// import axios from 'axios';

// const BASE_URL = '';

// const instance = axios.create({
//   baseURL: BASE_URL,
// });

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
import cat from '../images/myPets/cat.png';
import dog from '../images/myPets/dog.png';
export async function register(signupData) {
  //   const { data } = await instance.post('/signup', signupData);
  //   setToken.set(data.token);
  const data = {
    token: 'dijfikh123h23q2hkqweq',
    user: {
      email: 'jsajs@kj.sa',
      name: 'Alisa-regis',
    },
  };
  return data;
}

export async function login(signupData) {
  //   const { data } = await instance.post('/login', signupData);
  //   setToken.set(data.token);
  const data = {
    token: 'dijfikh123h23q2hkqweq',
    user: {
      email: 'jsajs@kj.sa',
      name: 'Alisa-login',
    },
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
      breed: 'Precian cat',
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
    {
      id: '3',
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
