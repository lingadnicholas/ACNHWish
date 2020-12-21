import './acnhTable.css';
import React, { useState } from 'react'; 
import v from './villager.png';

function Villager(prop)
{
    return(
        <div className='villager'>
            <div>
                <strong>Cyrano</strong>
            </div>
            <div>            
                <img className='icon' alt='Cyrano icon' src ={v}></img>
            </div>
            <div>
                <em>Birthday:</em> March 9th
            </div>
            <div>
                <em>Species:</em> Anteater
            </div>
            <div>
                <em>Gender:</em> Male
            </div>
            <div>
                <em>Catchphrase:</em> "ah-CHOO" 
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
            <div><Villager /></div>
            <div><Villager /></div>
            <div><Villager /></div>
        </div>
    </div>
    )
}

export default VillagerColumn;