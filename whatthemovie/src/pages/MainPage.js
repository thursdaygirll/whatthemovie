import React from 'react';
import MovieCard from '../components/MovieCard';
import './MainPage.css';

const MainPage = () => {
  const movieImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  return (
    <div className="main-page">
      <h1 className="title">Movie Guesser</h1>
      <div className="movie-frame-container">
        {movieImages.map((image, index) => (
          <MovieCard key={index} image={image} />
        ))}
      </div>
      <button className="start-button"><a href="/menu">Start Game</a></button>
    </div>
  );
};

export default MainPage;