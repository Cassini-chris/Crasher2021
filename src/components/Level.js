import Field from './Field.js'
import React from "react";


function Level (props) {

  //Autoincrement Value of Fields
  let x = 0;
  function valueProp() {x = x+1; return (x)};

  //Create Field Array
  let field_array = [];
  for (let step = 0; step < props.blocks; step++) {
    field_array.push(<Field
      key={step}
      blocks={props.blocks}
      level={props.level}
      value={valueProp()}
      c_level={props.c_level}
      setFieldState={props.setFieldState}
      setCurrentLevel={props.setCurrentLevel}
      setC_level={props.setC_level}
      setExplosionState={props.setExplosionState}/>);

  };

  return (
     <div className="container {props.level}-level" >
       <div className="row justify-content-center">
       {(props.level==props.c_level) &&  <h3 style={{color:'white'}}>Level {props.level}</h3>}
        {field_array}


       </div>
     </div>
    )
 ;}

export default Level;
