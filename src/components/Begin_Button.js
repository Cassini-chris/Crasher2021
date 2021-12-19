const Begin_Button = (props) => {


    return (

      <div className="option_menu">
      <h3 className="summary_text" style={{marginTop: "5px"}}>Game stats</h3>
      <p className="summary_text" style={{marginTop: "5px"}}>Blocks: {props.blocks}</p>
      <p className="summary_text">Bombs: {props.bombs.length}</p>
      <p className="summary_text">Shots: {props.shots.length}</p>
        <button type="button" style={{marginTop: "15px"}} onClick={props.startGame} className="btn btn-primary btn-lg">Let's go!</button>

      </div>
    )
}

export default Begin_Button;
