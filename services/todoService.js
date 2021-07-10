import client from "./client";

const endpoint = "/todo";

export const getTodo = () => {
  return client.get(`${endpoint}/getTodo/`);
};

export const editTodo = (data, pk) => {
  return client.put(`${endpoint}/editTodo/${pk}/`, data);
};

export const deleteTodo = (pk) => {
  return client.delete(`${endpoint}/deleteTodo/${pk}/`);
};

export const createTodo = (data) => {
  return client.post(`${endpoint}/createTodo/`, data);
};

export const getTargetedTodo = (id) => {
  return client.get(`${endpoint}/getTargetedTodo/${id}/`);
};
