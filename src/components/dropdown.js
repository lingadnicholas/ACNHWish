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

  var options = [];
const url = 'https://acnhapi.com/v1/villagers/'
/*When there is a valid value from the dropdown list, we want to:
fetch the JSON object with that ID from the ACNH API
Get all the data (Personality, Name, Picture, Birthday, Species, Gender, Catchphrase)
Create a new Villager, place it in the respective VillagerColumn*/

async function onChange(value) {
  console.log(url+value)
  const response = await fetch(url + value);
  const data = await response.json();
  const villagerInfo = {
    key: value,
    name: data.name['name-USen'],
    personality: data.personality,
    image_url: data.image_url,
    species: data.species,
    gender: data.gender,
    catch_phrase: data.['catch-phrase']
  }
  console.log(villagerInfo)
  //TODO: Create a new villager, place it in the respective villagercolumn
}

export default class GetVillagerNames extends React.Component {
    state = {
      loading:true,
    }

    async componentDidMount() {
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
      <SelectSearch options={options} search="true" placeholder="Select villager" onChange={onChange} />
      </div>
      )
    };
  };

  /*NOW FIND OUT HOW TO GET THE VALUE LMAO*/
