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
  return [{
    title: 'good dog',
    breed: 'taxa',
    place: 'Dnipro',
    bithday: '2022.05.10'
  }, {
    title: 'white cat',
    breed: 'siam',
    place: 'Odesa',
    bithday: '2021.12.06'
  },
  ]
}