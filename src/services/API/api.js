import axios from "axios";

const instance = axios.create({
  baseURL: "https://64af0689c85640541d4e0d9a.mockapi.io/cartsUsers/",
});

export const fetchAllCards = async () => {
  const { data } = await instance.get("/");
  return data;
};

export const fetchEditCard = async ({ id, userObject }) => {
  const { data } = await instance.put(`/${id}`, userObject);
  return data;
};
