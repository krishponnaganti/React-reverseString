import "./styles.css";
import StringReverse from "./StringReverse";
import { useState } from "react";
export default function App() {
  const [getReverseString, handleReverseGivenStringState] = useState("");
  const revArray = [];
  let newRevArr = "";
  let revString = "";
  const handleReverseGiven = (event) => {
    // console.log(event.target.value);
    revArray.push(event.target.value);
    newRevArr = revArray.join().split("");
    // console.log(revArray.length);
    for (let k = 0; k < newRevArr.length; k++) {
      revString += newRevArr[newRevArr.length - 1 - k];
      console.log(revString);
      // console.log(revArray.length);
    }

    handleReverseGivenStringState(revString);
  };
  return (
    <div className="App">
      <h1>Hello Peers</h1>
      <StringReverse
        reverseString={getReverseString}
        reverseGivenString={handleReverseGiven}
      />
    </div>
  );
}
