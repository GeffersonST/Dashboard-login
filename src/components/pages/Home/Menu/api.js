import axios from "axios";

const api = axios.create({
  baseURL: "https://desafioreact.s3.amazonaws.com/menu/itens.json",
});

export default api;
