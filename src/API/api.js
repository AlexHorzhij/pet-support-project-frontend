// import cat from '../assets/images/myPets/cat.png';
// import dog from '../assets/images/myPets/dog.png';
import axios from 'axios';
// const URL = process.env.REACT_APP_BASE_URL;
// console.log(URL);

const BASE_URL = 'https://pet-support-project.onrender.com/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

const setCurrentToken = token => {
  if (token) {
    setToken.set(token);
    return;
  }
  setToken.unset();
};

// auth

export async function register(signupData) {
  const { data } = await instance.post('auth/signup', signupData);
  return data.data;
}

export async function login(signupData) {
  const { data } = await instance.post('auth/login', signupData);
  setToken.set(data.data.token);
  return data.data;
}

export async function fetchCurrent(token) {
  try {
    setCurrentToken(token);
  } catch (error) {
    setCurrentToken();
    throw error;
  }
}

export async function logout() {
  const { data } = await instance.post('auth/logout');
  console.log(data);
  setToken.unset();
  return data.data;
}

//======================== NOTICES START ==========================

export async function requestNotices(req) {
  try {
    const { data } = await instance.get('/notices', req);
    // console.log(data)
    return data.data.result;
  } catch (error) {
    throw error;
  }
  // return [
  //   {
  //     title: 'good dog',
  //     breed: 'taxa',
  //     place: 'Dnipro',
  //     bithday: '2022.05.10',
  //   },

  //   {
  //     title: 'white cat',
  //     breed: 'siam',
  //     place: 'Odesa',
  //     bithday: '2021.12.06',
  //   },
  // ];
}

//========================== NOTICES END =============================

export async function requestUserData() {
  try {
    const { data } = await instance.get('/user');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserData(data) {
  console.log('data: ', data);

  const userData = await requestUserData();

  Object.keys(userData).forEach(item => {
    if (item === data.name) {
      userData[item] = data.value;
    }
  });

  const newUserData = { ...userData };

  return newUserData;
}

export async function deletePet(_id) {
  try {
    const response = await instance.delete(`/user/pets/${_id}`);
    if (response.status === 200) {
      return { status: response.status, petID: _id };
    }
  } catch (error) {
    throw error;
  }
}
export async function addPet(pet) {
  try {
    const response = await instance.post(`/user/pets`, pet);
    if (response.status === 201) {
      return { status: response.status, pet: response.data };
    }
  } catch (error) {
    throw error;
  }
}
//======================== NEWS START ==========================
export async function getAllNews() {
  try {
    const { data } = await instance.get('/news');
    // console.log(data.data);
    return data.data.result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getSearchNews(search) {
  try {
    const { data } = await instance.get('/news', { params: { search } });
    return data.data.result;
  } catch (error) {
    throw new Error(error.message);
  }
}
//========================== NEWS END =============================

// ======================== Our Friends ===========================

export async function getOurFriends() {
  try {
    const { data } = await instance.get('/services');
    // console.log(data.data.result);
    return data.data.result;
  } catch (error) {
    throw new Error(error.message);
  }
}

// =================================================================
