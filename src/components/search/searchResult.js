import React, {Component} from 'react';

class searchResult extends Component {
    getSecondPart (str)  {
        return str.split('/search/')[1];
    }
    render(){
        console.log(this.getSecondPart(window.location.href))
        const url = `https://api.themoviedb.org/3/search/movie?api_key=4b87f1ea1a4141d7781efd43375e746f&language=en-US&page=1&include_adult=false&query=${this.getSecondPart(window.location.href)}`;
        console.log(url)
        return(
            <div>

            </div>
        )
    }
}

export default searchResult;