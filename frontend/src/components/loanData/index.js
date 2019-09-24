import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class LoanData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loans: []
    };
  }

  componentDidMount(){
    fetch('/react-interview/getLoanData')
    .then(res => res.json())
    .then(data => {
      this.setState({ loans: data });
      console.log(this.state.loans);
    })
  }
  
  
  render () {
          const columns = [
            {
              Header: "Loan ID",
              accessor: "loan_id",
              show: false
            },
            {
              Header: "Status",
              accessor: "loan_status"
            },
            {
              Header: "Principal",
              accessor: "Principal"
            },
            {
              Header: "Terms",
              accessor: "terms"
            },
            {
              Header: "Effective Date",
              accessor: "effective_date"
            },
            {
              Header: "Due Date",
              accessor: "due_date"
            },
            {
              Header: "Paid off Time",
              accessor: "paid_off_time"
            },
            {
              Header: "Past Due Days",
              accessor: "past_due_days"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Education",
              accessor: "education"
            },  
            {
              Header: "Gender",
              accessor: "Gender"
            }
          ];

        return (
            <div>
                <ReactTable
                  data={ this.state.loans.Loans }  
                  columns={ columns }
                  filterable 
                  defaultPageSize={ 25 } 
                  noDataText="No Records Found"
                  className= "-striped -highlight"
                >
                </ReactTable>
            </div>
        )
    }
}

export default LoanData;