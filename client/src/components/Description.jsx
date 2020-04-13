import React from 'react';
import styled from 'styled-components';
import Cover from './description/Cover.jsx';
import Snippet from './description/Snippet.jsx';
import Info from './description/Info.jsx';
import Tags from './description/Tags.jsx';


const Wrapper = styled.div`
  width: 324px;
  float: right;
`;
class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { release_month, release_year } = this.props;

    return(
      <Wrapper>
        <Cover url={this.props.head_url[0]}/>
        <Snippet snippet={this.props.description}/>
        <Info 
        release_month ={release_month}
        release_year = {release_year}
          developer={this.props.developer}
          publisher={this.props.publisher}
          date={this.props.release_date}
          positiveReviews={this.props.positive_review_count}
          negativeReviews={this.props.negative_review_count}
          recentPositiveReviews={this.props.recent_negative_count}
          recentNegativeReviews={this.props.recent_positive_count}
        />
        <Tags tags={this.props.tags}/>
      </Wrapper>
    )
  }
}


export default Description;