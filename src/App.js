import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here ;
import Finance from "./pages/Finance";

// Elemen



// Import Css Here 
import './assets/scss/style.scss';

const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Finance}/>


                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
