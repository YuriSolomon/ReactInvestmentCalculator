import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";

import { useState } from "react";

const initialInputs = {
  initialInvestment: 5000,
  annualInvestment: 600,
  expectedReturn: 6,
  duration: 10
}
function App() {
  const [userInput, setUserInput] = useState(initialInputs);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    }))
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <div>
      <Header />
      <Inputs onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration grater than 0</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </div>
  )
}

export default App
