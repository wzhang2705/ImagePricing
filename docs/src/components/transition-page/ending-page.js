import './transition-page.css';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const EndingPage = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
      navigate(props.basePath + '/');
  } 
  return (
    <div className="transition-container">
        <h1>You can NEVER be certain whether something is 
            <span className="fw-bold fst-italic"> AI-generated </span>or
            <span className="fw-bold fst-italic"> humanmade</span>
        </h1>
        <br/>
        <h1>
            Thank you for taking the time to explore our survey!
        </h1>
        <div className="begin-centered" onClick={handleOnClick}>
            <div className="italicize">
                Back to start
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

export default EndingPage;