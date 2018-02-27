import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/dashboard.css';

class DriverHome extends Component {
  render() {
    return (
      <div>
        <h1> Test DriverHome</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/driver_new_requests">New Requests</Link></li> 
        </ul>
      </div>
    );
  }
}

export default DriverHome;
