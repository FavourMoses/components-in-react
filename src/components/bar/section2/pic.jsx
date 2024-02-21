import "./pic.css";
import house from "../../../images/house.png";
import { CiClock2 } from "react-icons/ci";
const  Picture = ({country}) => {
  return (
    <>
      <div className="pic-container">
        <img className="pic-image" src={house} alt="flower" />
        <h4>
          <span>{country} visa </span>
        </h4>
        <p className="pic-paragraph">
          from <span>$250</span>
        </p>
        <CiClock2 /> 5 working days
      </div>
    </>
  );
};

export default Picture;
