import React, {Component} from 'react';
import Navigation from './components/Navigation';
import './App.css';

const title = "HackerMaps";
const locations = [
    'Lombard St, San Francisco, CA, USA',
    'PIER 39, The Embarcadero, San Francisco, CA, USA',
    'Golden Gate Bridge, San Francisco, CA, USA',
    `Fisherman's Wharf, San Francisco, CA, USA`,
    'Alcatraz Island, San Francisco, CA, USA'
];

class App extends Component {

    constructor() {
        super();
        this.locations = [...locations];
    }

    render() {
        return (
            <div className="App">
                <h8k-navbar header={title}></h8k-navbar>
                <Navigation locations={this.locations}/>
            </div>
        );
    }
}

export default App;
