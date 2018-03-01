import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Step1 from './Step1';
import Test from './Test';
import {Step, StepGroup} from 'semantic-ui-react';
//import StepGroup from "semantic-ui-react/dist/es/elements/Step/StepGroup";


class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <StepGroup>
                        <Step><Link to='/'>Home</Link></Step>
                        <Step><Link to='/Step1'>step1</Link></Step>
                        {/*<Step><Link to='/Test'>Test</Link></Step>*/}
                    </StepGroup>
                </nav>

                <Switch>
                    <Route exact strict path='/' component={Home}/>
                    <Route exact strict path='/Step1' component={Step1}/>
                    {/*<Route exact strict path='/Test' component={Test}/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;
