import React,{useEffect, useState} from 'react';
import { fetchMovieDetail } from '../../service';

export function MovieDetail({match}) {
    let params = match.params;
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetail(params.id))
        };
        fetchAPI();
    }, [])

    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col text-center" style={{width: '100%'}}></div>
            </div>
            <h1>Movie Detail</h1>
        </div>
    )
}

export default MovieDetail;