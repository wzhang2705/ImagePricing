import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import LikertScale from "./likert-scale/likert-scale";
import 'bootstrap/dist/css/bootstrap.min.css';

const LikertPage = (props) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(props.basePath + '/results');
    }

    return (
        <div className="w-100">
            <h1>For each of the following statements, rate the extent to which you 
                <span className="fw-bold fst-italic"> agree/disagree:</span>
            </h1>
            <div className="text-left w-30 mt-5">
                <LikertScale msg="I can tell the difference between artist pieces and AI-generated content." qNum="q1"/>
                <LikertScale msg="AI-generated content and original artist pieces should be given equal value." qNum="q2"/>
                <LikertScale msg="I prefer original artist pieces over AI-generated content." qNum="q3"/>
                <LikertScale msg="I am invested in the art world." qNum="q4"/>
            </div>
            <div className="begin float-end" onClick={handleOnClick}>
            <div className="italicize">
              Let's check out the results!
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

export default LikertPage;