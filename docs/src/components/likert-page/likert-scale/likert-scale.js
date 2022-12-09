import "./likert-scale.css";
import React from "react";
import Likert from 'react-likert-scale';

const LikertScale = (props) => {
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
      console.log(val);
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