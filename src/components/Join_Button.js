const Join_Button = (props) => {

    return (

      <div className="option_menu">
        <button type="button" onClick={props.joinGame} className="btn btn-success">Join Game</button>
      </div>
    )
}

export default Join_Button;
