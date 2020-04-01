import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px 0px 0px 0px;
  font-size: 11px;
`;


const TagsLabel = styled.div`
  line-height: 19px;
  font-size: 12px;
  color: #556772;
`;

const PopularTags = styled.div`
  white-space: nowrap;
  height: 22px;
`;

const Tag = styled.div`
  display: inline-block;
  line-height: 19px;
  padding: 0 7px;
  color: #67c1f5;
  background-color: rgba( 103, 193, 245, 0.2 );
  box-shadow: none;
  margin-right: 2px;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 3px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: none;
	  color: #ffffff;
    background: #67c1f5; 
    background: -moz-linear-gradient(-60deg,  #67c1f5 0%, #417a9b 100%); 
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#67c1f5), color-stop(100%,#417a9b));
    background: -webkit-linear-gradient(-60deg,  #67c1f5 0%,#417a9b 100%); 
    background: -o-linear-gradient(-60deg,  #67c1f5 0%,#417a9b 100%); 
    background: -ms-linear-gradient(-60deg,  #67c1f5 0%,#417a9b 100%); 
    background: linear-gradient(135deg,  #67c1f5 0%,#417a9b 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67c1f5', endColorstr='#417a9b',GradientType=1 );
  }
`;


class Tags extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        <TagsLabel>Popular user-defined tags for this product:</TagsLabel>
        <PopularTags>
          {
            this.props.tags.map(tag => <Tag>{tag}</Tag>)
          }
          <Tag>+</Tag>
        </PopularTags>
      </Wrapper>
    )
  }
}

export default Tags;