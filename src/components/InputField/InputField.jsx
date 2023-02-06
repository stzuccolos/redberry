import { useRef } from "react";
import "./InputField.css";

const InputField = (params) => {
  const inputBox = useRef(null);

  function Vaildate() {
    const { pattern } = params;
    if(!pattern){
      return;
    }

    const inputText = inputBox.current.value;
    const isMatch = pattern.test(inputText);
    
    const classes = inputBox.current.classList;
    if(isMatch){
      classes.remove("invalid");
      classes.add("valid");
    }
    else{
      classes.remove("valid");
      classes.add("invalid");
    }
  }

  return (
    <input ref={inputBox} onKeyUp={Vaildate} className="input-field"></input>
  );
};

export default InputField;
