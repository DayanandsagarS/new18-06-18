import React, { Component } from 'react';
// import {IssueDetails} from './IssueDetails';
import axios from 'axios';

export default class IssueList extends Component {
    constructor(props)
    {   
    super(props);
    this.state={
        issues:[],
        selectedIssue:""
    }
    }

    ComponentDidMount =()=>{
        axios.get("http://demo7609732.mockable.io/issueList")
        .then((res)=>{
            console.log("show my data:",res.data)
            this.setState({
                issues: res.data
            })
        })
        .catch((err)=>{
            console.log("Error",err)
        });
    }
    viewDetails=(selectedIssue)=>{
        console.log(selectedIssue);

        this.setState({
            selectedIssue:selectedIssue
        })
    }

  render() {
      const issRow=this.state.issues.map(e=>{
        return(
            <tr key={e.issueId}>
                <td>{e.issueId}</td>
                <td>{e.issueSummary}</td>
                <td>{e.issueStatus}</td>
                <td>{e.createdDate}</td>
                <td>
                <button className="" onClick=""><link className="ui basic blue button" to={`./${e.issueId}`}>View Details</link></button>
                
                    {/*<button className="" onClick={()=>this.viewDetails(e)}>View Details</button>*/}
                </td>
            </tr>  

          )
      });

    return (
      <div>
          <table class="ui celled fixed sortable table">
            <thead class="">
                <tr >
                <th class="">Issue ID</th>
                <th class="">Issue Summary</th>
                <th class="">Issue status</th>
                <th class="">Created Date</th>
                <th class=""></th>
                </tr>
            </thead>
            <tbody class="">
                    {issRow}
            </tbody>
        </table>
        </div>
    )
  }
}
