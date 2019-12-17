import React from 'react';
import PropTypes from 'prop-types';
import style from './Article.module.css';

const Article = ({ poster_path, title, vote_average, overview, genres }) => (
  <article className={style.wrapper}>
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
    </div>
    <div className={style.filmDeatails}>
      <h1>{title}</h1>
      <p>Vote: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      {genres.map(genre => (
        <li key={genre.id}>
          <p>{genre.name}</p>
        </li>
      ))}
    </div>
  </article>
);

Article.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Article;
