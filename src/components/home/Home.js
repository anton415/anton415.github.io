import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h3 className='hello-words'>
          Hello, my name Anton.
        </h3>
        <p className='hello-words'>
          You can download my CV or <Link to="/about/">see more information</Link>.
        </p>
      </div>
    );
  }
}

export default Home;
