import React from 'react';
import styled from 'styled-components'
import Highlight from './gallery/Highlight.jsx';
import Strip from './gallery/Strip.jsx';
import Slider from './gallery/Slider.jsx';

const Overflow = styled.div`
  overflow: hidden;
  margin-right: 16px;
  position: relative;
`;
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url : props.media.images[0],
      isVideo: false,
      sliderPos: 0,
      stripPos: 0,
      selectorPos : 240
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleSliderMove = this.handleSliderMove.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }
  componentDidMount() {
    setInterval(this.handleRightArrowClick, 10000);
  }
  
  handleItemClick(index) {
    if (index === 0) {
      this.setState({
        sliderPos: 0,
        stripPos: 0
      })
    } else if(index === 12){
      this.setState({
        sliderPos: 462,
        stripPos: -960
      })
    } else {
      if (index*120 + this.state.stripPos > 480) {
        var stripPos = (this.state.stripPos - 600) < -960 ? -960 : this.state.stripPos - 600;
        this.setState({
          stripPos,
          sliderPos: stripPos * (-462/960)
        })
      }
      if (index*120 + this.state.stripPos < 0) {
        var stripPos = this.state.stripPos + 600 > 0 ? 0 : this.state.stripPos + 600;
        this.setState({
          stripPos,
          sliderPos: stripPos * (-462/960)
        })
      }
    }
    this.setState({
      selectorPos: 120*index
    });
    if(index > 1 && index < 12) {
      this.setState({
        url: this.props.media.images[index - 2],
        isVideo: false
      })
    } else {
      if(index === 12) {
        index = 2;
      }
      this.setState({
        url: this.props.media.videos[index].video,
        isVideo: true
      })
    }
  }
  handleSliderMove(val) {
    this.setState({
      sliderPos: val,
      stripPos: val* (-960/462)
    })
  }
  handleLeftArrowClick() {
    if(this.state.selectorPos === 0) {
      this.handleItemClick(12);
    } else {
      this.handleItemClick((this.state.selectorPos/120 - 1));
    }
  }

  handleRightArrowClick() {
    if(this.state.selectorPos === 1440) {
      this.handleItemClick(0);
    } else {
      this.handleItemClick((this.state.selectorPos/120 + 1));
    }
  }

  render() {
    return(
      <Overflow>
        <Highlight url={this.state.url} isVideo={this.state.isVideo} />
        <Strip 
              videos={this.props.media.videos}
              screenshots={this.props.media.images} 
              onClick={this.handleItemClick} 
              stripPos={this.state.stripPos}
              selectorPos={this.state.selectorPos}
        />
        <Slider 
              sliderPos={this.state.sliderPos} 
              onSliderMove={this.handleSliderMove}
              onRightClick={this.handleRightArrowClick}
              onLeftClick={this.handleLeftArrowClick}
        />
      </Overflow>
    );
  }
}
 


export default Gallery;