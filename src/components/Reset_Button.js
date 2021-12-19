const Reset_Button = (props) => {

    return (

      <div className="option_menu">
        <button type="button" onClick={props.resetGame} className="btn btn-dark  btn-sm">Reset Database</button>
      </div>
    )
}

export default Reset_Button;
