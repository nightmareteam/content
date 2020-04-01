import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  max-height: 111px;
  overflow: hidden;
  font-size: 13px;
  line-height: 18px;
  padding-right: 16px;
`;
class Snippet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        {this.props.snippet}
      </Wrapper>
    )
  }
}

export default Snippet;