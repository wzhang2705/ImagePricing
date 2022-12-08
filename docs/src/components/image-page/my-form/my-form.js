import "./my-form.css";
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const NUMFORMS = 24;

function MyForm(props) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (remaining === 0) {
      setIsShown(false);
      navigate(props.basePath + '/bigreveal');
    } else {
      setIsShown(true);
    }
  }

  const [values, setValues] = useState([
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0
  ]);

  var [remaining, setRemaining] = useState(10000000);
  var [isShown, setIsShown] = useState(false);
  
  const handleOnChange = (event) => {
    setValues(values.map((value, i) => {
      if (i == event.target.id) {
        console.log(event.target.value);
        if (event.target.value == "") {
          setRemaining(remaining + parseInt(value));
          return 0;
        } else {
          setRemaining(remaining + parseInt(value) - parseInt(event.target.value));
          return event.target.value;
        }
      } else return value;
    }))
    setIsShown(false);
  }

  const rows = [];
  for (let id = 1; id <= NUMFORMS; id++) {
      rows.push(
      <div className="forms-item">
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
        Remember to ensure that all the values of the pieces adds up to $10M</p>
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
