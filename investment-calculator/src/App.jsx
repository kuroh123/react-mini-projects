import { useState } from "react";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

const INITIAL_INPUTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInputs, setUserInputs] = useState(INITIAL_INPUTS);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  }

  return (
    <>
      <UserInput onInputChange={handleInputChange} userInputs={userInputs} />
      <ResultTable inputs={userInputs} />
    </>
  );
}

export default App;
