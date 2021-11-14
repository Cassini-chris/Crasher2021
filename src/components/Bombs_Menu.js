import React, { useState } from 'react';

const Bombs_Menu = (props) => {

  // function handleBlocks(event){
  //   props.setBlocks(event.target.value)
  //   }

    return (

      <div className="option_menu">
            <label htmlFor="Bombs">Number of Bombs:</label>
            <select name="bombs" onChange={props.handleBombs}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
      </div>
    )
}

export default Bombs_Menu;
