import './acnhTable.css';
import React, { useState } from 'react'; 
import v from './villager.png';

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
      birthday: data.['birthday-string'],
      species: data.species,
      gender: data.gender,
      catch_phrase: data['catch-phrase']
    }
    console.log(villagerInfo)
    //TODO: Create a new villager, place it in the respective villagercolumn
  }

function Villager(prop)
{
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
function VillagerColumn(prop) 
{
    return(
    <div className='column'> 
        <div className='type'>
            <strong>{prop.personality}</strong>
        </div>
        <div className='list'>
            <Villager name='test' birthday='test' species='test' gender='test' catch_phrase='test' image_url={v}/>
            <Villager name='test2' birthday='test2' species='test2' gender='test2' catch_phrase='test2' image_url={v}/>
        </div>
    </div>
    )
}

export default VillagerColumn;