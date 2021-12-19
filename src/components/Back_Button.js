const Back_Button = (props) => {

    return (

      <div className="option_menu">
        <button type="button" onClick={props.handleBack} className="btn btn-dark">go Back!</button>

      </div>
    )
}

export default Back_Button;
