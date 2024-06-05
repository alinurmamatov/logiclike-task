import axios from 'axios';

const COURSES_API = 'https://logiclike.com/docs/courses.json';

export const getCourses = async () => {
  const response = await axios.get(COURSES_API);
  return response.data;
};
