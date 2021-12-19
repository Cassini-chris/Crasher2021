const Restart_Button = (props) => {

function clickHanderRestart()
{
props.setStart(0);
props.setClickedArray([]);

}


    return (

      <div className="option_menu restart">
        <button type="button" onClick={clickHanderRestart}  className="btn btn-dark">Restart</button>

      </div>
    )
}

export default Restart_Button;
