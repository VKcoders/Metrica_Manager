import api from "./api";
import { getSearchById } from "./Search"

const ENDPOINT = '/search'

export const getIntroQuestions = async (searchId, token) => {
  try {
    const searchData = await getSearchById(searchId, token);

    const { data } = await api.get(
      `${ENDPOINT}/intro/${searchData.introduction}`,
      {
        headers: { 'Authorization': token }
      }
    );

    const results = Object.entries(data);
    results.shift();
    const section = results.flat().filter(item => typeof item !== 'string' && item);
    const {questions, answers} = section.reduce((acc, obj) => {
      acc.questions.push(obj.question);
      acc.answers.push(obj.answer);
      return acc;
    }, {questions: [], answers: []});

    return {
      questions,
      answers,
    };
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getMainQuestions = async (searchId, token) => {
  try {
    const searchData = await getSearchById(searchId, token);

    const { data: { client_id, ...questions } } = await api.get(
      `${ENDPOINT}/question/${searchData.search}`,
      {
        headers: { 'Authorization': token }
      }
    );

    return questions;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default {
    getIntroQuestions,
}