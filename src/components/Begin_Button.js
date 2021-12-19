const Begin_Button = (props) => {


    return (

      <div className="option_menu">
        <button type="button" onClick={props.startGame} className="btn btn-primary btn-lg">Let's go!</button>
        <p className="summary_text" style={{marginTop: "5px"}}>Blocks: {props.blocks}</p>
        <p className="summary_text">Bombs: {props.bombs.length}</p>
        <p className="summary_text">Shots: {props.shots.length}</p>
      </div>
    )
}

export default Begin_Button;
