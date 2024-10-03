import axios from "axios";

const API_BASE_URL = 'https://aggie-study-45ef20d60435.herokuapp.com/exams';

export const getExamsByClassId = (classId) => {
    return axios.get(`${API_BASE_URL}/course/${classId}`);
}
export const getQuestionsByExamId = (examId) => {
    return axios.get(`${API_BASE_URL}/questions/${examId}`)
}