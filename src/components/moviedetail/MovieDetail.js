import React, { useEffect, useState } from 'react';
import { fetchMovieDetail, fetchMovieVideos, fetchSimilarMovie, fetchCasts } from '../../service';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Modal } from "react-bootstrap";
import ReactPlayer from 'react-player';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom';



export function MovieDetail({ match }) {
    let params = match.params;
    let genres = [];
    const [isOpen, setIsOpen] = useState(false);
    const [detail, setDetail] = useState([]);
    const [video, setVideo] = useState([]);
    const [casts, setCasts] = useState([]);
    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetail(params.id));
            setVideo(await fetchMovieVideos(params.id));
            setCasts(await fetchCasts(params.id));
            setSimilarMovie(await fetchSimilarMovie(params.id));
        };
        fetchAPI();
    }, [params.id])

    genres = detail.genres;

    const MoviePalyerModal = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        // const key = `${video.results != null ? video.key  : null }`;
        console.log('movie deatial')
        const ckey = video.length ? video[0].key : null
        const key = ckey;
        // console.log(ke)
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        style={{ color: "#000000", fontWeight: "bolder" }}
                    >
                        { ckey ? detail.title : 'Trailer not available' }
                    </Modal.Title>
                </Modal.Header>



                <Modal.Body style={{ backgroundColor: "#000000" }}>
                    <ReactPlayer
                        className="container-fluid"
                        url={youtubeUrl + key}
                        alt = "Video not available"
                        playing
                        width="100%"
                    ></ReactPlayer>
                </Modal.Body>

            </Modal>
        );
    };

    let genresList;
    if (genres) {
        genresList = genres.map((g, i) => {
            return (
                <li className="list-inline-item" key={i}>
                    <button type="button" className="btn btn-outline-info">
                        {g.name}
                    </button>
                </li>
            );
        });
    }

    const castList = casts.slice(0, 4).map((c, i) => {
        return (
            <div className="col-md-3 text-center" key={i}>

                <img className="img-fluid rounded-circle mx-auto d-block"
                    src={c.id}
                    alt={c.name} />

                <p className="font-weight-bold text-center">{c.name}</p>
                <p className="font-weight-light text-center" style={{ color: '#5a606b' }}>
                    {c.character}
                </p>

            </div>
        )
    })

    const movieList = similarMovie.slice(0, 4).map((item, index) => {
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
    });

    console.log(casts)

    return (
        <div className="container">
            <div className="row mt-2">
                <MoviePalyerModal
                    show={isOpen}
                    onHide={() => {
                        setIsOpen(false);
                    }}
                ></MoviePalyerModal>
                <div className="col text-center" style={{ width: '100%' }}>
                    <img src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title} className="img-fluid" />
                    <div className="carousel-center">
                        <i className="far fa-play-circle" style={{ fontSize: 95, color: '#f4c10f', cursor: 'pointer' }} onClick={() => setIsOpen(true)}></i>
                    </div>
                    <div className="carousel-caption" style={{ textAlign: "center", fontSize: 35 }}>{detail.title}</div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <p style={{ textAlign: "center", fontWeight: "bolder" }}>GENRE</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <ul className="list-inline">
                        {genresList}
                    </ul>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <div className="text-center">
                        <ReactStars
                            count={detail.vote_average}
                            size={20}
                            color={'#f4c10f'}
                        >

                        </ReactStars>
                    </div>
                    <div className="mt-3">
                        <p style={{ color: '#5a606b', fontWeight: 'bold' }}>OVERVIEW</p>
                        {detail.overview}
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <p style={{ textAlign: "center", fontWeight: "bolder" }}>CAST</p>
                </div>
            </div>

            <div className="row mt-3">
                {castList}
            </div>

            <div className="row mt-3">
                <div className="col">
                    <p style={{ textAlign: "center", fontWeight: "bolder" }}>SIMILAR MOVIES</p>
                </div>
            </div>

            <div className="row mt-3">
                {movieList}
            </div>
        </div>
    )
}

export default MovieDetail;