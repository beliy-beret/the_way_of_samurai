import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '636d5c08-cacc-4ca3-9e99-90d5092c47c0',
  },
});

export async function postAuthData(formData) {
  const resp = await instance.post('auth/login', {
    email: formData.email,
    password: formData.password,
    rememberMe: formData.rememberMe,
    captcha: formData.captcha,
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
