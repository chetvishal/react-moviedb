import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import history from '../history/history';

class Navbar extends Component {


    state = {
        str: [],
        url: '',
        movies: [],
        code: ''
    }
    handleChange = (e) => {
        this.setState({
            str: e.target.value.split(" ")
        })
    }
    handleSubmit =  (e) => {
        const len = this.state.str.length
        const ar = this.state.str
        var char = ''
        for (var i = 0; i < len - 1; i++){
            char = char + ar[i].concat('+')
        }
        char = char.concat(ar[len-1])
        e.preventDefault()
        console.log(this.state.str.length)
        console.log(char)
        console.log(`https://api.themoviedb.org/3/search/movie?api_key=4b87f1ea1a4141d7781efd43375e746f&language=en-US&page=1&include_adult=false&query=${char}`)
        this.setState({
            url: `https://api.themoviedb.org/3/search/movie?api_key=4b87f1ea1a4141d7781efd43375e746f&language=en-US&page=1&include_adult=false&query=${char}`,
            code: char.trim()
        })
        axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: `4b87f1ea1a4141d7781efd43375e746f`,
                language: 'en_US',
                page: 1,
                query: char
            }
        })
        .then(res => {
            console.log(this.state.code)
            history.push(`/search/${this.state.code}`)
            window.location.reload(false);
        })
        // console.log(data)
            
    }
    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-icon-top navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="/" style={{color: 'white'}}>TimesMovies2</a>
                    <button className="navbar-toggler bg-warning" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
                            
                            <button className="btn btn-warning  my-2 my-sm-0" type="submit" >Search</button>
                            
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;