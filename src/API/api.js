import axios from 'axios';
import { formDataEntries } from 'services/formDataEntries';

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

//======================== AUTHENTIFICATION  ==========================

export async function register(signupData) {
  const { data } = await instance.post('auth/signup', signupData);
  return data;
}

export async function verify(verificationToken) {
  const { data } = await instance.get(`auth/verify/${verificationToken}`);
  return data;
}

export async function resendVerification(email) {
  const { data } = await instance.post('auth/verify', email);
  return data;
}

export async function login(signupData) {
  const { data } = await instance.post('auth/login', signupData);
  setToken.set(data.token);
  return data;
}

export async function sendResetEmail(email) {
  const { data } = await instance.post('auth/reset', email);
  return data;
}

export async function resetPassword({ resetToken, body }) {
  const { data } = await instance.patch(`auth/reset/${resetToken}`, body);
  return data;
}

export async function fetchCurrent(token) {
  try {
    setCurrentToken(token);
    const { data } = await instance.get('/user');
    return data;
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

    return data;
  } catch (error) {
    throw error;
  }
}

// ------------------------- for register user

export async function getRegisterNotices(token, categoryName, search = null) {
  setToken.set(token);

  if (categoryName === 'favorite') {
    try {
      const { data } = await instance.get(`notices/user`, {
        params: { search, favorite: true },
      });

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

      return data;
    } catch (error) {
      throw error;
    }
  }

  try {
    const { data } = await instance.get(`notices/user`, {
      params: { search, category: categoryName },
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function writeNewNotice(req) {
  const { data } = await instance.post(`notices/user`, req, {
    headers: {
      'Content-Type': `multipart/form-data;`,
    },
  });
  return data;
}

export async function removeNoticesById(id) {
  try {
    const { data } = await instance.delete(`notices/user/${id}`);
    return data.result;
  } catch (error) {
    throw error;
  }
}

export async function patchNotice(editID, formData) {
  console.log('editID: ', editID);
  formDataEntries(formData)
  try {
    const { data } = await instance.patch(`notices/user/${editID}`, formData, {
      headers: {
        'Content-Type': `multipart/form-data;`,
      },
    });
    console.log('data: ', data);
    return data;
  } catch (error) {
    throw error;
  }
}

//========================== FAVORITE  =============================

export async function toggleFavorite({ id, req, categoryName }) {
  try {
    const { data } = await instance[req](`notices/user/${id}/favorite`);
    return { ...data, categoryName };
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
