import client from "./client";

const endpoint = "/users";

export const getProfile = async () => {
  return client.get(`${endpoint}/profile/`);
};

export const updateProfilePic = async (data) => {
  return client.patch(`${endpoint}/profile_update/photo/`, data);
};

export const updateProfile = async (data) => {
  return client.patch(`${endpoint}/profile_update/`, data);
};

export const updateInterests = async (data) => {
  return client.patch(`${endpoint}profile_update/interests/`, data);
};

export const getInterests = async () => {
  return client.get(`${endpoint}/interests/`);
};
