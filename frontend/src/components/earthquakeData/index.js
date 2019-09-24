import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class EarthQuakeData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quakes: []
    };
  }

  componentDidMount(){
    fetch('/react-interview/getEarthQuakes')
    .then(res => res.json())
    .then(data => {
      this.setState({ quakes: data });
      console.log(this.state.quakes);
    })
  }
  
  
  render () {
          const columns = [
            {
              Header: "Country",
              accessor: "country"
            },
            {
              Header: "City",
              accessor: "city"
            },
            {
              Header: "Date",
              accessor: "date",
              filterable: false
            },
            {
              Header: "Time",
              accessor: "time"
            },
            {
              Header: "Depth",
              accessor: "depth",
              width: 100
            },
            {
              Header: "Intensity (Richter)",
              accessor: "richter"
            },
            {
              Header: "Latitude",
              accessor: "lat",
              width: 100
            },
            {
              Header: "Longitude",
              accessor: "long",
              width: 100
            }
          ];

        return (
            <div>
                <ReactTable
                  data={ this.state.quakes.Quakes }  
                  columns={ columns }
                  filterable 
                  defaultPageSize={ 50 } 
                  noDataText="No Records Found"
                  showPaginationTop
                  className= "-striped -highlight"
                >
                </ReactTable>
            </div>
        )
    }
}

export default EarthQuakeData;