const Start_Button = (props) => {

    return (

      <div className="option_menu">
        <button type="button" onClick={props.startGame} className="btn btn-primary">Start Game</button>
      </div>
    )
}

export default Start_Button;
