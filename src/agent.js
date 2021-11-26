import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

//DEVELOPMENT
export const API_ROOT = "http://localhost:5000";

const responseBody = (res) => res.body;

const requests = {
    del: (url) =>
        superagent.del(`${API_ROOT}${url}`).then(responseBody),
    get: (url) =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    put: (url, body) =>
        superagent
            .put(`${API_ROOT}${url}`, body)
            .then(responseBody),
    post: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`, body)
            .then(responseBody),
};

const Users = {
    save: (users) => requests.post("/users/add", users),
    load: () => requests.get("/users"),
    edit: (id, users) => requests.put(`/users/${id}`, users),
    view: (id) => requests.get(`/users/${id}`),
}
const Exercises = {
    save: (exercises) => requests.post("/exercises/add", exercises),
    load: () => requests.get("/exercises"),
    edit: (id, exercises) => requests.put(`/exercises/${id}`, exercises),
    delete: (id) => requests.del(`/exercises/${id}`),
    view: (id) => requests.get(`/exercises/${id}`),
};

export default {
    Exercises,
    Users
}