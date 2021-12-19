const Refresh_Button = (props) => {

    return (

      <div className="option_menu">
        <button type="button" onClick={props.refreshGame} className="btn btn-success">Refresh</button>
      </div>
    )
}

export default Refresh_Button;
