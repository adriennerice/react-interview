import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import ExampleComponent1 from './routes/ExampleComponent1.js';
import ExampleComponent2 from './routes/ExampleComponent2.js';
import ExampleComponent3 from './routes/ExampleComponent3.js';
import NoMatch from './routes/NoMatch.js';
import Nav from './components/nav'

function App() {
  return (
    
    <Router>
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/" component= {ExampleComponent1}/>
          <Route exact path='/example2' component={ExampleComponent2}/>
          <Route exact path='/example3' component={ExampleComponent3}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// <div className="App">
// <ExampleComponent1 />
// </div>

// <Route component={NoMatch}/>