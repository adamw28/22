import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styles from './Home.css';
import PostCreateWidget from '../Post/components/PostCreateWidget/PostCreateWidget';
import { getShowAddPost } from '../App/AppReducer';

class Home extends Component {

  render() {
    return (
      <div>
        <h2>Hello world!</h2>
        <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showAddPost: getShowAddPost(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
