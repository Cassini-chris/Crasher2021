import './index.css'
import { useState, useEffect } from 'react';
import Field_2 from './components/Field_2';
import BoopButton from './components/Sound2';
import Blocks_Menu from './components/Blocks_Menu';
import Bombs_Menu from './components/Bombs_Menu';
function App() {

let default_blocks = 10;
let default_bombs = 1;

//##############################################################################
// Creating unique ID for Fields
//##############################################################################
let id = 0;
function idProp() {id = id+1; return (id)};

//##############################################################################
//Set Blocks
//##############################################################################
const [blocks, setBlocks] = useState(10);


//##############################################################################
//Create Bombs
//##############################################################################
function createBombsArray(bombs){
  console.log("createBombsArray: "+ bombs);

  let arr = [];
  while(arr.length < bombs){
      var r = Math.floor(Math.random() * 100) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
   } return arr
};

const [bombs, setBombsArray] = useState(() => createBombsArray());
console.log("Bombs: " + bombs);


//##############################################################################
//Set Blocks Fun & Bomb Fun
//##############################################################################

function handleBlocks(event){
setBlocks(event.target.value);
console.log("Blocks Menu Activated with: "+event.target.value);
//setBombsArray(createBombsArray(event.target.value));
}


function handleBombs(event){
  console.log("Bombs Menu Activated with: "+event.target.value);
setBombsArray(createBombsArray(event.target.value));
}

//##############################################################################
//Clicked Array
//##############################################################################
const [clickedArray, setClickedArray] = useState([]);


//##############################################################################
//Create Field Array
//##############################################################################
let field_array = [];
for (let step = 0; step < blocks; step++) {
  field_array.push(<Field_2
    blocks={blocks}
    id={idProp()}
    clickedArray={clickedArray}
    setClickedArray={setClickedArray}
    bombs={bombs}
    key={id}

    />);
};


return (

  <div style={{textAlign:'center', color:'white'}} id="all_JSX_________________________________________________________">
    <h1 style={{fontSize: 100}} >Crasher Game</h1>

<Blocks_Menu setBlocks={setBlocks} blocks={blocks} handleBlocks={handleBlocks} />
<Bombs_Menu setBombsArray={setBombsArray} bombs={bombs}  blocks={blocks}    handleBombs={handleBombs} />

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
