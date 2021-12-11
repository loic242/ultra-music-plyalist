import React from 'react';
import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist  from '../Playlist/Playlist';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      SearchResult: [{name:'name1', artist:'arstist1', album: 'album1', id:1},
      {name:'name2', artist:'arstist2', album: 'album2', id:2},
      {name:'name3', artist:'arstist3', album: 'album3', id:3}],
      PlaylistName: 'My playlist',
      PlaylistTrack:[ {name:'PlaylistName1', artist:'PlaylistArstist1', album: 'PlaylistAlbum1', id:4},
      {name:'PlaylistName1', artist:'PlaylistArstist2', album: 'PlaylistAlbum2', id:6},
       {name:'PlaylistName3', artist:'PlaylistArstis3', album: 'PlaylistAlbum3', id:7}]
     }
  }
  render() { 
    return ( 
      <div>
      <h1>Ultra<span className="highlight"> music</span> app</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResult SearchResult={this.state.SearchResult}/>
          <Playlist
           PlaylistName={this.state.PlaylistName}
           PlaylistTrack={this.state.PlaylistTrack}
          />
        </div>
      </div>
    </div>
     );
  }
}
 
export default App;


