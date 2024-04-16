import api from "./api";

const ENDPOINT = '/answer'

export const getAllAnswersByQuestion = async (questionId, token) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}/${questionId}`,
      {
        headers: { 'Authorization': token }
      }
    );

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


export default {
  getAllAnswersByQuestion,
}