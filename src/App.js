
import 'bootstrap/dist/css/bootstrap.min.css';
import  {HashRouter as Router , Route , Switch} from "react-router-dom"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SingleCocktailPage from "./pages/SingleCocktailPage";
import ErrorPage from "./pages/ErrorPage";
import NavbarComponent from "./components/Navbar";


function App() {
  return (
    <Router>
<NavbarComponent/>
      <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktailPage/>
          </Route>
          <Route path="*">
              <ErrorPage/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
