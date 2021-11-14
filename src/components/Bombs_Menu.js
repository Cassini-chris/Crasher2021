import React, { useState } from 'react';

const Bombs_Menu = (props) => {

  // function handleBlocks(event){
  //   props.setBlocks(event.target.value)
  //   }

    return (

      <div className="option_menu">
            <span>Number of Bombs</span>
            <select className="form-select" onChange={props.handleBombs}>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
      </div>
    )
}

export default Bombs_Menu;
