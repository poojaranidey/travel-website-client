
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import AddService from './components/AddService/AddService';
import AuthProvider from './context/AuthProvider';
import ManageServices from './components/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <div className="App">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>

              <Route exact path="/service">
                <Services></Services>
              </Route>
              <Route exact path="/details/:serviceId">
                <Details></Details>
              </Route>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              <Route exact path='/register'>
                <Register></Register>
              </Route>
              <Route exact path="/addservice">
                <AddService></AddService>
              </Route>
              <Route exact path="/manageservice">
                <ManageServices></ManageServices>
              </Route>

              <Route exact path="*">
                <NotFound></NotFound>
              </Route>

            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </div >
    </div>
  );
}

export default App;
