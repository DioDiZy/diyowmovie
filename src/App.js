import NavigationBar from "./component/NavigationBar";
import Pembukaan from "./component/Pembukaan";
import Film from "./component/Film";
import "./assets/style/landingpage.css";
import Trending from "./component/Trending";
import { navbarscroll } from "./script/navbar-scroll";

function App() {
  return (
    <div>
      <div className="bgNavbar" onChange={navbarscroll}>
        <NavigationBar />;
        <Pembukaan />
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
