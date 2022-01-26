import axios from "axios";
import { POST_USER } from "./types";


export const createUser = (user) => async dispatch => {
    try {
        const result = await axios.post('http://localhost:5000/users/register', user);
        console.log(result.data.status);
        dispatch({
            type: POST_USER,
            payload: result.data.status
        })
        window.location = '/';
    } catch (error) {
        console.error(error);
    }

}