import React from 'react';
import Gallery from "./Gallery.jsx";
import Description from "./Description.jsx";
import styled from 'styled-components';
import axios from 'axios';
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
    const { id } = this.props;
    this.state = {
      id,
      onDisplay: false,
        gameId: null,
        name: null,
        description: null,
        head_url: null,
        release_month: null,
        release_year: null,
        developer: null,
        publisher: null,
        negative_review_count: null,
        positive_review_count: null,
        recent_negative_count: null,
        recent_positive_count: null,
        media_video: [],
      tags: ['Free to play', 'MOBA', 'Strategy', 'Multiplayer', 'PVP']
    }
  }

//remove gameInof object
  //Not dynamic. Need to add path.basename(document.URL) = id
  componentDidMount() {
    const { onDisplay } = this.state;
    axios.get(`/content/44`)
      .then(({ data }) => ( 
         this.setState({
           id: 'test',
          gameId: data.gameId,
          name: data.name,
          description: data.description,
          head_url: data.head_url,
          release_month: data.release_month,
          release_year: data.realease_year,
          developer: data.developer,
          publisher: data.publisher,
          negative_review_count: data.negative_review_count,
          positive_review_count: data.positive_review_count,
          recent_negative_count: data.recent_negative_count,
          recent_positive_count: data.recent_positive_count,
          media_video: data.media_video,
        onDisplay: !onDisplay },()=> console.log(this.state))
         ))
      .catch((err) => console.log(err))


  }

  render() {
    const { name, description, head_url,onDisplay,
      release_month, release_year, developer, publisher,
      negative_review_count, positive_review_count, tags,
      recent_negative_count, recent_positive_count, media_video
    } = this.state;
    if (!onDisplay) {
      return(
      <div>loading</div>
      )
    }

    if (onDisplay) {
      console.log('media_video', media_video)
      return (
        <Background>
          <Wrapper>
            <LeftCol>
              <Gallery
                media={media_video}
                head_url={head_url}
              />
            </LeftCol>
            <Description
            description={description}
            release_month = {release_month}
            release_year={release_year}
              head_url={head_url}
              developer={developer}
              publisher={publisher}
              positiveReviews={positive_review_count}
              negativeReviews={negative_review_count}
              recentPositiveReviews={recent_positive_count}
              recentNegativeReviews={recent_negative_count}
              tags={tags}
            />
          </Wrapper>
        </Background>
      )
    }
  }
}





export default App;