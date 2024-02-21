import "./building.css";
import build from "../../../images/build.png";
const Build = () => {
  return (
    <div>
      <img className="build-image" src={build} alt="flower" />
      <div className="buildDiv">
        <p className="buildp1">August 2023</p>
        <p className="buildp2">5 mins read</p>
        <h3>What is the United State Visitor Visa(Subclass 600)?</h3>
        <p className="buildp3">
          Aliquet urna aliquam est ac orci convallis pret im.Sed <br />
          neque blandit volut pat ut malesuadia odio.At cursus <br />
          massa nisi urna at cras diam.
        </p>
      </div>
    </div>
  );
};

export default Build;
