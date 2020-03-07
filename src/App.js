import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import './App.css';

import Header from './Header';

const Home = lazy(() => import('./Home'));
const AnotherHome = lazy(() => import('./AnotherHome'));

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <div className="container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/another-home" component={AnotherHome}/>
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </div>
    );
}

export default App;
