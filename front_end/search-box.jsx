import React from 'react';
import $ from 'jquery';

var SearchBox = React.createClass({
  getInitialState(){
    return({
      searchQuery: null,
      data: null
    })
  },

    //on change, save the movie name in the state
  saveSearchQuery(event){
    var query = event.target.value.toLowerCase();
    this.setState({searchQuery:query});
  },

    //on button click, send ajax call to youtube, should also take user to video page with first video, send a call to server to save in our database
  sendCall(){
    var q = this.state.searchQuery;
    q = q.split(' ').join('+');
      //youtube call
    // $.ajax({
    //   url:'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD3zaoLh7wyXs260-VQCLuJ6Ei9ubobiiA&part=snippet&channelId=UC3gNmTGu-TTbFPpfSs5kNkg&maxResults=10&q=' + q
    // })
    // .done((data) => {
    //   console.log(data);
    //   this.setState({data:data});
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

      //ajax call to database to save movie if it doesnt exist
    $.ajax({
      url:'/api/movie',
      title:this.state.searchQuery
    }).then((data) => {
      console.log(data)
    })
  },

  render() {
    return(
      <div>
      <input placeholder="Search movie trailers" onChange={this.saveSearchQuery}></input>
      <button onClick={this.sendCall}>Submit</button>
      </div>

    )
  }
})

export default SearchBox;