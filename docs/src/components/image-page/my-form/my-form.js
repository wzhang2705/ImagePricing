import "./my-form.css";
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const NUMFORMS = 24;

function MyForm(props) {
  const [values, setValues] = useState([
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0
  ]);
  var [remaining, setRemaining] = useState(10000000);
  var [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  let handleSubmit = function() {
    localStorage.setItem("valuation_data", JSON.stringify(values))
  }

  const handleOnClick = () => {
    if (remaining === 0) {
      setIsShown(false);
      handleSubmit()
      navigate(props.basePath + '/bigreveal');
    } else {
      setIsShown(true);
    }
  }
  
  const handleOnChange = (event) => {
    setValues(values.map((value, i) => {
      if (parseInt(event.target.id) - 1 === i) {
        if (event.target.value === "") {
          setRemaining(remaining + parseInt(value));
          return 0;
        } else {
          setRemaining(remaining + parseInt(value) - parseInt(event.target.value));
          return parseInt(event.target.value);
        }
      } else return parseInt(value);
    }))
    setIsShown(false);
  }

  const rows = [];
  for (let id = 1; id <= NUMFORMS; id++) {
      rows.push(
      <div className="forms-item" key={id}>
        <Form>
          <Form.Group className="mb-3" controlId={id}>
            <Form.Label>Image #{id}</Form.Label>
            <Form.Control type="number" min="0" max="10000000" data-bind="value:replyNumber" placeholder="0" onChange={handleOnChange} />
          </Form.Group>
        </Form>
      </div>
      );
  }

  return (
    <div>
      <p className="p-5 fw-bold fst-italic">For each piece, place a value between $0-$10M to indicate the approximate value you would give to it. 
        Remember to ensure that all the values of the pieces adds up to $10M.</p>
      <div className="forms-container">
        {rows}
      </div>
      <p>Remaining money left: ${remaining}</p>
      {isShown && (
        <p className="mx-auto text-danger">Assigned values must add up to $10M</p>
      )}
      <div className="begin float-end" onClick={handleOnClick}>
        <div className="italicize">
          I'm done allocating values
        </div>
        <div className="arrow">
          <div>
            <BsArrowRight size={70}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
