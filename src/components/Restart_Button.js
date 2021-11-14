const Restart_Button = (props) => {

function clickHanderRestart()
{
props.setStart(1);
props.setClickedArray([]);
props.setBombsArray([Math.floor(Math.random() * 10+1)]);
}


    return (

      <div className="option_menu">
        <button type="button" onClick={clickHanderRestart}  className="btn btn-dark">Restart</button>
      </div>
    )
}

export default Restart_Button;
