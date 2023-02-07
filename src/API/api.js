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

//======================== AUNTIFICATION  ==========================

export async function register(signupData) {
  const { data } = await instance.post('auth/signup', signupData);
  return data;
}

export async function login(signupData) {
  const { data } = await instance.post('auth/login', signupData);
  setToken.set(data.token);
  return data;
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
  return data;
}

//======================== NOTICES  ==========================

// ---------------------for all

export async function requestPublicNotices(
  categoryName = 'sell',
  search = null
) {
  try {
    const { data } = await instance.get(`/notices`, {
      params: { search, category: categoryName },
    });
    // console.log('requestPublicNotices data', data);

    return data;
  } catch (error) {
    throw error;
  }
}

// ------------------------- for register user

export async function getRegisterNotices(token, categoryName, search = null) {
  setToken.set(token);
  console.log('favorite true categoryName', categoryName);

  if (categoryName === 'favorite') {
    try {
      const { data } = await instance.get(`notices/user`, {
        params: { search, favorite: true },
      });
      console.log('favorite true search', data);

      return data;
    } catch (error) {
      throw error;
    }
  }

  if (categoryName === 'own') {
    try {
      const { data } = await instance.get(`notices/user`, {
        params: { search, myNotice: true },
      });
      console.log('myNotice true search', data);

      return data;
    } catch (error) {
      throw error;
    }
  }

  try {
    const { data } = await instance.get(`notices/user`, {
      params: { search, category: categoryName },
    });
    // console.log('requestOwnNoticesR search', data);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function writeNewNotice(req) {
  // console.log('req: ', req);
  // console.log(req);
  await instance.post(`notices/user`, req, {
    headers: {
      'Content-Type': `multipart/form-data;`,
    },
  });
  return;
}

export async function removeNoticesById(id) {
  console.log('id', id);
  try {
    const { data } = await instance.delete(`notices/user/${id}`);
    // console.log('remove data', data);
    return data.data.result;
  } catch (error) {
    throw error;
  }
}

// export async function requestFavoriteNotices(search) {
//   if (search) {
//     try {
//       const { data } = await instance.get(`notices/user/favorite`, {
//         params: { query: `search` },
//       });
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   try {
//     const { data } = await instance.get(`notices/user/favorite`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function requestOwnNotices(search, token) {
//   setToken.set(token);

//   if (search) {
//     try {
//       console.log('requestOwnNotices search', search);
//       const { data } = await instance.get(`notices/user?category=own`, {
//         params: { query: search },
//       });
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   try {
//     const { data } = await instance.get(`notices/user`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

//========================== FAVORITE  =============================

export async function toggleFavorite({ id, token, req }) {
  console.log('id', id);
  console.log('token', token);
  console.log('req', req);
  setToken.set(token);
  // setCurrentToken(token);

  try {
    const { data } = await instance[req](`notices/user/${id}/favorite`);
    console.log('favAdd data', data);
    return data;
  } catch (error) {
    throw error;
  }
}

//========================== USER  =============================

export async function requestUserData(token) {
  setToken.set(token);
  try {
    const { data } = await instance.get('/user');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserData(userData) {
  const updateData = {
    [userData.name]: userData.value,
  };
  try {
    const { data } = await instance.patch('/user', updateData, {
      headers: {
        'Content-Type': `multipart/form-data;`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updatePetsData(petData) {
  try {
    const { data } = await instance.patch(
      `/user/pets/${petData.petId}`,
      petData.formData,
      {
        headers: {
          'Content-Type': `multipart/form-data;`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

//========================== USER PETS  =============================

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

//======================== NEWS  ==========================

export async function getAllNews() {
  try {
    const { data } = await instance.get('/news');
    return data.news;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getSearchNews(search) {
  try {
    const { data } = await instance.get('/news', { params: { search } });
    return data.news;
  } catch (error) {
    throw new Error(error.message);
  }
}

//========================== OUR FRIENDS  =============================

export async function getOurFriends() {
  try {
    const { data } = await instance.get('/friends');
    return data.friends;
  } catch (error) {
    throw new Error(error.message);
  }
}

// =================================================================
