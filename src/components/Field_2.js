import useSound from 'use-sound';
import sound from './sound/hammer.mp3';
import no from './sound/no.mp3';
import drink from './sound/drink.mp3';
import diamond from './sound/diamond.mp3';
import {onSnapshot, doc, collection, addDoc, setDoc} from "firebase/firestore";
import db from "./../firebase"

function Field_2 (props) {

//##############################################################################
// Sound
//##############################################################################
const [play] = useSound(sound);
const [play2] = useSound(no);
const [play3] = useSound(drink);
const [play4] = useSound(diamond);
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

//  console.log("State:"+props.id +" "+ props.live_game_state_array_ids[props.id -1])
//
//   else {
//
//
//
//   if (props.clickedArray.includes(props.id)) {
//       if (props.bombs.includes(props.id) && props.shots.includes(props.id)) {class_var="checkboxWon"}
//       else if (props.bombs.includes(props.id) || props.shots.includes(props.id))
//           {if (props.bombs.includes(props.id)){class_var="checkboxExplosion"}
//            else {if (props.shots.includes(props.id)){class_var="checkboxShot"}}}
//
//     else class_var="checkboxClicked" }
//   else {class_var="checkboxUnchecked"};
//
//
//
//
// };

  // if (props.bombs.includes(props.id) && props.shots.includes(props.id)) {class_var="checkboxWon"}
return class_var
}

//##############################################################################
// Clicked Array
//##############################################################################
function clickHandler () {

let document_block = props.id+10000;
let current_document = "block_"+document_block;
// Add a new document in collection "cities"
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
              key={props.id}>
      </input>
     </label>
    </div>
   </div>
    )
 ;}
export default Field_2;
