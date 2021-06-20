import Nav  from "./components/Nav"
import Foot  from "./components/Footer"
import Body from './components/Body'
const { Component } = require("react");


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>

          <Body/>
          

          {/* <Foot/> */}
      </div>
    );
  }
}

export default App;
