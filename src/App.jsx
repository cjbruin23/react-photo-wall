import React, { Component } from 'react';
import './App.css';

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = "https://picsum.photos/200?photo=";
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = {
    photos: []
  }

  // 2. Declare a life cycle method
  // This life cycle method should:
  // - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received

  componentDidMount() {
    let self = this;
    fetch(PHOTO_LIST_URL)
      .then(function(res) {
        res.json().then(function(data) {
          self.setState({
            photos: data
          })
        })
      });
  }
  componentWillUnmount(){}


  render() {
    const { photos = [] } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
          <p>
            Start by reading App.jsx and completing the numbered steps.
            Afterward, delete this paragraph. Then, open up App.css and
            complete the instructions there.
          </p>
        </header>
        <div className="collage">
            {/* We use map here because Array.prototype.map is an expression,
              * and for loops are not. You'll learn more about this soon! 
              */}
            {photos.map( photo => 
                <img alt={/* 3. Fill me in with the photo's filename */ photo.filename}
                     key={/* 4. Fill me in with the photo's id */ photo.id}
                     src={/* 5. Fill me in with the photo's URL */ PHOTO_URL + photo.post_url}
                />
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
