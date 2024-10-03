import axios from "axios";

const API_BASE_URL = 'https://aggie-study-45ef20d60435.herokuapp.com/courses';

export const getCourses = () => {
    return axios.get(API_BASE_URL);
};

export const getCourseById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

export const getCoursesByTopic = (topic) => {
    return axios.get(`${API_BASE_URL}/topics/${topic}`);
};

export const addCourse = (course) => {
    return axios.post(API_BASE_URL, course);
};

export const updateCourse = (id, course) => {
    return axios.put(`${API_BASE_URL}/${id}`, course);
};

export const deleteCourse = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};

export const searchCourses = (query) => {
    return axios.get(`${API_BASE_URL}/search`, { params: { query } });
};
