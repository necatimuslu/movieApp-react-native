import axios from 'axios';
import {baseUrl} from './baseUrl';
import {apiKey} from './baseUrl';

export const getPopulerMovies = async () =>
  await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=tr-TR`);

export const getUpcomingMovies = async () =>
  await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}&language=tr-TR`);

export const getTopRatedMovies = async () =>
  await axios.get(
    `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=tr-TR`,
  );

export const getPopulerTv = async () =>
  await axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}&language=tr-TR`);

export const getFamilyMovies = async () =>
  await axios.get(
    `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=10751&language=tr-TR`,
  );

export const getNatureMovies = async () =>
  await axios.get(
    `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=99&language=tr-TR`,
  );

export const getMovieById = async id =>
  await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=tr-TR`);

export const getVideoMovieById = async id =>
  await axios.get(
    `${baseUrl}/movie/${id}/videos?api_key=${apiKey}&language=tr-TR`,
  );

export const searchMovieAndTv = async (query, select) => {
  const resp = await axios.get(
    `${baseUrl}/search/${select}?api_key=${apiKey}&query=${query}&language=tr-TR`,
  );
  return resp.data.results;
};
