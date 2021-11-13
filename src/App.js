import './index.css'
import { useState } from 'react';
import Field_2 from './components/Field_2';
import BoopButton from './components/Sound2';
function App() {

//##############################################################################
// Creating unique ID for Fields
//##############################################################################
let id = 0;
function idProp() {id = id+1; return (id)};

//##############################################################################
//Create Bombs
//##############################################################################
//let bombs_array = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const [bombs, setBombsArray] = useState(() => {return Array.from({length: 40}, () => Math.floor(Math.random() * 40))});
console.log(bombs);

//##############################################################################
//Clicked Array
//##############################################################################
const [clickedArray, setClickedArray] = useState([]);

//##############################################################################
//Create Field Array
//##############################################################################
let blocks =  "100";
let field_array = [];
for (let step = 0; step < blocks; step++) {
  field_array.push(<Field_2
    blocks={blocks}
    id={idProp()}
    clickedArray={clickedArray}
    setClickedArray={setClickedArray}
    bombs={bombs}
    />);
};


return (

  <div style={{textAlign:'center', color:'white'}} id="all_JSX_________________________________________________________">
    <h1 style={{fontSize: 100}} >Crasher Game</h1>

      <div className="row justify-content-center" style={{marginLeft:"50px", marginRight:"50px"}}>
       {field_array}
       <p>_</p>
       <h4>Current Score</h4>
       <p>0</p>
       <h3>{clickedArray}</h3>

   </div>
  </div>
 );
}
export default App;
