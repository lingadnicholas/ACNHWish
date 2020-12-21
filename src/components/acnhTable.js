import './acnhTable.css';
import React, { useState } from 'react'; 
import villager from './villager.png';

function VillagerColumn() 
{
    return(
    <div className='column'> 
        <div className='type'>
            <strong>Cranky</strong>
        </div>
        <div className='villager'>
            <div>
                <strong>Cyrano</strong>
            </div>
            <div>            
                <img className='icon' alt='Cyrano icon' src ={villager}></img>
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
    </div>
    )
}

export default VillagerColumn;