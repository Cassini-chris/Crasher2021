import useSound from 'use-sound';
import sound from './sound/hammer.mp3';
import no from './sound/no.mp3';
function Field_2 (props) {

//##############################################################################
// Sound
//##############################################################################
const [play] = useSound(sound);
const [play2] = useSound(no);
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

  if (props.bombs.includes(props.id)) {  play2(); console.log("TREFFER")} else  {  play(); console.log("NI")} ;

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
