import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "166f6ed7fde16e40c26ebbcd7f6c8b7d",
    language: "pt-BR",
    include_adult: false,
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjZmNmVkN2ZkZTE2ZTQwYzI2ZWJiY2Q3ZjZjOGI3ZCIsInN1YiI6IjYyYzcwZGVlMTJjNjA0MDA0Y2E3ODY3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2kegI7NgMAB8F0y5S_EZzPocg7E8KEMIhXSqSbSMRI",
  },
});
