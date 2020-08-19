import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import RBCarousel from 'react-bootstrap-carousel'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class searchResult extends Component {

    state = {
        result: []
    }

    getSecondPart(str) {
        return str.split('/search/')[1];
    }

    // retUrl () {
    //     console.log(window.location.href)
    // }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4b87f1ea1a4141d7781efd43375e746f&language=en-US&page=1&include_adult=false&query=${this.getSecondPart(window.location.href)}`)
            .then(res => {
                console.log(res.data.results)
                this.setState({
                    result: res.data.results
                })
            })
    }

    render() {
        console.log(this.getSecondPart(window.location.href))
        console.log(this.state.result)

        return (
            <div style={{marginTop: 15}} className="container" >
            <div className="row mt-3">
                {
                    this.state.result && this.state.result.map(res => {
                        return (
                            <div className="col-md-3 col-sm-6" key={res.id}>
                                <div className="card">
                                    <Link to={`/movie/${res.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt={res.title} className="img-fluid" />
                                    </Link>
                                </div>
                                <div className="mt-3">
                                    <p style={{ fontWeight: 'bolder' }}>{res.title}</p>
                                    <p>Rated: {res.vote_average}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default searchResult;