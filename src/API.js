import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7b1d643a-2777-4a5a-b415-e4c34c5cc44f',
  },
});

export async function postAuthData(email, password, rememberMe, captcha) {
  const resp = await instance.post('auth/login', {
    email,
    password,
    rememberMe,
    captcha,
  });
  return resp.data;
}

export async function deleteAuthKey() {
  const resp = await instance.delete('auth/login');
  return resp.data.resultCode;
}

export async function putUserPhoto(file) {
  const formData = new FormData();
  formData.append('image', file);
  const resp = await instance.put('profile/photo', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return resp.data.resultCode;
}

export async function putUserData(userData, userId) {
  const resp = await instance.put('profile', {
    userId,
    fullName: userData.fullName,
    aboutMe: userData.about,
    lookingForAJob: userData.lookingForAJob,
    lookingForAJobDescription: userData.aboutJob,
    contacts: {
      github: userData.github,
      vk: userData.vk,
      facebook: userData.facebook,
      instagram: userData.instagram,
      twitter: userData.twitter,
      website: userData.website,
    },
  });
  return resp.data.resultCode;
}

export async function getAuthUserData() {
  const resp = await instance.get('auth/me');
  return resp.data;
}

export async function getCaptcha() {
  const resp = await instance.get('security/get-captcha-url');
  return resp.data;
}

export async function getUserList(page, count) {
  const resp = await instance.get('users', {
    params: {
      page,
      count,
    },
  });
  return resp.data;
}

export async function getFriendList(page, count) {
  const resp = await instance.get('users', {
    params: {
      page,
      count,
      friend: true,
    },
  });
  return resp.data;
}

export async function getUserProfile(id) {
  const resp = await instance.get(`profile/${id}`);
  return resp.data;
}
