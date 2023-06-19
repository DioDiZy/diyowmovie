import NavigationBar from "./component/NavigationBar";
import Intro from "./component/Intro";
import Film from "./component/Film";
import "./assets/style/landingpage.css";
function App() {
  return (
    <div>
      <div className="bgNavbar">
        <NavigationBar />;
        <Intro />
      </div>
      <div className="Film">
        <Film />
      </div>
    </div>
  );
}

export default App;
