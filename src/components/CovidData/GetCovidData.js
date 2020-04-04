import React, { Component } from 'react';

import Tablejson from '../Table';
// import { MDBDataTable } from 'mdbreact';

class GetCovidData extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            records : []        
        };
    }

    componentDidMount(){
        // Using europe data
        // this return covid data 
        // fetch("https://opendata.ecdc.europa.eu/covid19/casedistribution/json/",{ 
        //     fetch("https://jsonplaceholder.typicode.com/photos",{  
        //     method: 'GET',
        //     headers:{
        //         'Access-Control-Allow-Origin': '*'
        //     }
        //   })
        fetch("https://covid-193.p.rapidapi.com/statistics", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "088854f95bmsh82d19f9ac952d36p1da956jsn2401cfa29608"
            }
        })
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    records : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        );
    }

    render() {
        const {error, isLoaded, records} = this.state;

        console.log(JSON.stringify(final));
        if(error){
            return <div>Failed loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            var responses = [];
            responses = records.response;
            var final = [];
            responses.map((response, index) => {
                final.push({
                    country: response.country,
                    active_cases: response.cases.active,
                    total_cases: response.cases.total,
                    total_deaths: response.deaths.total,
                    update_time: response.time
                }
                )
            });
            return(
                    <Tablejson data={final}/>
                // <MDBDataTable striped bordered hover data={records} />
            );
        }
      
    }
  }

  export default GetCovidData;