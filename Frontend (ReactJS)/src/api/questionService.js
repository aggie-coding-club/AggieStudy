import axios from "axios";

const API_BASE_URL = 'https://aggie-study-45ef20d60435.herokuapp.com/questions';

export const getQuestionById = (questionId) => {
    return axios.get(`${API_BASE_URL}/${questionId}`);
}