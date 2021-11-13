import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import sound from './glass.mp3';
import broken from './broken.png';
function Field_2 (props) {

//##############################################################################
// Sound
//##############################################################################
const [play] = useSound(sound);

//##############################################################################
// Classname
//##############################################################################
function variable_classname (){
  let class_var ="";
  if (props.clickedArray.includes(props.id)) {
    if (props.bombs.includes(props.id)){  class_var="checkboxExplosion"}
    else class_var="checkboxClicked" }
  else {class_var="checkboxUnchecked"};
return class_var
}

//##############################################################################
// Clicked Array
//##############################################################################
function clickHandler () {

  console.log(props.bombs);
  props.setClickedArray([...props.clickedArray, props.id]);
  console.log(props.id);
  console.log(props.clickedArray);
  play();
  if (props.bombs.includes(props.id)) { console.log("TREFFER")} else  { console.log("NI")} ;

}

//Return JSX
   return (

   <div className="col-sm">
    <div className="checkbox-container">

     <label>
       <input onClick={() => clickHandler()}
              className={variable_classname()}
              type="checkbox"
              name="checkbox"
              value="">
      </input>
     </label>
    </div>
   </div>
    )
 ;}
export default Field_2;
