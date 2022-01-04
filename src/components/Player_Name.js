const Player_Name = (props) => {

// let status_checkbox ="checked";
//   // if (props.playAlone==false){status_checkbox="checked"} else {status_checkbox="checked"}
//   // if (props.playAlone==true) {status_checkbox="checked"} else {status_checkbox="checked"}
//   console.log(status_checkbox+ "============================================")
  console.log(props.playAlone + "============================================")
    return (

    <div className="option_menu">
    <div className="row">
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

          <div>
            <label>
              <input type="checkbox"
              defaultChecked={props.playAlone}
              onChange={props.handlePlayAlone}



               />
              Play alone
            </label>
          </div>
       </div>
      </div>
    )
}

export default Player_Name;
