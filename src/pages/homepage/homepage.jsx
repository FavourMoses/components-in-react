import './homepage.css';
import Nav from '../../components/bar/Nav1';
// import Navbar from './components/bar/bar';
import Sec from '../../components/bar/section2/section';
import Build from '../../components/bar/section2/building';
import Lastm from '../../components/bar/section2/lastm';
import Foot from '../../components/footer/footer';
const Home = () => {
    return ( 
        <div className='wrapper'>
      {/* <Navbar /> */}
      <Nav />
      <Sec />
      <p className="head">Read the Latest</p>
      <div className="thirdMultiple">
        <Build />
        <Build />
        <Build />
        <Build />
      </div>
      <div className="last-multiple">
        <p id="h">What our customers are saying</p>
        <div className="end">
          <Lastm />
          <Lastm />
          <Lastm />
          <Lastm />
        </div>
      </div>
      <Foot />
    </div>
     );
}
 
export default Home;