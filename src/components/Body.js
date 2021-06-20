import { Component } from "react";
import Countdown from "./Options/Countdown";
import Timer_  from "./Options/Timer_";
import SetIntervals  from "./Options/SetIntervals";

import '../style/body.css'

export default class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
          menuBars: ["CountDown", "Timer", "SetIntervals"], // props.menuBars
          selectedOption: "Countdown", //props.startingMenu,
          defaultOption: "Countdown" //props.statingOption
        };
    }


    selectOption = (selectedComponent) => {
        
        this.setState({
          selectedOption: this.state.menuBars.some(
            (optName) => optName === selectedComponent
          )
            ? selectedComponent
            : this.state.defaultOption,
        });

    }

    render(){
        return (
          <div className="bodycontainer row">
            <div className="col-md-3 leftNav">
              <ul className="optList">
                {this.state.menuBars.map((el) => (
                  <li
                    onClick={(evt) => {
                      this.selectOption(el);
                    }}
                  >
                    <label className="lead" name={el}>
                      {el}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content col-md-9">
                {this.state.selectedOption === "CountDown" ? <Countdown/> : ""}
                {this.state.selectedOption === "Timer" ? <Timer_/> : ""}
                {this.state.selectedOption === "SetIntervals" ? <SetIntervals/> : ""}
            </div>
          </div>
        );
    }

}