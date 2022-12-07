import './image-page.css';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

const ImagePage = (props) => {
  let { id } = useParams();
  var nextId = toString(id + 1);
  console.log(id);

  const navigate = useNavigate();

  var imagePath = "../../images/pieces/" + id + ".jpg";
  console.log(imagePath)

  const handleOnClick = () => {
    navigate(props.basePath + '/image/' + nextId);
  }

  return (
    <div className = "image">
        <h1>Here is piece #{ id }:</h1>
        <div className="block">
          <img src="../../images/pieces/1.jpg" alt="artist" />
        </div>
        <div className="block">
          <p>Imagine you are at an art auction. You’ve been given a total of $10M. 
            You have to spend it all over the following 24 pieces.</p>
          <div className="begin" onClick={handleOnClick}>
            <div className="italicize">
              How will you allocate your money?
            </div>
            <div className="arrow" c>
              <div>
                <BsArrowRight size={70}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ImagePage;