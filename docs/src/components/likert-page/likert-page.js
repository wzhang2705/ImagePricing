import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import LikertScale from "./likert-scale/likert-scale";
import 'bootstrap/dist/css/bootstrap.min.css';

const LikertPage = (props) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(props.basePath + '/end');
    }

    return (
        <div className="w-100">
            <h1>For each of the following statements, rate the extent to which you 
                <span className="fw-bold fst-italic"> agree/disagree:</span>
            </h1>
            <div className="text-left w-30 mt-5">
                <LikertScale msg="I can tell the difference between artist pieces and AI-generated content." />
                <LikertScale msg="AI-generated content and original artist pieces should be given equal value." />
                <LikertScale msg="I prefer original artist pieces over AI-generated content." />
                <LikertScale msg="I am invested in the art world." />
            </div>
        </div>
    );

}

export default LikertPage;