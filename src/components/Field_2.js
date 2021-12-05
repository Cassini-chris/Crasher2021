import useSound from 'use-sound';
import sound from './sound/hammer.mp3';
import no from './sound/no.mp3';
import drink from './sound/drink.mp3';
import diamond from './sound/diamond.mp3';
function Field_2 (props) {

//##############################################################################
// Sound
//##############################################################################
const [play] = useSound(sound);
const [play2] = useSound(no);
const [play3] = useSound(drink);
const [play4] = useSound(diamond);
//##############################################################################
// Classname
//##############################################################################
function variable_classname (){
  let class_var ="";
  if (props.clickedArray.includes(props.id)) {
      if (props.bombs.includes(props.id) && props.shots.includes(props.id)) {class_var="checkboxWon"}
      else if (props.bombs.includes(props.id) || props.shots.includes(props.id))
          {if (props.bombs.includes(props.id)){class_var="checkboxExplosion"}
           else {if (props.shots.includes(props.id)){class_var="checkboxShot"}}}

    else class_var="checkboxClicked" }
  else {class_var="checkboxUnchecked"};

  // if (props.bombs.includes(props.id) && props.shots.includes(props.id)) {class_var="checkboxWon"}
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
