import './index.css'
import { useState, useEffect } from 'react';
import Field_2 from './components/Field_2';

import Blocks_Menu from './components/Blocks_Menu';
import Bombs_Menu from './components/Bombs_Menu';
import Shots_Menu from './components/Shots_Menu';
import Begin_Button from './components/Begin_Button';
import Start_Button from './components/Start_Button';
import Restart_Button from './components/Restart_Button';
import Reset_Button from './components/Reset_Button';
import Join_Button from './components/Join_Button';

import resetGameFunction from "./components/Reset_Function"
import db from "./firebase"


import {onSnapshot, doc, collection, addDoc, setDoc} from "firebase/firestore";

function App() {



//##############################################################################
// Getting Firestore Data
//##############################################################################
useEffect(() =>
onSnapshot(collection(db, "game_state"), (snapshot) => {
    setGame_State(snapshot.docs.map(doc=> doc.data()));

   }
  ),
 [],
);





//##############################################################################
// Creating unique ID for Fields
//##############################################################################
let id = 0;
function idProp() {id = id+1; return (id)};

//##############################################################################
//Set Blocks | Bombs
//#############################################################################
const [game_state, setGame_State] = useState([]);
let live_game_state_array = [];
let live_game_state_array_ids = [];
let live_game_state_array_bombs = [];
let live_game_state_array_shots = [];
let live_game_state_array_block_x = [];
//console.log(game_state);
//console.log("GAMESTATE: "+game_state.map(block=> (live_game_state_array.push(block.state))));
game_state.map(block=> (live_game_state_array.push(block.state)));
game_state.map(block=> (live_game_state_array_ids.push(block.id)));
game_state.map(block=> (live_game_state_array_bombs.push(block.bombs)));
game_state.map(block=> (live_game_state_array_shots.push(block.shots)));
game_state.map(block=> (live_game_state_array_block_x.push(block.blocks)));
console.log("Bombs in database: "+live_game_state_array_bombs[101]);
console.log("Shots in database: "+live_game_state_array_shots[102]);
console.log("Blocks in database: "+live_game_state_array_block_x[100]);
console.log("==================================================================");

let default_blocks = 10;
let default_bombs = [Math.floor(Math.random() * 10+1)];
let default_shots =  [Math.floor(Math.random() * 10+1)];

let default_blocks_db = live_game_state_array_block_x[100];
let default_bombs_db = live_game_state_array_bombs[101];
let default_shots_db = live_game_state_array_shots[102];

console.log(default_blocks_db);
console.log(default_bombs_db);
console.log(default_shots_db);

const [blocks, setBlocks] = useState();
const [bombs, setBombsArray] = useState();
const [shots, setShotsArray] = useState();
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

  }
   else {

  let arr = [];
  while(arr.length < bombs_x){
      var r = Math.floor(Math.random() * blocks_x) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
   }
   return arr}
};

//##############################################################################
//Create Shots
//##############################################################################
function createShotsArray(shots_x, blocks_x){
  console.log("createBombsArray: "+ shots_x);
  console.log("useBlocks: "+ blocks_x);
  if (+shots_x > +blocks_x) {

    alert("You cannot have more bombs than Blocks");
shots_x = blocks_x;
let shot_arr = [];
while(shot_arr.length < shots_x){
    var shot_r = Math.floor(Math.random() * blocks_x) + 1;
    if(shot_arr.indexOf(shot_r) === -1) shot_arr.push(shot_r);
 } return shot_arr

  }
   else {

  let shot_arr = [];
  while(shot_arr.length < shots_x){
      var shot_r = Math.floor(Math.random() * blocks_x) + 1;
      if(shot_arr.indexOf(shot_r) === -1) shot_arr.push(shot_r);
   } return shot_arr}
};



//##############################################################################
//Set Blocks Fun & Bomb Fun
//##############################################################################
function handleBlocks(event){
setBlocks(event.target.value);
console.log("Blocks Menu Activated with: " + event.target.value);
startGame();
//setBombsArray(createBombsArray(event.target.value));
}

function handleBombs(event2){
console.log("Bombs Menu Activated with: " + event2.target.value);
console.log("blocks with: "+blocks);
setBombsArray(createBombsArray(event2.target.value, blocks));
startGame();
}

function handleShots(event3){
console.log("Shots Menu Activated with: " + event3.target.value);
console.log("blocks with: "+blocks);
setShotsArray(createShotsArray(event3.target.value, blocks));
startGame();
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

//Setting bombs array in FIRESTORE
if (start===4){
  resetGame();
  setDoc(doc(db, "game_state", "bombs"), {bombs: bombs});
  setDoc(doc(db, "game_state", "shots"), {shots: shots});
  setDoc(doc(db, "game_state", "block_x"), {blocks: blocks});
  };


}



//##############################################################################
//Join game
//##############################################################################
function joinGame() {
setStart(start + 5 );
console.log("join");

//Setting bombs array in FIRESTORE
setBlocks(default_blocks_db);
setBombsArray(default_bombs_db);
setShotsArray(default_shots_db);

}

//##############################################################################
//Reset game
//##############################################################################
function resetGame(){
resetGameFunction()};


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
    shots={shots}
    key={id}
    live_game_state_array={live_game_state_array}
    live_game_state_array_ids={live_game_state_array_ids}

    />);
};




//##############################################################################
//Testing
//##############################################################################
console.log("Bomb(s) in GAME: " + bombs);
console.log("Shot(s) in GAME: " + shots);
console.log("Blocks in GAME: " + blocks);
return (

  <div style={{textAlign:'center', color:'white'}} id="all_JSX_________________________________________________________">
    <h1 className="heading_top">Crasher Game</h1>

{start===0 && <Start_Button startGame={startGame} />}
{start===0 && <Join_Button setShotsArray={setShotsArray}  setBombsArray={setBombsArray} joinGame={joinGame}/>}
{start===0 && <Reset_Button resetGame={resetGame}  setShotsArray={setShotsArray}  setBombsArray={setBombsArray} />}


{start===1 && <Blocks_Menu setBlocks={setBlocks} blocks={blocks} handleBlocks={handleBlocks} startGame={startGame}  />}
{start===2 && <Bombs_Menu  setBombsArray={setBombsArray} bombs={bombs}  blocks={blocks} handleBombs={handleBombs} startGame={startGame} />}
{start===3 && <Shots_Menu  setBombsArray={setBombsArray} blocks={blocks} handleShots={handleShots} setShotsArray={setShotsArray} shots={shots} startGame={startGame}/>}
{start===4 && <Begin_Button startGame={startGame}  resetGame={resetGame} />}
{start===5 && <Restart_Button setStart={setStart} setClickedArray={setClickedArray} setBombsArray={setBombsArray} />}
{start===5 &&



      <div className="row justify-content-center">
       {field_array}

       <h4>Clicks</h4>
       <h3>{clickedArray.length}</h3>
      </div>
      }
  </div>
 );
}
export default App;
