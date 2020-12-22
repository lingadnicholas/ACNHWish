import React from "react";
import SelectSearch from 'react-select-search'

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


  export default class GetVillagerNames extends React.Component {
    options=[]
    state = {
      loading:true 
    }

    async componentDidMount() {
      const url = 'https://acnhapi.com/v1/villagers/';
      const response = await fetch(url);
      const data = await response.json();
      for (var key in data) {
        var option = {name: data[key].name['name-USen'], value: data[key].id}
        this.options.push(option);
      }
      this.options.sort(compare);
      this.setState({loading:false})
    };

    render() {
      console.log(this.options)
      if (this.state.loading) {
        return <div></div>
      }
      console.log(this.options.length)
      return (
      <div>
      <SelectSearch options={this.options} search="true" placeholder="Select villager" />
      </div>
      )
    };
  };

  /*NOW FIND OUT HOW TO GET THE VALUE LMAO*/