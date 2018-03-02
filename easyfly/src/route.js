import { HashRouter, Route } from 'react-router-dom';

import React, { Component } from 'react'
import Home from './Home';
import {DriverLogin, RiderLogin} from './Login';
import DriverHome from './DriverHome'
import DriverNewRequests from './DriverNewRequests'
import DriverAllTrips from './DriverAllTrips'

const Paths = () => (
    <HashRouter>
    	<div>
	    	<Route exact path="/" component={Home} />
	    	<Route path="/driver_home" component={DriverHome} />
	    	<Route path="/driver_new_requests" component={DriverNewRequests} />
	    	<Route path="/driver_all_trips" component={DriverAllTrips} />
        <Route path="/driver/login" component={DriverLogin}/>
        <Route path="/rider/login" component={RiderLogin}/>
   		</div>
   	</HashRouter>
 );

export default Paths;