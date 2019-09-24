import React from 'react';
import MapContainer from '../components/mapContainer';

// Google Map with store location page
class ExampleComponent1 extends React.Component {

    render() {
      return (
        <div>
          <h1>Lowe's Locations </h1>
          <MapContainer/>
        </div>
      )
    }

}

export default ExampleComponent1;
