import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./footer.css";
const Foot = () => {
  return (
    <div>
      <div className="foot-div">
        <div>
          <h4>Company</h4>
          <p>Visa Service</p>
          <p>Hotels Service</p>
          <p>Flight Service</p>
        </div>
        <div>
          <h4>Top Destination</h4>
          <p>Saudi Arabia</p>
          <p>United States</p>
          <p>Argentina</p>
          <p>United kingdom</p>
          <p>Israel</p>
          <p>Saudi Arabia</p>
          <p>Afghanistan</p>
          <p>Germany</p>
          <p>Norway</p>
          <p>China</p>
        </div>
        <div>
          <h4>Resources</h4>
          <p>Careers</p>
          <p>About us</p>
          <p>FAQs</p>
          <p>Help center</p>
        </div>
        <div>
          <h4>Policies</h4>
          <p>Terms & Conditions</p>
          <p>cookies</p>
          <p>privacy</p>
        </div>
        <div>
          <h4>Other Information</h4>
          <p>Affiliate</p>
          <p>Become Vendor</p>
        </div>
      </div>
      <div className="lastman">
        <hr></hr>
        <p className="lastee">@2024. TVA All Rights Reserved</p>
        <p className="lasticons">
          <FaXTwitter className="icons"/>
          <FaInstagram className="icons" />
          <FaFacebookF className="icons"/>
        </p>
      </div>
    </div>
  );
};

export default Foot;
