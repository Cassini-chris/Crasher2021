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
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>

            </select>
      </div>
    )
}

export default Blocks_Menu;
