import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TopNavBar  from './TopNavBar';
import Header  from './Header';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Header} />
                    <Route exact path="/" component={TopNavBar} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;