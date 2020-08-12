import React, {useState, useEffect} from 'react';
import {fetchMovies} from '../../service/index'
import RBCarousel from 'react-bootstrap-carousel'

const Home = () => {

    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
        };

        fetchAPI();
    }, []);
    const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
        <div key={index}>
            <div className="carousel-center">
                <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
            </div>
        </div>
    );
});
return (
    <div className="container">
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
    </div>
)
}

export default Home;