import './index.css'
import { useState, useEffect } from 'react';
import Field_2 from './components/Field_2';

import Blocks_Menu from './components/Blocks_Menu';
import Bombs_Menu from './components/Bombs_Menu';
import Begin_Button from './components/Begin_Button';
import Start_Button from './components/Start_Button';
import Restart_Button from './components/Restart_Button';
function App() {


//##############################################################################
// Creating unique ID for Fields
//##############################################################################
let id = 0;
function idProp() {id = id+1; return (id)};

//##############################################################################
//Set Blocks | Bombs
//##############################################################################
let default_blocks = 10;
let default_bombs = [Math.floor(Math.random() * 10+1)];

const [blocks, setBlocks] = useState(default_blocks);
const [bombs, setBombsArray] = useState(default_bombs);
const [start, setStart] = useState(0);

//##############################################################################
//Create Bombs
//##############################################################################
function createBombsArray(bombs_x, blocks_x){
  console.log("createBombsArray: "+ bombs_x);
  console.log("useBlocks: "+ blocks_x);
  if (+bombs_x > +blocks_x) {

    alert("You cannot have more bombs than Blocks");
bombs_x = blocks_x;
let arr = [];
while(arr.length < bombs_x){
    var r = Math.floor(Math.random() * blocks_x) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
 } return arr

  } else {

  let arr = [];
  while(arr.length < bombs_x){
      var r = Math.floor(Math.random() * blocks_x) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
   } return arr}
};


//##############################################################################
//Set Blocks Fun & Bomb Fun
//##############################################################################
function handleBlocks(event){
setBlocks(event.target.value);
console.log("Blocks Menu Activated with: " + event.target.value);
//setBombsArray(createBombsArray(event.target.value));
}

function handleBombs(event2){
console.log("Bombs Menu Activated with: " + event2.target.value);
console.log("blocks with: "+blocks);
setBombsArray(createBombsArray(event2.target.value, blocks));
}

//##############################################################################
//Clicked Array
//##############################################################################
const [clickedArray, setClickedArray] = useState([]);

//##############################################################################
//Start game
//##############################################################################
function startGame() {
setStart(start + 1 );
console.log(start);
  }


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

//##############################################################################
//Testing
//##############################################################################
console.log("Bombs in GAME: " + bombs);
console.log("Blocks in GAME: " + blocks);


return (

  <div style={{textAlign:'center', color:'white'}} id="all_JSX_________________________________________________________">
    <h1 style={{fontSize: 100}}>Crasher Game</h1>

{start===0 && <Start_Button startGame={startGame} />}
{start===1 && <Blocks_Menu setBlocks={setBlocks} blocks={blocks} handleBlocks={handleBlocks} />}
{start===1 && <Bombs_Menu  setBombsArray={setBombsArray} bombs={bombs}  blocks={blocks} handleBombs={handleBombs} />}
{start===1 && <Begin_Button startGame={startGame} />}
{start===2 && <Restart_Button setStart={setStart} setClickedArray={setClickedArray} setBombsArray={setBombsArray} />}
{start===2 &&

      <div className="row justify-content-center" style={{marginLeft:"50px", marginRight:"50px"}}>
       {field_array}

       <h4>Clicks</h4>
       <h3>{clickedArray.length}</h3>
      </div>
      }
  </div>
 );
}
export default App;
