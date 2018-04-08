import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello world!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
