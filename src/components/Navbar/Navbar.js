import React, { Component } from 'react'

class Navbar extends Component {


    state = {
        str: []
    }
    handleChange = (e) => {
        this.setState({
            str: e.target.value.split(" ")
        })
    }
    handleSubmit = (e) => {
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
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">TimesMovies</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;