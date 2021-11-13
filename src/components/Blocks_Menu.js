import React, { useState } from 'react';

const Blocks_Menu = (props) => {


  function handleBlocks(event){
    props.setBlocks(event.target.value)
    }

    return (

      <div className="option_menu">
            <label for="Blocks">Number of Blocks:</label>
            <select name="blocks" id="blcoks" onChange={handleBlocks}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
      </div>

    )
}

export default Blocks_Menu;
