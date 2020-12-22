import React from "react";
import SelectSearch from 'react-select-search'
import { GetVillager } from './acnhTable.js'

/* We need to fill up the villagers array first. 
Get the array from the API, then sort by name 
In a name:value (id) pair*/
const compare = (a, b) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  var options = [];


export default class GetVillagerNames extends React.Component {
    state = {
      loading:true,
    }

    //Fetch list of villager names from the ACNH API
    async componentDidMount() {
      const url = 'https://acnhapi.com/v1/villagers/'
      const response = await fetch(url);
      const data = await response.json();
      for (var key in data) {
        var option = {name: data[key].name['name-USen'], value: data[key].id}
        options.push(option);
      }
      options.sort(compare);
      this.setState({loading:false})
    };


    render() {
      if (this.state.loading) {
        return <div></div>
      }
      return (
      <div>
      <SelectSearch options={options} search="true" placeholder="Select villager" onChange={GetVillager} />
      </div>
      )
    };
  };

