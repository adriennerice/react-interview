import React from 'react';
import EarthQuakeData from '../components/earthquakeData';

// Table with earthquake data page
class ExampleComponent2 extends React.Component {

    render() {
      return (
        <div>
          <h1>
            Earthquake Data
          </h1>
          <EarthQuakeData />
        </div>
      )
    }

}

export default ExampleComponent2;