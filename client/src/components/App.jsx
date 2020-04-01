import React from 'react';
import Gallery from "./Gallery.jsx";
import Description from "./Description.jsx";
import styled from 'styled-components';

const Background = styled.div`
  
`;

const Wrapper = styled.section`
    background: #1b2838;
    color: #acb2b8;
    padding: 0px 0px 12px;
    margin: 0px 231.5px;
    width: 940px;
    height: 444px;
    font-family: Arial, Helvetica, sans-serif;
  `;


 const LeftCol = styled.div`
    float: left;
    width: 616px;
    display: block;
 `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameInfo: {
        name: null,
        description: null,
        head_url: null,
        release_date: null,
        developer: null,
        publisher: null,
        negative_review_count: null,
        positive_review_count: null,
        recent_negative_count: null,
        recent_positive_count: null
      },
      tags: ['Free to play', 'MOBA', 'Strategy', 'Multiplayer', 'PVP'],
      media: {
        videos: null,
        images: ['https://s3-us-west-1.amazonaws.com/fecsteam/Images/1.jpeg']
      },
    }
  }

  componentDidMount() {
    fetch('/games/1')
    .then(response => response.json())
    .then(gameInfo => {
      gameInfo.head_url = 'https://s3-us-west-1.amazonaws.com/fecsteam/Images/header.jpg';
      this.setState({
        gameInfo
      }, () => console.log(this.state));
    });

    fetch('/screenshots') 
    .then(response => response.json())
    .then(screenshots => {
      this.setState({
        media: {
          videos: this.state.media.videos,
          images: screenshots
        }
      }, () => console.log(this.state));
    });

    fetch('/videos')
    .then(response => response.json())
    .then(videos => {
      this.setState({
        media: {
          videos,
          images:this.state.media.images
        }
      }, () => console.log(this.state));
    });
  }
  render() {
    return (
      <Background>
        <Wrapper>
          <LeftCol>
            <Gallery  media={this.state.media} 
            />
          </LeftCol>
          <Description 
          gameInfo={this.state.gameInfo} 
          tags={this.state.tags}
          />
        </Wrapper>
      </Background>
    )
  }
  
}


export default App;