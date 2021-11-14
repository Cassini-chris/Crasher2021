const Begin_Button = (props) => {

    return (

      <div className="option_menu">
        <button type="button" onClick={props.startGame} className="btn btn-primary">Let's go!</button>
      </div>
    )
}

export default Begin_Button;
