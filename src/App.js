import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import {MuiThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';
// Redux
import {Provider} from 'react-redux';
import store from './redux/store';
// Component
import Navbar from './components/Navbar';
import NavbarBottom from './components/NavbarBottom';
import AuthRoute from './util/AuthRoute.js';
// pages
import Intro from './pages/Intro';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';

// theme color
const theme = createMuiTheme(themeFile);
const token = localStorage.IdToken;
let authenticated;
if(token){
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    if(decodedToken.ex *1000 <Date.now()){
        window.location.href = '/login'
        authenticated = false;
    }else{
        authenticated = true;
    }
}


class App extends Component{
    render(){
        return (
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                <div className="App">
                    <Router>
                        <Navbar/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/intro" component={Intro}/>
                                <AuthRoute exact path="/login" component={Login} />
                                <AuthRoute exact path="/admin" component={Admin} authenticated/>
                            </Switch>
                        </div>
                        <NavbarBottom />
                    </Router>
                </div>
                </Provider>
            </MuiThemeProvider>
        )
    }
}
export default App;