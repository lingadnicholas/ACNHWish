import './acnhTable.css';
import React, { useState } from 'react'; 
import { render } from '@testing-library/react';

/*When there is a valid value from the dropdown list, we want to:
fetch the JSON object with that ID from the ACNH API
Get all the data (Personality, Name, Picture, Birthday, Species, Gender, Catchphrase)
Create a new Villager, place it in the respective VillagerColumn*/
export async function GetVillager(value) {
    const url = 'https://acnhapi.com/v1/villagers/'
    const response = await fetch(url + value);
    const data = await response.json();
    const villagerInfo = {
      key: value,
      name: data.name['name-USen'],
      personality: data.personality,
      image_url: data.image_uri,
      birthday: data['birthday-string'],
      species: data.species,
      gender: data.gender,
      catch_phrase: data['catch-phrase']
    }

    //Don't add duplicates
    if (!ids.includes(villagerInfo.key))
    {
        villagers.push(villagerInfo)
        ids.push(villagerInfo.key)
    }
  }

function Villager(prop)
{
    //Key = Villager ID 
    return(
        <div className='villager'>
            <div>
                <strong>{prop.name}</strong>
            </div>
            <div>            
                <img className='icon' alt={prop.name + 'icon'} src ={prop.image_url}></img>
            </div>
            <div>
                <em>Birthday: </em>{prop.birthday}
            </div>
            <div>
                <em>Species: </em>{prop.species}
            </div>
            <div>
                <em>Gender: </em>{prop.gender}
            </div>
            <div>
                <em>Catchphrase: </em>{'"' + prop.catch_phrase + '"'}
            </div>
        </div>
    )
}

var villagers = []; 
var ids = []; 

export default class GetVillagerNames extends React.Component
{
    constructor(props) {
        super(props);
        this.key = this.props.personality; 

    }
    state = { 
        loading: true,
        list: []
    }
    intervalID;
    added = []; 

    /*Called by checkVillagers, adds villagers to our state, and forces a rerender*/
    addToList = (villagerInfo) => {
        this.added.push(villagerInfo.key)
        this.setState( {list: [...this.state.list, <Villager
                        key={villagerInfo.key}
                        name={villagerInfo.name}
                        image_url={villagerInfo.image_url}
                        birthday={villagerInfo.birthday}
                        species={villagerInfo.species}
                        gender={villagerInfo.gender}
                        catch_phrase={villagerInfo.catch_phrase}
                        />] } )
        
    }

    /*Checks the villagers array to see if there are any new additions
    of villagers with this specific personality type!*/
    checkVillagers = () => {
        if (villagers.length === 0)
            return; 
        for (var i = 0; i < villagers.length; i++)
        {
            if (this.props.personality === villagers[i].personality 
                && !this.added.includes(villagers[i].key))
                {
                    this.addToList(villagers[i])
                }
        }
    }

    
    /*Check every second to add villager to wishlist!*/
    componentDidMount() {
        this.checkVillagers()
        this.intervalID = setInterval(this.checkVillagers.bind(this), 500)
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render()
    {
    return(
    <div className='column'> 
        <div className='type'>
            <strong>{this.props.personality}</strong>
        </div>
        <div className='list'>
            {this.state.list}
        </div>
    </div>
    )
    }
}

