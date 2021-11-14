import React, { useState } from 'react';

const Blocks_Menu = (props) => {

  // function handleBlocks(event){
  //   props.setBlocks(event.target.value)
  //   }

    return (

      <div className="option_menu">
        <span>Number of Blocks</span>
            <select className="form-select" onChange={props.handleBlocks}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
      </div>
    )
}

export default Blocks_Menu;
