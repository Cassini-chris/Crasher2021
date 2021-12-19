const Player_Name = (props) => {

    return (

    <div className="option_menu">
          <form>
            <label>Enter your Game Name:
              <input
                className="form-control"
                placeholder="Your name"
                type="text"
                value={props.playername}
                onChange={props.handleName}
              />
            </label>
          </form>
          </div>
    )
}

export default Player_Name;
