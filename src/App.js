import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Test from './Test';
import {Step, StepGroup, Segment, Container} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
//import StepGroup from "semantic-ui-react/dist/es/elements/Step/StepGroup";


class App extends Component {
    render() {
        return (
            <Container>
                <Segment.Group>
                <nav>
                    <StepGroup>
                        <Step><Link to='/'>Home</Link></Step>
                        <Step><Link to='/Step1'>step1</Link></Step>
                        <Step><Link to='/Step2'>step2</Link></Step>
                        <Step><Link to='/Step3'>step3</Link></Step>
                        <Step><Link to='/Step4'>step4</Link></Step>
                        {/*<Step><Link to='/Test'>Test</Link></Step>*/}
                    </StepGroup>
                </nav>
                </Segment.Group>

                <Segment.Group>
                <Switch>
                    <Route exact strict path='/' component={Home}/>
                    <Route exact strict path='/Step1' component={Step1}/>
                    <Route exact strict path='/Step2' component={Step2}/>
                    <Route exact strict path='/Step3' component={Step3}/>
                    <Route exact strict path='/Step4' component={Step4}/>
                    {/*<Route exact strict path='/Test' component={Test}/>*/}
                </Switch>
                </Segment.Group>
            </Container>
        );
    }
}

export default App;
