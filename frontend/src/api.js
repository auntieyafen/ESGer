import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
);

const getAllCompany = async() => {
    return await instance.get("/companies").then((res) => {
        return res.data;
    });
}

export { getAllCompany }