import "./likert-scale.css";
import React, { useState } from "react";
import Likert from 'react-likert-scale';

const LikertScale = (props) => {
  // begin at neutral
  var [value, setValue] = useState(3);
  localStorage.setItem(props.qNum, value)
  const likertOptions = {
    question: null,
    responses: [
      { value: 1, text: "Strongly Disagree" },
      { value: 2, text: "Disagree" },
      { value: 3, text: "Neutral", checked: true },
      { value: 4, text: "Agree" },
      { value: 5, text: "Strongly Agree" }
    ],
    onChange: val => {
      // update the value indicated by the likert scale
      // console.log(val.value);
      setValue(val.value);
      // set the value of that question to the updated value
      localStorage.setItem(props.qNum, val.value);
    }
  };
  return (
    <div className="d-flex">
        <div className="w-50 mw-50">
            <p className="d-block mw-50 float-left">{props.msg}</p>
        </div>
        <div className="w-50">
            <Likert {...likertOptions} />
        </div>
    </div>
  )
}

export default LikertScale;