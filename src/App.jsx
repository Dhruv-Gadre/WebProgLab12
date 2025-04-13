import React from "react";
import Q1_1 from "./components/Q1_1.jsx";
import Q1_2 from "./components/Q1_2.jsx";
import Q2 from "./components/Q2.jsx";
import Q3 from "./components/Q3.jsx";
import Q4 from "./components/Q4.jsx";
import Greeting from "./components/Q5.jsx"
import TemperatureConverter from "./components/faaltu.jsx";
import CurrentDay from "./components/Q6.jsx";
import PrimeChecker from "./components/Q7.jsx";
import StringReverser from "./components/Q9.jsx";
import RandomNumberGenerator from "./components/Q10.jsx";
import LeapYearChecker from "./components/Q11.jsx";





class UserGreeting extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.firstName} {this.props.lastName}!</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Q1_1/>
      <Q1_2/>
      <Q2/>
      <Q3/>
      <Q4 />
      <Greeting isMorning={true}/>
      <CurrentDay />
      <PrimeChecker number={17} />
      <TemperatureConverter />
      <StringReverser text={"Racecar"} />
      <RandomNumberGenerator />
      <LeapYearChecker year={2024}/>
      <UserGreeting firstName="Dhruv" lastName="Gadre" />
    </div>

  );
}

export default App;