import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCreateWidget from '../Post/components/PostCreateWidget/PostCreateWidget';

// Import Style
// import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <p>Coś o mnie</p>
        <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
