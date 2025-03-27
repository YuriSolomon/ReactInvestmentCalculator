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

  return (
    <div>
      <Header />
      <Inputs onChange={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </div>
  )
}

export default App
