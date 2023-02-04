import cat from '../assets/images/myPets/cat.png';
import dog from '../assets/images/myPets/dog.png';
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

//======================== AUNTIFICATION  ==========================

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
  setToken.unset();
  return data.data;
}

//======================== NOTICES  ==========================

export async function requestNotices(query) {
  const { category = 'all', search } = query;
  console.log('category', search);
  // if (search) {
  try {
    const { data } = await instance.get(`/notices/${category}`, {
      query: { search },
    });
    return data.data.result;
  } catch (error) {
    throw error;
  }
  // }
  // try {
  //   const { data } = await instance.get(`/notices/${category}`, query);
  //   return data.data.result;
  // } catch (error) {
  //   throw error;
  // }
}

export async function removeNoticesById(id) {
  console.log('id', id);
  try {
    // const { data } = await instance.delete(`user/notices/${id}`, id);
    // console.log('remove data', data);
    // return data.data.result;
  } catch (error) {
    throw error;
  }
}

//========================== FAVORITE  =============================

export async function togleFavorite(id, token, req) {
  console.log('id', id);
  console.log('token', token);
  console.log('req', req);

  setCurrentToken(token);

  try {
    const { data } = await instance[req](`user/notices/${id}/favorite`);
    console.log('favAdd data', data);
    return data.data.result;
  } catch (error) {
    throw error;
  }
}

//========================== USER  =============================

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

//======================== NEWS  ==========================

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

//========================== OUR FRIENDS  =============================

export async function getOurFriends() {
  try {
    const { data } = await instance.get('/friends');
    return data.data.result;
  } catch (error) {
    throw new Error(error.message);
  }
}

// =================================================================
