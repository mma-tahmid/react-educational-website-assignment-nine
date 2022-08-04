import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Instructors from './Components/Instructors/Instructors';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <div>
        <h1> CourseGuro E-learning platform  </h1>
      </div>

      <Router>

        <Header> </Header>

        <Switch>

          <Route path="/home">

            <Home> </Home>

          </Route>


          <Route path="/services">

            <Services> </Services>

          </Route>

          <Route path="/instructorDetails">

            <Instructors> </Instructors>

          </Route>

          <Route exact path="/about">

            <About> </About>

          </Route>

          <Route exact path="/">

            <Home> </Home>

          </Route>

          <Route path="*">

            <NotFound> </NotFound>

          </Route>


        </Switch>



      </Router>

      <Footer>

      </Footer>



    </div>



  );
}

export default App;
