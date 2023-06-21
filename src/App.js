import NavigationBar from "./component/NavigationBar";
import Intro from "./component/intro";
import Film from "./component/Film";
import "./assets/style/landingpage.css";
import Trending from "./component/Trending";
import { navbarscroll } from "./script/navbar-scroll";

function App() {
  return (
    <div>
      <div className="bgNavbar" onChange={navbarscroll}>
        <NavigationBar />;
        <Intro />
      </div>
      <div className="Film">
        <Film />
      </div>
      <div className="Trend">
        <Trending />
      </div>
    </div>
  );
}

export default App;
