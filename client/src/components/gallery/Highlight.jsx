import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #000000;
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  width: 600px;
  height: 337px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;

`;
class Highlight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { focusImage } = this.props;
    var mediaDisplay= <Img src={focusImage}/>;
    return(
      <Wrapper>
        {mediaDisplay}
      </Wrapper>
    );
  }
}
 


export default Highlight;