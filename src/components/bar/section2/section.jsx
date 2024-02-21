import './section.css';
import { BiColor, BiWorld } from "react-icons/bi";
import { FiFilePlus } from "react-icons/fi";
import { BsBoxArrowUpLeft } from "react-icons/bs";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import Picture from './pic';
import Card from '../../card/card';
const Sec = () => {
    return (
      <div>
        <div>
          <h3 className="all">Secure Your Visa In Few Steps</h3>
          <p className="p">
            Allquet urna allquam est ac orci convallis pret im. Sed neque
            blandit volut pat ut
            <br />
            malesuada odio.At cursus massa nisl urna at cras diam.
          </p>
        </div>

        <div className="container">
          <Card
            icon={<BiWorld />}
            title="Choose destination"
            color="rgb(57, 132, 218)"
            headColor="#ffffff"
            textColor="#ffffff"
          />
          <Card
            icon={<BsBoxArrowUpLeft />}
            title="Provide Visa Application"
            color="#faf6ff"
            headColor="#7824ff"
            textColor="#5b5a5d"
          />
          <Card
            icon={<FiFilePlus />}
            title="Submit Required Documents"
            color="#ecfcf6"
            headColor="#13a071"
            textColor="#5b5a5d"
          />
          <Card
            icon={<RiCheckboxMultipleLine />}
            title="Visa Approval & Delivery"
            color="#fff4fe"
            headColor="#df82cb"
            textColor="#5b5a5d"
          />

        </div>
        <p className="all">Explore visas of trending destinations</p>
        <div className="pic-div">
          <Picture country="USA" />
          <Picture country="UK" />
          <Picture country="Turkey" />
          <Picture country="Dubai" />
        </div>

        {/* <Button btntitle="<h3>Choose destination</h3>" className="apt" /> */}
      </div>
    );
}
 
export default Sec;