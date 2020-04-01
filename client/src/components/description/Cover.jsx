import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 324px;
  height: 151px;
`;
class Cover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Img src={this.props.url}/>
    )
  }
}

export default Cover;