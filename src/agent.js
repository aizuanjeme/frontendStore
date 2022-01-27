import axios from "axios";

export const API_ROOT = "http://localhost:5000";

const responseBody = (res) => res.data;



export const agent = {

    del: (url) =>
        axios.del(`${API_ROOT}${url}`)
            .then(responseBody),

    get: (url, res) =>
        axios.get(`${API_ROOT}${url}`)
            .then((response) => {
                res(response.data);
            }),

    put: (url, body) =>
        axios
            .put(`${API_ROOT}${url}`, body)
            .then(responseBody),

    post: (url, body, res) =>
        axios
            .post(`${API_ROOT}${url}`, body)
            .then((response) => {
                res(response.data);
            }),
};