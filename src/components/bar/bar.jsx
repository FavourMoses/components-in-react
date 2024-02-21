import raid from './bar.module.css';
import img1 from "../../images/img1.png";

const Navbar = () => {
  return (
    <div className={raid.first}>
      <div className={raid.paragraphImg}>
        <img src={img1} alt="flower" className={raid.navImg} />
        <p className={raid.pnav}>travel avatar</p>
      </div>
      <ul className={raid.visa}>
        <li href="#">Visa</li>
        <li href="#">Flights</li>
        <li href="#">Hotels bookings</li>
      </ul>
      <div className={raid.navlast}>
        <ul className={raid.sign}>
          <li href="#">Login</li>
          <li href="#">Signup</li>
        </ul>
        <select id={raid.myDropdown}>
          <option value="">En</option>
          <option value="option1">Arabic</option>
          <option value="option2">Chineese</option>
          <option value="option3">French</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
