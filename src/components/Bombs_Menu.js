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
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>

            </select>
      </div>
    )
}

export default Bombs_Menu;
