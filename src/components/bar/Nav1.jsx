import './Nav1.css';
import girl from "../../images/girl.png";
const Nav = () => {
  return (
    <section>
      <div className="parent">
        <div>
          <h1 className="para">
            Your Gateway To Seamless Visa <br />
            Applications.
          </h1>
          <p className="p2">
            Our platform is designed to guide you seamlessly through the journey
            of obtaining the necessary travel <br />
            visa, ensuring you are well prepared for your adventure.
          </p>
          <div className="div2">
            <div>
              <label>I&apos;m applying from</label>
              <div className="first-dropdown">
                <select id="myDropdown1" className="drop">
                  <option value="">Select current location</option>
                  <option value="option1">Paris</option>
                  <option value="option2">Abuja</option>
                  <option value="option3">Accra</option>
                </select>
              </div>

              <label >I&apos;m going to</label>
              <div className="second-dropdown">
                <select id="myDropdown2">
                  <option value="">Select destination</option>
                  <option value="option1">Nigeria</option>
                  <option value="option2">China</option>
                  <option value="option3">Dubai</option>
                </select>
              </div>
              <div className="passport-div">
                <label id='label3'>Passport carried</label>
                <input
                  id="thirdbox"
                  placeholder="Enter passport carried"
                ></input>
                <div>
                  <button id="start">Start visa process</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img id="girlimg" src={girl} alt="flower" />
      </div>
    </section>
  );
};

export default Nav;
