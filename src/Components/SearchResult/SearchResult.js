import React from 'react';
import './SearchResult.css'
import Tracklist from '../Tracklist/Tracklist';
class SearchResult extends React.Component {
    render() { 
        return (
            <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks= {this.props.SearchResult}/>
      </div>
        );
    }
}
 
export default SearchResult;