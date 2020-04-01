import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  height: 18px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const LeftArrowWrapper= styled.div`
  left: 0;
  position: absolute;
  width: 38px;
  top: 0;
  bottom: 0;
  background-color: rgba( 0, 0, 0, 0.4 );
  border-radius: 3px;
  cursor: pointer;
  &: hover {
    background: #3d6c8d;
    background: -moz-linear-gradient(-45deg, #3d6c8d 0%, #2e5470 100%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#3d6c8d), color-stop(100%,#2e5470));
    background: -webkit-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
    background: -o-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
    background: -ms-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
    background: linear-gradient(135deg, #3d6c8d 0%,#2e5470 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3d6c8d', endColorstr='#2e5470',GradientType=1 );
  }
`;

const RightArrowWrapper= styled.div`
  right: 0;
  position: absolute;
  width: 38px;
  top: 0;
  bottom: 0;
  background-color: rgba( 0, 0, 0, 0.4 );
  border-radius: 3px;
  cursor: pointer;
  &: hover {
    background: #3d6c8d;
    background: -moz-linear-gradient(-45deg, #3d6c8d 0%, #2e5470 100%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#3d6c8d), color-stop(100%,#2e5470));
    background: -webkit-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
    background: -o-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
    background: -ms-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
    background: linear-gradient(135deg, #3d6c8d 0%,#2e5470 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3d6c8d', endColorstr='#2e5470',GradientType=1 );
  }
`;

const LeftArrow= styled.span`
  background-color: rgba( 35, 60, 81, 0.4 );
  display: inline-block;
  background-position: -18px 0px;
  background-repeat: no-repeat;
  background-image: url(https://store.steampowered.com/public/images//v6/icon_cluster_controls.png);
  width: 9px;
  height: 7px;
  margin-left: 13px;
  margin-top: 5px;
`;

const Track = styled.input.attrs({
  type: "range",
  min: '1',
  max: '462',
  value: props => props.value
  }) `
  -webkit-appearance: none;
  position: absolute;
  left: 39px;
  right: 39px;
  width: 522px;
  height: 18px;
  top: 0;
  bottom: 0;
  border-radius: 3px;
  background-color: rgb(13, 21, 29);
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    top: 0;
    bottom: 0;
    background-color: rgba( 35, 60, 81, 0.4 );
    border-radius: 3px;
    height: 18px;
    width: 60px;
    cursor: pointer;
    &: hover {
      background: #3d6c8d;
      background: -moz-linear-gradient(-45deg, #3d6c8d 0%, #2e5470 100%);
      background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#3d6c8d), color-stop(100%,#2e5470));
      background: -webkit-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
      background: -o-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
      background: -ms-linear-gradient(-45deg, #3d6c8d 0%,#2e5470 100%);
      background: linear-gradient(135deg, #3d6c8d 0%,#2e5470 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3d6c8d', endColorstr='#2e5470',GradientType=1 );
    }
  }
`;



const RightArrow = styled.span`
  background-color: rgba( 35, 60, 81, 0.4 );
  display: inline-block;
  background-position: -9px 0px;
  background-repeat: no-repeat;
  background-image: url(https://store.steampowered.com/public/images//v6/icon_cluster_controls.png);
  width: 9px;
  height: 7px;
  margin-left: 15px;
  margin-top: 5px;
`;


class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.updateChange = this.updateChange.bind(this);
  }
  updateChange(e) {
    this.props.onSliderMove(e.target.value);
  }
  
  render() {
    return(
      <Wrapper>
        <LeftArrowWrapper onClick={() => this.props.onLeftClick()}>
          <LeftArrow onClick={() => this.props.onLeftClick}/>
        </LeftArrowWrapper >
        <Track value={this.props.sliderPos} onChange={this.updateChange}/>
        <RightArrowWrapper onClick={() => this.props.onRightClick()}>
          <RightArrow/>
        </RightArrowWrapper>
      </Wrapper>
    );
  }
}
 


export default Slider;