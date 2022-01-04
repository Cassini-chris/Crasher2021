import useSound from 'use-sound';
import sound from './sound/hammer.mp3';
import no from './sound/no.mp3';
import drink from './sound/drink.mp3';
import diamond from './sound/diamond.mp3';
import complete_sound from './sound/complete.mp3';


import {onSnapshot, doc, collection, addDoc, setDoc} from "firebase/firestore";
import db from "./../firebase"
import { useState, useEffect } from 'react';
function Field_2 (props) {


let disabled=false;
//##############################################################################
// Sound
//##############################################################################
const [play] = useSound(sound);
const [play2] = useSound(no);
const [play3] = useSound(drink);
const [play4] = useSound(diamond);
const [sound_complete_sound] = useSound(complete_sound);

//##############################################################################
// Game_state
//##############################################################################
function variable_classname_based_on_firestore (){

//console.log("Block "+ props.id +" ID State: "+props.live_game_state_array[props.id -1]);
}

variable_classname_based_on_firestore ();


//##############################################################################
// Classname
//##############################################################################
function variable_classname (){
  let class_var ="";

  //Firestore state
  if (props.live_game_state_array[props.id -1] == "unchecked"){class_var="checkboxUnchecked"}
  if (props.live_game_state_array[props.id -1] == "clicked"){class_var="checkboxClicked"}
  if (props.bombs.includes(props.live_game_state_array_ids[props.id -1])){class_var="checkboxExplosion"}
  if (props.shots.includes(props.live_game_state_array_ids[props.id -1])){class_var="checkboxShot"}
  if (props.bombs.includes(props.live_game_state_array_ids[props.id -1]) && props.shots.includes(props.live_game_state_array_ids[props.id -1])) {class_var="checkboxWon"}


  if (props.live_game_state_array[props.id -1] == "clicked") {disabled=true} else {disabled=false}

  if (props.playAlone==true)  {disabled=false} else {
  if (props.playername ==props.default_playername_db ) {disabled=true} else {disabled=false}}
  if (props.playername =="Admin" ) {disabled=false}
    if (props.default_game_clicks_db =="0" ) {disabled=false}





return class_var
}

//##############################################################################
// Clicked Array
//##############################################################################
function clickHandler () {


setDoc(doc(db, "game_state", "zzzz_game_clicks"), {clicks: props.game_clicks +1, ever_clicks: props.ever_clicks +1});




//Play Sound if all Blocks are Clicked!
if ((props.game_clicks+1)==props.blocks){setTimeout(() => { sound_complete_sound(); }, 750)};


let document_block = props.id+10000;
let current_document = "block_"+document_block;


setDoc(doc(db, "game_state", current_document), {
  id: props.id,
  state: "clicked",
});

  console.log(props.bombs);
  props.setClickedArray([...props.clickedArray, props.id]);
  console.log(props.id);
  console.log(props.clickedArray);


  if (props.shots.includes(props.id) && props.bombs.includes(props.id)) {play4(); console.log("DIAMOND")}
  else  {
  if (props.bombs.includes(props.id)) {  play2(); console.log("TREFFER")}
  else
  {
  if (props.shots.includes(props.id)) {  play3(); console.log("TREFFER SHOT")}
  else
  { play(); console.log("Kein Bombe")}}};

setDoc(doc(db, "game_state", "zzz_playername"), {playername: props.playername});

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
              value=""
              disabled={disabled}
              key={props.id}>


      </input>
     </label>
    </div>
   </div>
    )
 ;}
export default Field_2;
