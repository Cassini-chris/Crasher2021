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
import Refresh_Button from './components/Refresh_Button';
import Player_Name from './components/Player_Name';
import Back_Button from './components/Back_Button';

import useSound from 'use-sound';
import start_game_sound from './components/sound/start_game.mp3';
import power_up_sound from './components/sound/power_up.mp3'
import back_sound from './components/sound/back.mp3'
import refresh_sound from './components/sound/refresh.mp3'


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


 //document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/3.jpg')";



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
let live_game_state_array_game_id = [];
let live_game_state_array_playername = [];
//console.log(game_state);
//console.log("GAMESTATE: "+game_state.map(block=> (live_game_state_array.push(block.state))));
game_state.map(block=> (live_game_state_array.push(block.state)));
game_state.map(block=> (live_game_state_array_ids.push(block.id)));
game_state.map(block=> (live_game_state_array_bombs.push(block.bombs)));
game_state.map(block=> (live_game_state_array_shots.push(block.shots)));
game_state.map(block=> (live_game_state_array_block_x.push(block.blocks)));
game_state.map(block=> (live_game_state_array_game_id.push(block.id)));
game_state.map(block=> (live_game_state_array_playername.push(block.playername)));
console.log("Bombs in database: "+live_game_state_array_bombs[101]);
console.log("Shots in database: "+live_game_state_array_shots[102]);
console.log("Blocks in database: "+live_game_state_array_block_x[100]);
console.log("Game ID: "+live_game_state_array_game_id[103]);
console.log("Last Clicker: "+live_game_state_array_playername[104]);
console.log("==================================================================");

let default_blocks = 10;
let default_bombs = [Math.floor(Math.random() * 10+1)];
let default_shots =  [Math.floor(Math.random() * 10+1)];

let default_blocks_db = live_game_state_array_block_x[100];
let default_bombs_db = live_game_state_array_bombs[101];
let default_shots_db = live_game_state_array_shots[102];
let default_game_id_db = live_game_state_array_game_id[103];
let default_playername_db = live_game_state_array_playername[104];

console.log(default_blocks_db);
console.log(default_bombs_db);
console.log(default_shots_db);
console.log(default_game_id_db);
console.log(default_playername_db);

const [blocks, setBlocks] = useState();
const [bombs, setBombsArray] = useState();
const [shots, setShotsArray] = useState();
const [game_id, setGameIDArray] = useState();
const [start, setStart] = useState(0);
const [playername, setPlayerName] = useState("");

const [play_start_game] = useSound(start_game_sound);
const [sound_power_up_sound] = useSound(power_up_sound);
const [sound_back_sound] = useSound(back_sound);
const [sound_refresh_sound] = useSound(refresh_sound);

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

function handleName(event4){
console.log("Name Activated with: " + event4.target.value);
setPlayerName(event4.target.value);
}

function handleBack(){
setStart(start - 1 );
sound_back_sound();
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

if (start!==4){sound_power_up_sound();}

//Setting bombs array in FIRESTORE
if (start===4){
  resetGame();



  setDoc(doc(db, "game_state", "bombs"), {bombs: bombs});
  setDoc(doc(db, "game_state", "shots"), {shots: shots});
  setDoc(doc(db, "game_state", "block_x"), {blocks: blocks});

  let timestamp_for_game_id=Date.now();
  setDoc(doc(db, "game_state", "xyz_game_id"), {id:timestamp_for_game_id});
  console.log("TIME---------------"+timestamp_for_game_id.toString());

  play_start_game();

  if (timestamp_for_game_id % 10 == 0)
   {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/2.jpg')";};
   if (timestamp_for_game_id % 10 == 1)
    {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/2.jpg')";};
    if (timestamp_for_game_id % 10 == 2)
     {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/2.jpg')";};
     if (timestamp_for_game_id % 10 == 3)
      {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/2.jpg')";};
      if (timestamp_for_game_id % 10 == 4)
       {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/3.jpg')";};
       if (timestamp_for_game_id % 10 == 5)
        {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/3.jpg')";};
        if (timestamp_for_game_id % 10 == 6)
         {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/3.jpg')";};
         if (timestamp_for_game_id % 10 == 7)
          {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/9.jpg')";};
          if (timestamp_for_game_id % 10 == 8)
           {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/9.jpg')";};
           if (timestamp_for_game_id % 10 == 9)
            {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/9.jpg')";};
};
}



//##############################################################################
//Join game
//##############################################################################
function joinGame() {
setStart(start + 5 );
console.log("join");

play_start_game();

//Setting bombs array in FIRESTORE
setBlocks(default_blocks_db);
setBombsArray(default_bombs_db);
setShotsArray(default_shots_db);
setGameIDArray(default_game_id_db);

let timestamp_for_game_id=Date.now();
setDoc(doc(db, "game_state", "xyz_game_id"), {id:timestamp_for_game_id});
console.log("TIME---------------"+timestamp_for_game_id.toString());

if (default_game_id_db % 10 == 0)
 {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/2.jpg')";};
 if (default_game_id_db % 10 == 1)
  {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/2.jpg')";};
  if (default_game_id_db % 10 == 2)
   {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/2.jpg')";};
   if (default_game_id_db % 10 == 3)
    {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/2.jpg')";};
    if (default_game_id_db % 10 == 4)
     {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/3.jpg')";};
     if (default_game_id_db % 10 == 5)
      {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/3.jpg')";};
      if (default_game_id_db % 10 == 6)
       {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/3.jpg')";};
       if (default_game_id_db % 10 == 7)
        {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/9.jpg')";};
        if (default_game_id_db % 10 == 8)
         {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/9.jpg')";};
         if (default_game_id_db % 10 == 9)
          {document.body.style.backgroundImage="url('https://storage.googleapis.com/epicml_public_bucket/Crasher_game_background/9.jpg')";};

}

//##############################################################################
//Join game
//##############################################################################
function refreshGame() {
setStart(5);
console.log("refresh");

//Setting bombs array in FIRESTORE
setBlocks(default_blocks_db);
setBombsArray(default_bombs_db);
setShotsArray(default_shots_db);
setGameIDArray(default_game_id_db);
sound_refresh_sound();
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
    playername={playername}

    setBombsArray={setBombsArray}
    setShotsArray={setShotsArray}
    setBlocks={setBlocks}

    key={id}
    live_game_state_array={live_game_state_array}
    live_game_state_array_ids={live_game_state_array_ids}

    />);
};




//##############################################################################
//Testing
//##############################################################################
// if (live_game_state_array_block_x[100] =! blocks) {joinGame()};
console.log("Bomb(s) in GAME: " + bombs);
console.log("Shot(s) in GAME: " + shots);
console.log("Blocks in GAME: " + blocks);
return (

  <div style={{textAlign:'center', color:'white'}} id="all_JSX_________________________________________________________">
    <h1 className="heading_top">Crasher Game</h1>

{start===0 && <Player_Name  playername={playername}  setPlayerName={setPlayerName} handleName={handleName}  />}
{start===0 && <Start_Button startGame={startGame} />}
{start===0 && <Join_Button setShotsArray={setShotsArray}  setBombsArray={setBombsArray} joinGame={joinGame}/>}
{start===0 && <Reset_Button resetGame={resetGame}  setShotsArray={setShotsArray}  setBombsArray={setBombsArray} />}


{start===1 && <Blocks_Menu setBlocks={setBlocks} blocks={blocks} handleBlocks={handleBlocks} startGame={startGame}  />}
{start===1 && <Back_Button handleBack={handleBack} />}

{start===2 && <Bombs_Menu  setBombsArray={setBombsArray} bombs={bombs}  blocks={blocks} handleBombs={handleBombs} startGame={startGame} />}
{start===2 && <Back_Button handleBack={handleBack} />}

{start===3 && <Shots_Menu  setBombsArray={setBombsArray} blocks={blocks} bombs={bombs} handleShots={handleShots} setShotsArray={setShotsArray} shots={shots} startGame={startGame}/>}
{start===3 && <Back_Button handleBack={handleBack} />}

{start===4 && <Begin_Button startGame={startGame}  resetGame={resetGame} blocks={blocks} bombs={bombs}  shots={shots}/>}
{start===4 && <Back_Button handleBack={handleBack} />}

{start===5 && <p className="game_id">Game-ID: {default_game_id_db}</p> }
{start===5 && <Restart_Button setStart={setStart} setClickedArray={setClickedArray} setBombsArray={setBombsArray} />}
{start===5 && <Refresh_Button setShotsArray={setShotsArray}  setBombsArray={setBombsArray} refreshGame={refreshGame}/>}


{start===5 &&



      <div className="row justify-content-center">

       {field_array}

       <h5>-----</h5>
       <h4>Your Clicks: {clickedArray.length}</h4>
       <h4>Last Turn: {default_playername_db}</h4>

      </div>
      }
  </div>
 );
}
export default App;
