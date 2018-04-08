import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Style
// import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <p>Coś o mnie</p>
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
