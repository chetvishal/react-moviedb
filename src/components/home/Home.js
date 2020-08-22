import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchGenre, fetchMovieByGenre, fetchPersons, fetchTopratedMovie } from '../../service'
import RBCarousel from 'react-bootstrap-carousel'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

export function Home() {

  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);


  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre());
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id))
  }

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div style={{ height: 500, width: "100%", cursor: 'pointer' }} key={index}>
        <div className="carousel-center">
        <Link to={`/movie/${item.id}`}>
          <img style={{ height: 600 }} src={item.backPoster} alt={item.title} className="poster-carousel" />
          </Link>
        </div>
        {/* <div className="carousel-center">
          <i
            className="far fa-play-circle"
            style={{ fontSize: 95, color: "#f4c10f" }}
          ></i>
        </div> */}
        <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          {item.title}
        </div>
      </div>
    );
  });

  const genreList = genres.map((item, index) => {

    return (
      <li className="list-inline-item" key={index}>
        <button type="button" className="btn btn-outline-info" onClick={() => {
          handleGenreClick(item.id)
        }}>
          {item.name}
        </button>
      </li>
    )
  })

  const movieList = movieByGenre.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img src={item.poster} alt={item.title} className="img-fluid" />
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
          <ReactStars count={item.rating} size={20} color1={'#f4c10f'}></ReactStars>
        </div>
      </div>
    )
  })

  const trendingPersons = persons.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3 text-center" key={index}>

        <img src={item.profileImg} alt={item.name} className="img-fluid rounded-circle mx-auto d-block" />

        <p className="font-weight-bold text-center">{item.name}</p>
        <p className="font-weight-light text-center" style={{ color: '#5a606b' }}>
          Treding for {item.known}
        </p>

      </div>
    );
  })

  const topRatedList = topRated.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img src={item.poster} alt={item.title} className="img-fluid" />
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
          <ReactStars count={item.rating} size={20} color1={'#f4c10f'}></ReactStars>
        </div>
      </div>
    )
  })

  // console.log(topRated)
  return (
    <div className="container" style={{marginTop: 10}}>
      <div className="row">
        <div className="col">
          <RBCarousel
            autoplay={true}
            pauseOnVisibility={true}
            slideshowSpeed={5000}
            version={4}
            indicators={false}
          >
            {movies}
          </RBCarousel>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">
            {genreList}
          </ul>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#5a606b" }}>
            OUR RECOMENDATION
          </p>
        </div>
      </div>

      <div className="row mt-3">
        {movieList}
      </div>

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#5a606b" }}>
            TRENDING PERSONS ON THIS WEEK
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className="row mt-3">{trendingPersons}</div>

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{color: "#5a606b"}}>
            TOP RATED MOVIES 
          </p>
        </div>
      </div>

      <div className="row mt-3">
        {topRatedList}
      </div>

      <hr className="mt-5" style={{borderTop: "1pz solid #5a606b"}}></hr>

      <div className="row mt-3 mb-5">
        <div className="col-md-8 col-sm-6" style={{color: "#5a606b"}}>
          <h3>ABOUT ME</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad modi at repellendus suscipit, sequi deserunt! Molestiae facilis ad quidem reprehenderit. Vero quidem eos sunt quas, culpa nisi cupiditate temporibus quisquam tempore numquam blanditiis! Saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad modi at repellendus suscipit, sequi deserunt! Molestiae facilis ad quidem reprehenderit. Vero quidem eos sunt quas, culpa nisi cupiditate temporibus quisquam tempore numquam blanditiis! Saepe.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/" style={{color: "#f4c10"}}>
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{color: "#f4c10"}}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{color: "#f4c10"}}>
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>

        </div>
      </div>
      
    </div>
  )
}

export default Home;